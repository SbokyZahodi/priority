import { makeAutoObservable, runInAction } from "mobx";
import { projectsAPI } from "./../API/projects/projects";
import { ITask } from "./../API/projects/response";
import { tasksAPI } from "./../API/tasks/tasks";
class Tasks {
  tasks: ITask = {
    tasks: [],
  };
  getTodoPending: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async createTodo(data: {
    url_by_title: string;
    todo: string;
    priority: number;
  }) {
    return await tasksAPI
      .addTask(data)
      .then((res) => {
        runInAction(() => {
          this.tasks.tasks.push(res);
        });
      })
      .catch((err) => {
        console.log("Failed to create todo");
      });
  }

  async getTodos(project_id_by_title: string) {
    this.getTodoPending = true;
    return await projectsAPI
      .getTodos(project_id_by_title)
      .then((res) => {
        runInAction(() => {
          this.tasks = res;
          this.getTodoPending = false;
        });
      })
      .catch(() => {
        console.log("failed to get Todos");
      });
  }

  async deleteTodo(id: number) {
    return await tasksAPI
      .deleteTask(id)
      .then((res) => {
        runInAction(() => {
          console.log("works?");
          this.tasks.tasks = this.tasks.tasks.filter((item) => item.id !== id);
        });
      })
      .catch(() => {
        console.log("Remove task failed");
      });
  }

  async updateTodo(id: number) {
    const task = this.tasks.tasks.find((item) => item.id === id);

    if (task) {
      return await tasksAPI
        .updateTask(task)
        .then((res) => {
          runInAction(() => {
            this.tasks.tasks = this.tasks.tasks.filter(
              (item) => item.id !== id
            );
          });
        })
        .catch(() => {
          console.log("Failed update task");
        });
    }
  }
}
export default new Tasks();

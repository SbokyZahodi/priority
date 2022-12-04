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
        this.tasks.tasks.push(res);
      })
      .catch((err) => {
        console.log("Something goes wrong");
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
        console.log("Something goes wrong");
      });
  }
}
export default new Tasks();

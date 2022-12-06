import { ITask } from "./../projects/response";
import axios from "axios";

class TasksAPI {
  instanse = axios.create({
    baseURL: "http://localhost:3000/api/todos/",
    withCredentials: true,
  });

  async addTask(data: {
    url_by_title: string;
    todo: string;
    priority: number;
  }) {
    return (
      await this.instanse.post("create", {
        ...data,
      })
    ).data;
  }

  async deleteTask(id: number) {
    return (
      await this.instanse.delete("delete", {
        data: {
          id,
        },
      })
    ).status;
  }

  async updateTask(data: {
    completed: boolean;
    priority: number;
    todo: string;
    id: number;
  }) {
    return (
      await this.instanse.patch("patch", {
        ...data,
      })
    ).status;
  }
}
export const tasksAPI = new TasksAPI();

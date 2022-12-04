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
}
export const tasksAPI = new TasksAPI();

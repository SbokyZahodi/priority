import { IProject } from "./response";
import axios from "axios";

class ProjectsAPI {
  instanse = axios.create({
    baseURL: "http://localhost:3000/api/projects/",
    withCredentials: true,
  });

  async createProject(title: string) {
    return (
      await this.instanse.post("create", {
        title,
      })
    ).data;
  }
  async getProjects() {
    return (await this.instanse.get<IProject>("get")).data;
  }

  async getTodos(url_by_title: string) {
    return (await this.instanse.get<>(`${url_by_title}`)).data;
  }
}
export const projectsAPI = new ProjectsAPI();

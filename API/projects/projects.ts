import { IProject, ITask } from "./response";
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
    return (await this.instanse.get<ITask>(`${url_by_title}`)).data;
  }

  async deleteProject(id: number) {
    return await this.instanse.delete("delete", {
      data: {
        id,
      },
    });
  }

  async updateProjectTitle(data: { id: number; title: string }) {
    return (await this.instanse.patch("patch", data)).status;
  }
}
export const projectsAPI = new ProjectsAPI();

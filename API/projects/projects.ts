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
    return await (
      await this.instanse.get("get")
    ).data;
  }
}
export const projectsAPI = new ProjectsAPI();

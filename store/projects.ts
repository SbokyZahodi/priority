import { makeAutoObservable, runInAction } from "mobx";
import { projectsAPI } from "./../API/projects/projects";
import { IProject } from "./../API/projects/response";
class Projects {
  projects: IProject = {
    projects: [],
  };

  projectsPending: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getProjects() {
    if (!this.projects.projects.length) {
      this.projectsPending = true;
      return await projectsAPI.getProjects().then((res) => {
        runInAction(() => {
          console.log(res, "PROJECTS LIST");
          this.projects = res;
          this.projectsPending = false;
        });
      });
    }
  }

  async createProject(title: string) {
    return await projectsAPI.createProject(title).then((res) => {
      runInAction(() => {
        this.projects.projects.push(res);
      });
    });
  }

  async updateProjectTitle(id: number, title: string) {
    return await projectsAPI
      .updateProjectTitle({
        id,
        title,
      })
      .then((res) => {
        runInAction(() => {
          this.projects.projects.forEach((item) => {
            if (item.id === id) {
              item.title = title;
            }
          });
        });
      })
      .catch(() => {
        console.log("Failed to update projectTitle");
      });
  }

  async deleteProject(id: number) {
    return await projectsAPI
      .deleteProject(id)
      .then(() => {
        runInAction(() => {
          this.projects.projects = this.projects.projects.filter(
            (item) => item.id !== id
          );
        });
      })
      .catch(() => {
        console.log("Failed to delete project");
      });
  }
}
export default new Projects();

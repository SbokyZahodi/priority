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
}
export default new Projects();

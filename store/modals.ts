import { makeAutoObservable } from "mobx";
class Modals {
  projectsModal: boolean = false;
  createProjectModal: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setProjectsModal() {
    this.projectsModal = !this.projectsModal;
  }
  setCreateProjectModal() {
    this.createProjectModal = !this.createProjectModal;
  }
}
export default new Modals();

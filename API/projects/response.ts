export interface IProject {
  projects: {
    title: string;
    url_by_title: string;
    id: number;
  }[];
}

export interface ITask {
  tasks: {
    id: number;
    todo: string;
    completed: boolean;
    projectsId: number;
    priority: number;
  }[];
}

import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import projects from "../../../store/projects";
import Preloader from "../../helpers/preloader";
import AddProjectButton from "./addProjectButton";
import Project from "./Project";

interface props {
  className?: string;
}

const Projects: FC<props> = observer(({ className }) => {
  useEffect(() => {
    projects.getProjects();
  }, []);

  const projectsGroup = projects.projects.projects;

  return (
    <div className={`${className}`}>
      <AddProjectButton />

      {projectsGroup && (
        <div className="overflow-auto">
          {projectsGroup.map(({ id, title }) => (
            <Project title={title} id={0} key={id} />
          ))}
        </div>
      )}

      {projects.projectsPending && (
        <Preloader className="flex justify-center items-center mt-24" />
      )}
    </div>
  );
});
export default Projects;

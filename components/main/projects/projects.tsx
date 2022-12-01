import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { projectsAPI } from "../../../API/projects/projects";
import { QUERY_NAMESPACES } from "../../../lib/queryNamespaces";
import Preloader from "../../helpers/preloader";
import AddProjectButton from "./addProjectButton";
import Project from "./Project";

interface props {
  className?: string;
}

const Projects: FC<props> = ({ className }) => {
  const { data } = useQuery(
    [QUERY_NAMESPACES.projects],
    async () => await projectsAPI.getProjects()
  );

  return (
    <div className={`${className}`}>
      <AddProjectButton />

      {data && (
        <div className="overflow-auto">
          {data.projects.map(({ id, title }) => (
            <Project title={title} id={0} key={id} />
          ))}
        </div>
      )}

      {!data && (
        <Preloader className="flex justify-center items-center mt-24" />
      )}
    </div>
  );
};
export default Projects;

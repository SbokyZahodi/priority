import { FC } from "react";
import AddProjectButton from "./addProjectButton";
import Project from "./Project";

interface props {
  className?: string;
}

let uid = 0;
const projects = [
  { title: "stalwiki", id: uid++ },
  { title: "calculator", id: uid++ },
  { title: "pizzeria", id: uid++ },
  { title: "priority", id: uid++ },
];

const Projects: FC<props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <AddProjectButton />
      <div className="overflow-auto">
        {projects.map(({ id, title }) => (
          <Project title={title} id={0} key={id} />
        ))}
      </div>
    </div>
  );
};
export default Projects;

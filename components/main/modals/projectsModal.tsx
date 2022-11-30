import { observer } from "mobx-react-lite";
import { FC } from "react";
import modals from "../../../store/modals";
import Projects from "../projects/projects";

interface props {}

const ProjectsModal: FC<props> = observer(({}) => {
  if (!modals.projectsModal) {
    return null;
  }

  return (
    <div className={`h-screen w-screen absolute top-0 z-10`}>
      <Projects className="h-full w-full p-3 rounded-md bg-none backdrop-blur-sm" />
    </div>
  );
});
export default ProjectsModal;

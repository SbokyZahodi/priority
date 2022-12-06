import { FC } from "react";

interface props {}

const ProjectActions: FC<props> = ({}) => {
  return (
    <div className={`absolute w-screen h-screen flex justify-center items-center`}>
      <div className="bg-zinc-700 shadow-md  ">
        <span>Пет-проект</span>
      </div>
    </div>
  );
};
export default ProjectActions;

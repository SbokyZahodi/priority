import { FC } from "react";

interface props {}

const ProjectDropdown: FC<props> = ({}) => {
  return <div className="bg-zinc-500 py-3 p-1 rounded-md mt-2">
    <button>Удалить проект</button>
    <button>Очистить задачи</button>
  </div>;
};
export default ProjectDropdown;

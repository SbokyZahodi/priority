import { FC, ReactNode } from "react";
import AddTask from "./addTask";

interface props {
  children: ReactNode;
}

const TasksLayout: FC<props> = ({ children }) => {
  return (
    <div className={`p-3 overflow-auto w-full`}>
      <div className="md:p-4 mb-2 md:mb-0 flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <button className="btn btn-circle btn-md btn-outline btn-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <span className="text-3xl">Название проекта</span>
        </div>
        <button className="btn btn-error btn-outline btn-md">Delete project</button>
      </div>
      <div className="lg:w-[600px] p-2">
        <AddTask />
        {children}
      </div>
    </div>
  );
};
export default TasksLayout;

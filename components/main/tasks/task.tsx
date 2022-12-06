import { FC } from "react";
import tasks from "../../../store/tasks";

interface props {
  todo: string;
  id: number;
  priority: number;
}

const Task: FC<props> = ({ id, priority, todo }) => {
  const removeTodo = () => {
    tasks.deleteTodo(id);
  };

  return (
    <div className={`bg-[#3E3E3F] mt-5  rounded-md shadow-md p-4 text-lg `}>
      <div className="flex justify-between">
        <div>Приоритет: {priority}</div>
        <button
          className="btn btn-circle btn-sm btn-outline hover:bg-red-500"
          onClick={() => removeTodo()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="">{todo}</div>
      <div className="flex justify-end">
        <button className="btn btn-circle btn-sm btn-outline hover:bg-green-400">
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Task;

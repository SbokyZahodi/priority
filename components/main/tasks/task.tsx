import { FC } from "react";

interface props {
  todo: string;
  id: number;
  priority: number;
}

const Task: FC<props> = ({ id, priority, todo }) => {
  return (
    <div
      className={`bg-[#3E3E3F] mt-5  rounded-md shadow-md p-4 text-lg  lg:w-[600px]`}
    >
      <div className="flex justify-between">
        <div>Приоритет: {priority}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="">{todo}</div>
      <div className="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          stroke="currentColor"
          className="w-9 h-9 hover:text-green-400 transition cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};
export default Task;

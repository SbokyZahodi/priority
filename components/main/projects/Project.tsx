import { FC } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface props {
  title: string;
  id: number;
}

const Project: FC<props> = ({ title, id }) => {
  return (
    <Link
      href={`/projects/${title}`}
      className={`m-2 p-3 text-xl rounded-md flex items-center justify-between bg-gradient-to-r from-indigo-500 to-red-500`}
    >
      <span className="truncate">{title}</span>
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
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </Link>
  );
};
export default Project;

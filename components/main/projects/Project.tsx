import Link from "next/link";
import { FC } from "react";

interface props {
  title: string;
  id: number;
}

const Project: FC<props> = ({ title, id }) => {
  return (
    <div className="w-full mt-2 p-3 text-xl rounded-md  items-center justify-between shadow-md bg-zinc-600">
      <Link href={`/projects/${title}`} className={``}>
        <div className="flex justify-between">
          <span className="truncate">{title}</span>
        </div>
      </Link>
    </div>
  );
};
export default Project;

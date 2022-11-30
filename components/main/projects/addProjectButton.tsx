import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC, useState } from "react";
import { projectsAPI } from "../../../API/projects/projects";

interface props {}

const AddProjectButton: FC<props> = ({}) => {
  const [ProjectName, setProjectName] = useState("");
  const client = useQueryClient();

  const createProject = useMutation({
    mutationKey: ["projects"],
    mutationFn: () => projectsAPI.createProject(ProjectName),
    onSuccess: () => {
      client.invalidateQueries(["projects"]);
      console.log("Project created");
    },
  });

  const addProject = (e) => {
    if (e.key === "Enter") {
      createProject.mutate(ProjectName);
    }
  };

  return (
    <div className="dropdown dropdown-bottom">
      <label tabIndex={0} className="btn btn-wide m-2 glass text-white">
        Добавить проект
      </label>
      <div tabIndex={0} className="dropdown-content menu p-2 ">
        <div className="flex space-x-2 ">
          <input
            type="text"
            placeholder="Название..."
            className="input bg-zinc-500 placeholder-slate-100 shadow-xl outline-none text-lg"
            value={ProjectName}
            onChange={(e) => setProjectName(e.target.value)}
            onKeyDown={(e) => addProject(e)}
          />
          <div className="kbd bg-zinc-700 hidden lg:flex">Enter</div>
          <div className="kbd bg-zinc-700 lg:hidden">Add</div>
        </div>
      </div>
    </div>
  );
};
export default AddProjectButton;

import { useRouter } from "next/router";
import { FC, useState } from "react";
import { tasksAPI } from "../../../API/tasks/tasks";
import tasks from "../../../store/tasks";

interface props {}

const AddTask: FC<props> = ({}) => {
  const [Todo, setTodo] = useState("");
  const [Priority, setPriority] = useState(0);

  const router = useRouter();
  const projectId = router.query.project;

  const createTodo = () => {
    tasks.createTodo({
      priority: Priority,
      todo: Todo,
      url_by_title: projectId,
    });
  };

  return (
    <>
      <div className="flex space-x-2">
        <input
          className={` bg-zinc-700 outline-none text-xl p-4 rounded-md w-full  `}
          value={Todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <div>
          <select
            name=""
            id=""
            value={Priority}
            className="select select-ghost text-xl  hover:bg-zinc-700 bg-zinc-700 focus:bg-zinc-700"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="btn btn-outline px-10 btn-sm m-2"
          onClick={() => createTodo()}
        >
          Add
        </button>
      </div>
    </>
  );
};
export default AddTask;

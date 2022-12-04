import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import tasks from "../../../store/tasks";
import Preloader from "../../helpers/preloader";
import AddTask from "./addTask";
import Task from "./task";

interface props {}

const Tasks: FC<props> = observer(({}) => {
  const router = useRouter();
  const projectId = router.query.project;

  useEffect(() => {
    tasks.getTodos(projectId);
  }, [projectId]);

  const tasksGroup = tasks.tasks.tasks;
  return (
    <div className={`m-2 overflow-auto w-full`}>
      <div className="sticky top-0 bg-zinc-700 rounded-md m-2 p-2 md:flex space-x-5">
        <div className="flex space-x-2 bg-zinc-600 p-2 rounded-md">
          <div className="btn btn-sm btn-ghost">Current</div>
          <div className="btn btn-sm btn-ghost">Completed</div>
        </div>
      </div>
      <AddTask />
      <div className="">
        <div className="">
          {tasks.getTodoPending && (
            <Preloader className="flex justify-center items-center" />
          )}
          {!tasks.getTodoPending && tasksGroup && sortTasks(tasksGroup)}
        </div>
      </div>
    </div>
  );
});

const sortTasks = (tasks: { id: number; priority: number; todo: string }[]) => {
  return tasks
    .slice()
    .sort((a, b) => {
      if (a.priority > b.priority) {
        return 1;
      }
      if (a.priority < b.priority) {
        return -1;
      }
      return 0;
    })
    .reverse()
    .map(({ id, priority, todo }) => (
      <Task todo={todo} id={id} priority={priority} key={id} />
    ));
};

export default Tasks;

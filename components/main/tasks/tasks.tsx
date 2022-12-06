import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { FC } from "react";
import tasks from "../../../store/tasks";
import Preloader from "../../helpers/preloader";
import Task from "./task";

interface props {}

const Tasks: FC<props> = observer(({}) => {
  const router = useRouter();

  const tasksGroup = tasks.tasks.tasks;

  return (
    <div className="">
      {tasks.getTodoPending && (
        <Preloader className="flex justify-center items-center" />
      )}
      {!tasks.getTodoPending && tasksGroup && sortTasks(tasksGroup)}
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

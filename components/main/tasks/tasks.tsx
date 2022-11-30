import { FC } from "react";
import Task from "./task";

interface props {}

let uid = 0;

let tasks = [
  { todo: "Создать рабочую папку для проекта", priority: 1, id: uid++ },
  { todo: "Создать различные ситуации для этого", priority: 2, id: uid++ },
  { todo: "Починить кнопку sell", priority: 1, id: uid++ },
  { todo: "Приоритетная задача", priority: 4, id: uid++ },
  { todo: "Приоритетная задача", priority: 4, id: uid++ },
  { todo: "Приоритетная задача", priority: 4, id: uid++ },
  { todo: "Приоритетная задача", priority: 4, id: uid++ },
  { todo: "Приоритетная задача", priority: 4, id: uid++ },
  { todo: "Приоритетная задача", priority: 4, id: uid++ },
  {
    todo: "Супер мега приоритетная задача которую обязательно надо выполнить за неделю иначе ты погибнешь смертной смертью и будешь очень сильно страдать",
    priority: 5,
    id: uid++,
  },
];

const Tasks: FC<props> = ({}) => {
  return (
    <div className={`m-2 overflow-auto w-full`}>
      <div className="sticky top-0 bg-zinc-700 rounded-md m-2 p-2 md:flex space-x-5">
        <div className="flex space-x-2 bg-zinc-600 p-2 rounded-md">
          <div className="btn btn-sm btn-ghost">Current</div>
          <div className="btn btn-sm btn-ghost">Completed</div>
        </div>
      </div>
      <div className="m-2">
        <div className="md:p-4">
          {tasks
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
            ))}
        </div>
      </div>
    </div>
  );
};
export default Tasks;

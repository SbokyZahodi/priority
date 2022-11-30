import { FC, ReactNode } from "react";

interface props {
  children: ReactNode;
}

const TasksLayout: FC<props> = ({ children }) => {
  return (
    <div className={``}>
      <div>
        <div></div>
        <div></div>
      </div>
      {children}
    </div>
  );
};
export default TasksLayout;

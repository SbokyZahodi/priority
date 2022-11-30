import { FC, ReactNode } from "react";
import CreateProject from "./modals/createProject";
import ProjectsModal from "./modals/projectsModal";
import Navbar from "./navbar/navbar";
import Projects from "./projects/projects";

interface props {
  children: ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  return (
    <div className={`h-screen w-screen`}>
      <Navbar />
      <ProjectsModal />
      <CreateProject />
      <div className="flex h-full w-full">
        <Projects className="hidden lg:block m-5 p-5 rounded-md bg-blue-400" />
        {children}
      </div>
    </div>
  );
};
export default Layout;

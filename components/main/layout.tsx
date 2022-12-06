import { FC, ReactNode } from "react";
import { withAuth } from "../../lib/hoc/withAuth";
import WithAuth from "../../lib/hoc/withAuthComponent";
import CreateProject from "./modals/createProject";
import ProjectActions from "./modals/projectActions";
import ProjectsModal from "./modals/projectsModal";
import Navbar from "./navbar/navbar";
import Projects from "./projects/projects";

interface props {
  children: ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  return (
    <WithAuth>
      <div className={`h-screen w-screen`}>
        <Navbar />
        <ProjectsModal />
        <CreateProject />
        {/* <ProjectActions /> */}
        <div className="flex h-full w-full">
          <Projects className="hidden lg:block m-5 p-5 rounded-md bg-zinc-500 bg-opacity-25 " />
          {children}
        </div>
      </div>
    </WithAuth>
  );
};
export default Layout;

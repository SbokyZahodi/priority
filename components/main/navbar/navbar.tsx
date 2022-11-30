import { FC } from "react";
import { Icon } from "@iconify/react";
import { observer } from "mobx-react-lite";
import modals from "../../../store/modals";

interface props {}

const Navbar: FC<props> = observer(({}) => {
  return (
    <button
      className={`absolute bottom-0 m-2 btn btn-circle lg:hidden z-20`}
      onClick={() => modals.setProjectsModal()}
    >
      <Icon icon="grommet-icons:projects" className="w-6 h-6 " />
    </button>
  );
});
export default Navbar;

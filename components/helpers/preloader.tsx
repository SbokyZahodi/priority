import { FC } from "react";
import { Icon } from "@iconify/react";
interface props {
  className?: string;
}

const Preloader: FC<props> = ({ className }) => {
  return (
    <div className={className}>
      <Icon icon="line-md:loading-loop" className="h-12 w-12" />
    </div>
  );
};
export default Preloader;

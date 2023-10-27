import clsx from "clsx";
import { IconType } from "react-icons";
import { FaChevronRight } from "react-icons/fa6";
import { colors } from "theme";

type Props = {
  title: string;
  icon: IconType;
  isActive?: boolean;
  onClick: () => void;
};

const SidebarLink = ({
  title,
  icon,
  onClick,
  isActive: active = true,
}: Props) => (
  <button
    className={clsx(
      "flex w-full cursor-pointer flex-row items-center rounded-md border-[1.5px] border-solid border-primary p-4 px-2 transition-all duration-200 hover:bg-primary/10 active:scale-[0.99]",
      {
        "bg-primary/10 text-white": active,
        "bg-white text-black": !active,
      }
    )}
    onClick={onClick}
  >
    <div className="flex flex-1 flex-row items-center">
      {icon({ className: "text-xl", color: colors.primary })}
      <span className="ml-2 font-sans text-sm text-primary">{title}</span>
    </div>
    <FaChevronRight className="text-base text-primary" />
  </button>
);

export default SidebarLink;

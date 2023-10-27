import clsx from "clsx";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

type Props = {
  value: number | string;
  delta: number;
  label: string;
  labelRight: string;
  category: string;
};

//
type DeltaIconProps = {
  value: "positive" | "negative";
};

const DeltaIcon = ({ value }: DeltaIconProps) => (
  <div
    className={clsx("flex h-5 w-5 items-center justify-center rounded-full", {
      "bg-green-500": value === "positive",
      "bg-red-500": value === "negative",
    })}
  >
    {value === "positive" ? (
      <FaArrowUp size={14} className="text-sm text-white" />
    ) : (
      <FaArrowDown size={14} className="text-sm text-white" />
    )}
  </div>
);

const Highlight = ({ value, delta, category, labelRight, label }: Props) => (
  <div className="flex h-20 flex-1  flex-row rounded border-2 border-solid border-primary/5">
    <div className="flex flex-1 flex-col items-center justify-end px-2 py-1.5">
      <div className=" mb-1 flex flex-1 flex-row items-end">
        <span className="ml-1 block font-sans text-2xl font-thin  text-primary">
          {value}
        </span>
      </div>
      <div className="flex w-full flex-row justify-between">
        <span className=" font-sans text-xs text-gray-500">{category}</span>
        <span className=" font-sans text-xs text-gray-500">{label}</span>
      </div>
    </div>
    <div className="flex flex-1 flex-col items-center justify-end bg-primary/5 py-1.5">
      <div className="mb-1 flex flex-1 flex-row items-end">
        <div className="flex flex-1 flex-row items-center">
          <DeltaIcon value={delta > 0 ? "positive" : "negative"} />
          <span className="ml-1 block font-sans text-2xl font-thin  text-primary">
            {delta ? `${delta}%` : "-"}
          </span>
        </div>
      </div>
      <span className="block font-sans text-xs text-gray-500">
        {labelRight}
      </span>
    </div>
  </div>
);

export default Highlight;

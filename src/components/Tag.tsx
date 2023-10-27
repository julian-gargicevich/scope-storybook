import clsx from "clsx";

type Props = {
  title: string;
  size?: "small" | "normal" | "large";
};

const Tag = ({ title, size = "normal" }: Props) => (
  <div className="flex">
    <div
      className={clsx(
        "items-center justify-center rounded border border-solid border-primary ",
        {
          "px-3 py-0.5": size === "small",
          "px-4 py-1": size === "normal",
          "px-5 py-1.5 border-2": size === "large",
        }
      )}
    >
      <span
        className={clsx("font-sans  text-primary", {
          "text-xs": size === "small",
          "text-sm": size === "normal",
          "text-base": size === "large",
        })}
      >
        {title}
      </span>
    </div>
  </div>
);

export default Tag;

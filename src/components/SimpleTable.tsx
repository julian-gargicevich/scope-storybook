import clsx from "clsx";

type Row = {
  key: string;
  title: string;
  value: string | React.ReactNode;
  bold?: boolean;
};

type Props = {
  rows: Row[];
};

const SimpleTable = ({ rows }: Props) => (
  <div className="flex w-full flex-col">
    {rows.map((row, index) => (
      <div
        className={clsx("flex w-full flex-row p-2 hover:bg-primary/10", {
          "bg-gray-100": index % 2 === 0,
        })}
        key={row.key}
      >
        <span
          className={clsx("font-sans text-sm text-gray-500", {
            "font-bold": row.bold,
          })}
        >
          {row.title}
        </span>
        <span
          className={clsx("ml-auto font-sans text-sm text-gray-500", {
            "font-bold": row.bold,
          })}
        >
          {row.value}
        </span>
      </div>
    ))}
  </div>
);

export default SimpleTable;

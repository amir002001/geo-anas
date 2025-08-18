import clsx from "clsx";

export interface IVisualProps {
  className?: string;
  isVisualVisible: boolean;
}

export const Visual = ({ className, isVisualVisible }: IVisualProps) => {
  return (
    <div
      className={clsx([
        className,
        "bg-blue-500 rounded-md w-1/4 h-1/4 transition-opacity duration-300 ease-in-out",
        isVisualVisible ? "opacity-100" : "opacity-0",
      ])}
    >
      Visual Component
    </div>
  );
};

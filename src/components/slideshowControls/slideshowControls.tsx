import clsx from "clsx";
interface ISlideshowControlsProps {
  className?: string;
}

export const SlideshowControls = ({ className }: ISlideshowControlsProps) => {
  const buttonClassName = clsx([
    "bg-[#0A8048] text-white rounded-md px-4 py-3",
  ]);
  return (
    <div className={clsx([className, "flex gap-4"])}>
      <button className={buttonClassName}>Previous</button>
      <button className={buttonClassName}>Next</button>
    </div>
  );
};

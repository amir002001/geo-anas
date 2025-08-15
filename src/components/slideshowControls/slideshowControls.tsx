import clsx from "clsx";
import { useEffect } from "react";
import { slideHandler } from "../../utils/slideHandler";
import { useMap } from "react-map-gl/mapbox";
interface ISlideshowControlsProps {
  className?: string;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const SlideshowControls = ({
  className,
  currentSlide,
  setCurrentSlide,
}: ISlideshowControlsProps) => {
  const { anasMap } = useMap();

  useEffect(() => {
    slideHandler(anasMap, currentSlide);
  }, [anasMap, currentSlide]);

  const buttonClassName = clsx([
    "bg-[#0A8048] text-white rounded-md px-4 py-3 cursor-pointer",
  ]);
  return (
    <div className={clsx([className, "flex gap-4"])}>
      <button
        className={buttonClassName}
        onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
      >
        Previous
      </button>
      <button
        className={buttonClassName}
        onClick={() => setCurrentSlide((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

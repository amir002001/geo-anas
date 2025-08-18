import clsx from "clsx";
import { useEffect } from "react";
import { useAnasMapContext } from "../../hooks/useAnasMapContext";
import { timelines } from "../../timelines/timelines";
import { handleSlideChange } from "../../utils/controlsHandlers";
import { slideHandler } from "../../utils/slideHandler";
interface ISlideshowControlsProps {
  className?: string;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  isMapIdle: boolean;
}

export const SlideshowControls = ({
  className,
  currentSlide,
  setCurrentSlide,
  isMapIdle,
}: ISlideshowControlsProps) => {
  const { anasMap } = useAnasMapContext();

  useEffect(() => {
    slideHandler(anasMap, currentSlide);
  }, [currentSlide]);

  const slideTitle = timelines[currentSlide].title;
  const isLastSlide = currentSlide === timelines.length - 1;
  const isFirstSlide = currentSlide === 0;

  const commonButtonClassName = clsx([
    "bg-[#0A8048] border-green-600 border-t-2 border-r-2 text-white rounded-md px-4 py-3 ",
    "shadow-lg hover:shadow-xl transition-shadow duration-200",
    "active:translate-y-1 active:shadow-md",
  ]);

  const previousButtonClassName = clsx([
    commonButtonClassName,
    !isMapIdle || isFirstSlide
      ? "opacity-50 cursor-not-allowed"
      : "cursor-pointer",
  ]);

  const nextButtonClassName = clsx([
    commonButtonClassName,
    !isMapIdle || isLastSlide
      ? "opacity-50 cursor-not-allowed"
      : "cursor-pointer",
  ]);

  return (
    <div className={clsx([className, "flex items-center gap-4"])}>
      <span
        id="slide-title"
        className="bg-[#0A8048]/20 rounded-md px-4 py-2 text-black"
      >
        {slideTitle}
      </span>
      <button
        className={previousButtonClassName}
        disabled={isFirstSlide || !isMapIdle}
        onClick={() =>
          handleSlideChange("prev", anasMap, setCurrentSlide, timelines.length)
        }
      >
        Previous
      </button>
      <button
        className={nextButtonClassName}
        disabled={isLastSlide || !isMapIdle}
        onClick={() =>
          handleSlideChange("next", anasMap, setCurrentSlide, timelines.length)
        }
      >
        Next
      </button>
    </div>
  );
};

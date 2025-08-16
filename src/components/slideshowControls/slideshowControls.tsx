import clsx from "clsx";
import { useEffect } from "react";
import { useMap } from "react-map-gl/mapbox";
import { timelines } from "../../timelines/timelines";
import { slideHandler } from "../../utils/slideHandler";
interface ISlideshowControlsProps {
  className?: string;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  isMapMoving: boolean;
}

export const SlideshowControls = ({
  className,
  currentSlide,
  setCurrentSlide,
  isMapMoving,
}: ISlideshowControlsProps) => {
  const { anasMap } = useMap();

  useEffect(() => {
    slideHandler(anasMap, currentSlide);
  }, [currentSlide]);

  const handleSlideChange = (direction: "next" | "prev") => {
    if (!anasMap) {
      console.warn("Map is not initialized");
      return;
    }

    if (anasMap.isMoving()) {
      console.warn("Map is currently moving, cannot change slide");
      return;
    }

    if (direction === "next") {
      setCurrentSlide((prev) => Math.min(prev + 1, timelines.length - 1));
    } else {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }
  };

  const slideTitle = timelines[currentSlide].title;

  const buttonClassName = clsx([
    "bg-[#0A8048] border-green-600 border-t-2 border-r-2 text-white rounded-md px-4 py-3 ",
    "shadow-lg hover:shadow-xl transition-shadow duration-200",
    "active:translate-y-1 active:shadow-md",
    isMapMoving ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
  ]);
  return (
    <div className={clsx([className, "flex flex-col items-end gap-4"])}>
      <span id="slide-title">{slideTitle}</span>
      <div className="flex gap-4">
        <button
          className={buttonClassName}
          onClick={() => handleSlideChange("prev")}
        >
          Previous
        </button>
        <button
          className={buttonClassName}
          onClick={() => handleSlideChange("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

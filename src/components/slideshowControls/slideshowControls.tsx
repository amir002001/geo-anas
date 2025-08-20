import clsx from "clsx";
import { useEffect, useState } from "react";
import { useAnasMapContext } from "../../hooks/useAnasMapContext";
import { timelines } from "../../timelines/timelines";
import {
  handleSlideChange,
  handleSlideChangeByIndex,
} from "../../utils/controlsHandlers";
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

  // Controlled input for slide number
  const [inputValue, setInputValue] = useState<string>(
    String(currentSlide + 1)
  );

  // Keep input in sync with currentSlide
  useEffect(() => {
    setInputValue(String(currentSlide + 1));
  }, [currentSlide]);

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
      <div>
        <input
          className="field-sizing-content"
          type="text"
          placeholder="1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.replace(/[^0-9]/g, ""))}
          onBlur={() => {
            const val = parseInt(inputValue, 10);
            if (!isNaN(val) && val >= 1 && val <= timelines.length) {
              handleSlideChangeByIndex(
                val - 1,
                anasMap,
                setCurrentSlide,
                timelines.length
              );
            } else {
              setInputValue(String(currentSlide + 1)); // reset to current if invalid
            }
          }}
          disabled={!isMapIdle}
        />
        <span> / {timelines.length}</span>
      </div>
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

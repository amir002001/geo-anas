import clsx from "clsx";
import type { GazaEvent } from "../../timelines/timelines";

export interface IVisualProps {
  className?: string;
  isVisualVisible: boolean;
  event: GazaEvent;
}

export const Visual = ({ className, isVisualVisible, event }: IVisualProps) => {
  if (event.kind === "basic") {
    return null;
  }

  return (
    <div
      className={clsx([
        className,
        "bg-[#0A8048]/30 rounded-md w-[832px] h-[468px] max-w-4/5 max-h-2/3 transition-opacity duration-300 ease-in-out flex items-center justify-center overflow-hidden",
        isVisualVisible ? "opacity-100" : "opacity-0",
      ])}
    >
      {event.kind === "image" ? (
        <img
          src={event.imgSrc}
          alt="Visual"
          className="w-full h-full object-contain"
        />
      ) : null}
      {event.kind === "video" ? (
        <video
          src={event.videoSrc}
          controls
          className="max-w-full max-h-full object-contain"
        />
      ) : null}
    </div>
  );
};

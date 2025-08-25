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
        "flex aspect-video items-center justify-center overflow-hidden rounded-md bg-[#3a3a3a]/30 transition-all duration-700 ease-in-out",
        event.kind === "image" || event.kind === "video"
          ? "top-3 left-3 max-h-2/3 w-[832px] max-w-4/5"
          : "top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2",
        "border border-black/10 shadow-2xl shadow-black/40",
        isVisualVisible ? "opacity-100" : "opacity-0",
      ])}
    >
      {event.kind === "image" || event.kind === "image-only" ? (
        <img
          src={event.imgSrc}
          alt="Visual"
          className="h-full w-full object-cover"
        />
      ) : null}
      {event.kind === "video" || event.kind === "video-only" ? (
        <video
          src={event.videoSrc}
          autoPlay
          className="max-h-full max-w-full object-cover"
        />
      ) : null}
    </div>
  );
};

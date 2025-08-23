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
        "aspect-video  bg-[#0A8048]/30 rounded-md transition-opacity duration-300 ease-in-out flex items-center justify-center overflow-hidden",
        event.kind === "image" || event.kind === "video"
          ? "w-[832px] max-w-4/5 max-h-2/3"
          : "w-3/5 max-h-full",
        "shadow-2xl shadow-black/40 border border-black/10",
        isVisualVisible ? "opacity-100" : "opacity-0",
      ])}
    >
      {event.kind === "image" || event.kind === "image-only" ? (
        <img
          src={event.imgSrc}
          alt="Visual"
          className="w-full h-full object-contain"
        />
      ) : null}
      {event.kind === "video" ? (
        <video
          src={event.videoSrc}
          autoPlay
          className="max-w-full max-h-full object-contain"
        />
      ) : null}
    </div>
  );
};

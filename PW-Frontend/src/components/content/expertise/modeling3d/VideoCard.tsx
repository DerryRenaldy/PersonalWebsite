import { ModelingThumbnail } from "@assets/videoModeling";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "@assets/images";
import clsx from "clsx";

interface VideoCardProps {
  title?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

const VideoCard = ({ videoUrl, title, thumbnailUrl }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const opacity = useAnimation();
  const position = useAnimation();

  const handleMouseEnter = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
      videoElement.loop = true;
      opacity.start({ opacity: 0, transition: { duration: 2 } });
      position.start({
        opacity: 0,
        rotate: 0,
        transition: { duration: 0.5 },
      });
    }
  };

  const handleMouseLeave = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
      videoElement.loop = false;
      opacity.start({ opacity: 1 });
      position.start({
        opacity: 1,
        rotate: -6,
        transition: { duration: 1 },
      });
    }
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      const videoElement = videoRef.current;
      if (videoElement) {
        if (videoElement.duration - videoElement.currentTime <= 1) {
          videoElement.currentTime = 0;
          videoElement.play();
        }
      }
    };

    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate, false);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={clsx(
          "relative rounded-2xl shadow-[rgba(255,_255,_255,_0.3)_0px_0px_16px]",
          "md:w-[300px]",
          "w-[200px]"
        )}
      >
        <div className="absolute z-50 top-4 scale-150 pointer-events-none">
          <img src={Image.frame} className="rounded-2xl" alt="" />
        </div>
        <motion.div
          className="absolute z-30 rounded-2xl -translate-x-10 "
          animate={position}
          initial={{ rotate: -6 }}
        >
          <div className="absolute">
            <img
              src={ModelingThumbnail.overlay}
              className="rounded-2xl mix-blend-multiply"
              alt=""
            />
          </div>
          <div className="h-full flex items-end p-4 absolute w-full rounded-2xl z-20 bg-[#2d2d2d]/20 border-2 border-[#2d2d2d]">
            <div>
              <p className="font-rubik text-xl font-semibold text-white">
                {title}
              </p>
            </div>
          </div>
          <img
            src={thumbnailUrl}
            className={clsx(" rounded-2xl", "md:w-[300px]", "w-[200px]")}
            alt=""
          />
        </motion.div>
        <motion.div
          className="h-full flex items-end p-4 absolute w-full rounded-2xl z-20 backdrop-blur bg-[#2d2d2d]/40"
          animate={opacity}
        ></motion.div>
        <video
          ref={videoRef}
          preload="auto"
          className={clsx(
            "relative z-10 rounded-2xl",
            "md:w-[300px]",
            "w-[200px]"
          )}
          muted
        >
          <source src={videoUrl} type="video/webm" className="border" />
        </video>
      </div>
    </>
  );
};

export default VideoCard;

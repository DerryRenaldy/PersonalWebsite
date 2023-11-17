import { ModelingThumbnail } from "@assets/videoModeling";
import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import Image from "@assets/images";
import clsx from "clsx";
import React from "react";
import ReactPlayer from "react-player";

interface VideoCardProps {
  title?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

interface VideoState {
  isPlaying: boolean;
  isLooping: boolean;
}

const VideoCard = React.memo(
  ({ videoUrl, title, thumbnailUrl }: VideoCardProps) => {
    const [videoState, setVideoState] = useState<VideoState>({
      isPlaying: false,
      isLooping: false,
    });

    const videoRef = useRef<ReactPlayer>(null!);
    const thumbnailRef = useRef<HTMLImageElement>(null!);
    const opacity = useAnimation();
    const position = useAnimation();

    const handleMouseEnter = () => {
      setVideoState({ isPlaying: true, isLooping: true });
      opacity.start({ opacity: 0, transition: { duration: 2 } });
      position.start({
        opacity: 0,
        rotate: 0,
        transition: { duration: 0.5 },
      });
    };

    const handleMouseLeave = () => {
      setVideoState({ isPlaying: false, isLooping: false });
      if (videoRef.current) {
        videoRef.current.seekTo(0);
      }
      opacity.start({ opacity: 1 });
      position.start({
        opacity: 1,
        rotate: -6,
        transition: { duration: 1 },
      });
    };

    return (
      <div className="flex justify-center items-center p-[50px]">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={clsx(
            "relative rounded-2xl shadow-[rgba(255,_255,_255,_0.3)_0px_0px_16px]",
            "w-[220px]"
          )}
        >
          <div className="absolute z-50 top-4 scale-150 pointer-events-none">
            <img
              src={Image.frame}
              loading="lazy"
              className="rounded-2xl"
              alt=""
            />
          </div>
          <motion.div
            className="absolute z-30 rounded-2xl -translate-x-10 "
            animate={position}
            initial={{ rotate: -6 }}
          >
            <div className="absolute">
              <img
                src={ModelingThumbnail.overlay}
                loading="lazy"
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
              className={clsx(" rounded-2xl", "w-[220px]")}
              loading="lazy"
              alt=""
            />
          </motion.div>
          <motion.div
            className="h-full flex items-end p-4 absolute w-full rounded-2xl z-20 backdrop-blur bg-[#2d2d2d]/40"
            animate={opacity}
          ></motion.div>

          <img
            ref={thumbnailRef}
            src={thumbnailUrl}
            className={clsx(" rounded-2xl", "w-[220px]")}
            loading="lazy"
            alt=""
          />
          {videoState.isPlaying && (
            <div className="absolute top-0 rounded-2xl w-[220px]">
              <ReactPlayer
                ref={videoRef}
                url={videoUrl}
                playing={videoState.isPlaying}
                // light={videoState.isPlaying ? false : <img src={thumbnailUrl} />}
                loop={videoState.isLooping}
                height="auto"
                width={thumbnailRef.current.clientWidth}
                fallback={<div>Loading...</div>}
                style={{
                  border: "0px solid white",
                  borderRadius: 16,
                  zIndex: 10,
                }}
                muted
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default VideoCard;

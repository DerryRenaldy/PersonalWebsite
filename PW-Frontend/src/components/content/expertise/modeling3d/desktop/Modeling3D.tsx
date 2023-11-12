import ModelingVideo, { ModelingThumbnail } from "@assets/videoModeling";
import VideoCard from "../VideoCard";
import { motion } from "framer-motion";
import Image from "@assets/images";
import { useEffect, useRef, useState } from "react";
import useIsTopInView from "components/hooks/useIsTopInView";
import { useSectionContext } from "components/pages/Context";

const presenceVariant = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const Modeling3D = () => {
  const [width, setWidth] = useState<number>(window.screen.width);

  const containerRef = useRef<HTMLDivElement>(null);
  const isTopInView = useIsTopInView(containerRef);
  const { setSection } = useSectionContext();

  const windowResizeHandler = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    if (isTopInView) {
      setSection("Expertise");
    }
  }, [isTopInView]);

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);

    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);

  return (
    <div className="relative my-36" ref={containerRef}>
      <div className="absolute h-[400vh] w-[100vw]">
        <div className="sticky h-screen -top-10">
          <div
            className="absolute"
            style={{ width: width, left: `calc(50% - ${width}px/2)` }}
          >
            <img
              src={Image.doodle}
              className="scale-95"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-x-2 justify-center items-center">
          <div className="w-[300px] h-[300px]"></div>
          <div className="w-[300px] h-[300px]"></div>
          <div className="w-[300px] h-[300px]"></div>
        </div>

        <div className="flex gap-x-2 justify-center items-center">
          <motion.div
            className="rounded-2xl"
            variants={presenceVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            <VideoCard
              videoUrl={ModelingVideo.axe}
              title="Axe"
              thumbnailUrl={ModelingThumbnail.axeThumbnail}
            />
          </motion.div>
          <div className="w-[300px] h-[400px]"></div>
          <motion.div
            className="rounded-2xl"
            variants={presenceVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            <VideoCard
              videoUrl={ModelingVideo.bull}
              title="Bull"
              thumbnailUrl={ModelingThumbnail.bullThumbnail}
            />
          </motion.div>
        </div>

        <div className="flex gap-x-2 justify-center items-center">
          <div className="w-[300px] h-[300px]"></div>
          <div className="w-[300px] h-[300px]"></div>
          <div className="w-[300px] h-[300px]"></div>
        </div>

        <div className="flex gap-x-2 justify-center items-center">
          <motion.div
            className="rounded-2xl"
            variants={presenceVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            <VideoCard
              videoUrl={ModelingVideo.cheetah}
              title="Cheetah Skull"
              thumbnailUrl={ModelingThumbnail.chetahThumbnail}
            />
          </motion.div>
          <div className="w-[300px] h-[400px]"></div>
          <motion.div
            className="rounded-2xl"
            variants={presenceVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            <VideoCard
              videoUrl={ModelingVideo.helmet}
              title="Helmet"
              thumbnailUrl={ModelingThumbnail.helmetThumbnail}
            />
          </motion.div>
        </div>

        <div className="flex gap-x-2 justify-center items-center">
          <div className="w-[300px] h-[300px]"></div>
          <div className="w-[300px] h-[300px]"></div>
          <div className="w-[300px] h-[300px]"></div>
        </div>

        <div className="flex gap-x-2 justify-center items-center">
          <motion.div
            className="rounded-2xl"
            variants={presenceVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            <VideoCard
              videoUrl={ModelingVideo.pilar}
              title="Pilar"
              thumbnailUrl={ModelingThumbnail.pilarThumbnail}
            />
          </motion.div>
          <div className="w-[300px] h-[400px]"></div>
          <motion.div
            className="rounded-2xl"
            variants={presenceVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            <VideoCard
              videoUrl={ModelingVideo.skull}
              title="Skull"
              thumbnailUrl={ModelingThumbnail.skullThumbnail}
            />
          </motion.div>
        </div>

        <div className="flex gap-x-2 justify-center items-center">
          <div className="w-[300px] h-[300px]"></div>
          <div className="w-[300px] h-[300px]"></div>
          <div className="w-[300px] h-[300px]"></div>
        </div>

        <div className="flex gap-x-2 justify-center items-center">
          <motion.div
            className="rounded-2xl"
            variants={presenceVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            <VideoCard
              videoUrl={ModelingVideo.torso}
              title="Torso"
              thumbnailUrl={ModelingThumbnail.torsoThumbnail}
            />
          </motion.div>
          <div className="w-[300px] h-[400px]"></div>
          <motion.div
            className="rounded-2xl"
            variants={presenceVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            <VideoCard
              videoUrl={ModelingVideo.creature}
              title="Creature"
              thumbnailUrl={ModelingThumbnail.creatureThumbnail}
            />
          </motion.div>
        </div>

        <div className="flex gap-x-2 justify-center items-center">
          <div className="w-[300px] h-[300px]"></div>
          <div className="w-[300px] h-[300px]"></div>
          <div className="w-[300px] h-[300px]"></div>
        </div>

        <div className="flex gap-x-2 justify-center items-center">
          <motion.div
            className="rounded-2xl"
            variants={presenceVariant}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            <VideoCard
              videoUrl={ModelingVideo.clicker}
              title="Clicker"
              thumbnailUrl={ModelingThumbnail.clickerThumbnail}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Modeling3D;

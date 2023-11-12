import useIsTopInView from "components/hooks/useIsTopInView";
import { useSectionContext } from "components/pages/Context";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VideoCard from "../VideoCard";
import ModelingVideo from "@assets/videoModeling";
import { ModelingThumbnail } from "@assets/videoModeling/mobile";
// const presenceVariant = {
//   initial: {
//     opacity: 0,
//     x: -40,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       delay: 0.5,
//       duration: 1,
//     },
//   },
// };

const Modeling3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isTopInView = useIsTopInView(containerRef, "Expertise - 3d mobile");
  const { setSection } = useSectionContext();

  useEffect(() => {
    if (isTopInView) {
      setSection("Expertise");
    }
  }, [isTopInView]);

  return (
    <div className="relative py-48" ref={containerRef}>
      <div className="relative flex flex-col items-center justify-center gap-y-36">
        <motion.div
          className="rounded-2xl"
          //   variants={presenceVariant}
          //   whileInView="animate"
          //   initial="initial"
          //   viewport={{ once: true }}
        >
          <VideoCard
            videoUrl={ModelingVideo.axe}
            title="Axe"
            thumbnailUrl={ModelingThumbnail.axeThumbnail}
          />
        </motion.div>

        <motion.div
          className="rounded-2xl"
          //   variants={presenceVariant}
          //   whileInView="animate"
          //   initial="initial"
          //   viewport={{ once: true }}
        >
          <VideoCard
            videoUrl={ModelingVideo.bull}
            title="Bull"
            thumbnailUrl={ModelingThumbnail.bullThumbnail}
          />
        </motion.div>

        <motion.div
          className="rounded-2xl"
          //   variants={presenceVariant}
          //   whileInView="animate"
          //   initial="initial"
          //   viewport={{ once: true }}
        >
          <VideoCard
            videoUrl={ModelingVideo.cheetah}
            title="Cheetah Skull"
            thumbnailUrl={ModelingThumbnail.chetahThumbnail}
          />
        </motion.div>
        <motion.div
          className="rounded-2xl"
          //   variants={presenceVariant}
          //   whileInView="animate"
          //   initial="initial"
          //   viewport={{ once: true }}
        >
          <VideoCard
            videoUrl={ModelingVideo.helmet}
            title="Helmet"
            thumbnailUrl={ModelingThumbnail.helmetThumbnail}
          />
        </motion.div>

        <motion.div
          className="rounded-2xl"
          //   variants={presenceVariant}
          //   whileInView="animate"
          //   initial="initial"
          //   viewport={{ once: true }}
        >
          <VideoCard
            videoUrl={ModelingVideo.pilar}
            title="Pilar"
            thumbnailUrl={ModelingThumbnail.pilarThumbnail}
          />
        </motion.div>
        <motion.div
          className="rounded-2xl"
          //   variants={presenceVariant}
          //   whileInView="animate"
          //   initial="initial"
          //   viewport={{ once: true }}
        >
          <VideoCard
            videoUrl={ModelingVideo.skull}
            title="Skull"
            thumbnailUrl={ModelingThumbnail.skullThumbnail}
          />
        </motion.div>

        <motion.div
          className="rounded-2xl"
          //   variants={presenceVariant}
          //   whileInView="animate"
          //   initial="initial"
          //   viewport={{ once: true }}
        >
          <VideoCard
            videoUrl={ModelingVideo.torso}
            title="Torso"
            thumbnailUrl={ModelingThumbnail.torsoThumbnail}
          />
        </motion.div>
        <motion.div
          className="rounded-2xl"
          //   variants={presenceVariant}
          //   whileInView="animate"
          //   initial="initial"
          //   viewport={{ once: true }}
        >
          <VideoCard
            videoUrl={ModelingVideo.creature}
            title="Creature"
            thumbnailUrl={ModelingThumbnail.creatureThumbnail}
          />
        </motion.div>

        <motion.div
          className="rounded-2xl"
          //   variants={presenceVariant}
          //   whileInView="animate"
          //   initial="initial"
          //   viewport={{ once: true }}
        >
          <VideoCard
            videoUrl={ModelingVideo.clicker}
            title="Clicker"
            thumbnailUrl={ModelingThumbnail.clickerThumbnail}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Modeling3D;

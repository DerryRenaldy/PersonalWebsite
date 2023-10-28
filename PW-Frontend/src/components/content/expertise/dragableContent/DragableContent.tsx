import { MotionProps, motion } from "framer-motion";
import { useRef } from "react";

type initial = {
  x: number;
  y: number;
};

type Props = {
  imageUrl: string;
  alt: string;
  isGrabbing: boolean;
  initial: initial;
  size: number;
  setIsGrabbing: React.Dispatch<React.SetStateAction<boolean>>;
} & MotionProps;

const DragableContent = ({
  setIsGrabbing,
  initial,
  size,
  imageUrl,
  alt,
  isGrabbing,
  ...MotionProps
}: Props) => {
  const refConstrain = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={refConstrain}
      whileHover={{ scale: 1.1 }}
      className="absolute"
      style={{ left: initial.x, top: initial.y }}
    >
      <motion.img
        {...MotionProps}
        dragConstraints={refConstrain}
        src={imageUrl}
        alt={alt}
        style={{
          width: size,
          objectFit: "contain",
          imageRendering: "auto",
          overflow: "clip",
          overflowClipMargin: "content-box",
        }}
        onPointerDown={(_event) => {
          console.log("Pointer Down");
          setIsGrabbing(true);
        }}
        onPointerUp={(_event) => {
          console.log("Pointer Up");
          setIsGrabbing(false);
        }}
        className={`pointer-events-auto ${
          isGrabbing ? "cursor-grabbing" : "cursor-grab"
        }`}
      />
    </motion.div>
  );
};

export default DragableContent;

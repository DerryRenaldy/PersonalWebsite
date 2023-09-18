import { useEffect, useRef, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const mapValue = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
) => {
  const fromRange = fromMax - fromMin;
  const fromPosition = (value - fromMin) / fromRange;

  const toRange = toMax - toMin;
  const toValue = toMin + fromPosition * toRange;

  return toValue;
};

const calculateTotalHeight = (): number => {
  const body = document.body;
  const html = document.documentElement;

  const bodyHeight = Math.max(body.scrollHeight, body.offsetHeight);
  const htmlHeight = Math.max(html.scrollHeight, html.offsetHeight);
  console.log(bodyHeight);

  const maxHeight = Math.max(bodyHeight, htmlHeight);
  return maxHeight;
};

// ================ MAIN COMPONENT ================

const HEIGHT_SCROLLBAR = 80;
const SCROLLBAR_HIDE_DELAY = 350;

type Position = {
  xRate: number;
  yRate: number;
};

const CustomScrollbar = () => {
  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: 0,
    yRate: 0,
  });
  const [scrollingTimer, setScrollingTimer] = useState<number | null>(null);
  const [totalHeight, setTotalHeight] = useState(0);
  const [isHoverStart, setIsHoverStart] = useState(false);
  const [isScrollBarTapped, setIsScrollBarTapped] = useState(false);
  let scrollBarPosition = 0;

  const ref = useRef(null);
  const height = window.innerHeight;
  const scrollBarOpacity = useAnimation();
  const { scrollYProgress } = useScroll();

  // console.log(totalHeight)

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height - HEIGHT_SCROLLBAR]
  );

  useMotionValueEvent(y, "change", (_latest) => {
    // console.log("y : ", _latest);
    scrollBarPosition = _latest;
    scrollBarOpacity.set({ opacity: 1 });
    if (scrollingTimer !== null) {
      clearTimeout(scrollingTimer);
    }

    if (!isHoverStart && !isScrollBarTapped) {
      setScrollingTimer(
        setTimeout(() => {
          scrollBarOpacity.start({ opacity: 0, transition: { duration: 0.2 } });
        }, SCROLLBAR_HIDE_DELAY)
      );
    }
  });

  useEffect(() => {
    const maxHeight: number = calculateTotalHeight();
    setTotalHeight(maxHeight);

    const mappedValue: number = mapValue(
      scrollBarPosition,
      0,
      height - HEIGHT_SCROLLBAR,
      0,
      totalHeight - height
    );
    console.log("Triggered");
    if (scrollBarPosition > 0) {
      window.scrollTo(0, mappedValue);
    }

    window.addEventListener("resize", calculateTotalHeight);
    document.addEventListener("DOMContentLoaded", calculateTotalHeight);

    return () => {
      window.removeEventListener("resize", calculateTotalHeight);
      document.removeEventListener("DOMContentLoaded", calculateTotalHeight);
    };
  }, [scrollBarPosition]);

  const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
    const yScroll: number = data.lastY;
    scrollBarPosition = data.lastY;

    console.log("scrollBarPosition", yScroll);
    // const mappedValue: number = mapValue(
    //   yScroll,
    //   0,
    //   height - HEIGHT_SCROLLBAR,
    //   0,
    //   totalHeight - height
    // );
    // // console.log(yScroll);
    // if (yScroll > 0) {
    //   window.scrollTo(0, mappedValue);
    // }
  };

  const handleDragStart = (_e: DraggableEvent, _data: DraggableData) => {
    setCurrentPosition({ xRate: 0, yRate: y.get() });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      onHoverStart={() => setIsHoverStart(true)}
      onHoverEnd={() => setIsHoverStart(false)}
      whileTap={{ opacity: 1 }}
      onPanStart={() => setIsScrollBarTapped(true)}
      onPanEnd={() => setIsScrollBarTapped(false)}
      animate={scrollBarOpacity}
      className="fixed top-0 right-0 w-[25px] h-screen z-[999] block"
    >
      <Draggable
        axis="y"
        bounds={{ top: 0, bottom: height - HEIGHT_SCROLLBAR }}
        position={{
          x: currentPosition.xRate,
          y: currentPosition.yRate,
        }}
        onDrag={handleDrag}
        onStart={handleDragStart}
        nodeRef={ref}
      >
        <motion.div
          whileHover={{ opacity: 1 }}
          whileTap={{ opacity: 1, scale: 1.15 }}
          initial={{ opacity: 0.3 }}
          transition={{ duration: 0.1 }}
          ref={ref}
          className={`w-[13px] mx-auto py-2`}
          style={{
            y: y,
            height: `${HEIGHT_SCROLLBAR}px`,
          }}
        >
          <div className="w-full h-full bg-[#e9e8e3] rounded-full"></div>
        </motion.div>
      </Draggable>
    </motion.div>
  );
};

export default CustomScrollbar;

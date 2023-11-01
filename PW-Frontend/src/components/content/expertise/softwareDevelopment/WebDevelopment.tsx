import { PanInfo } from "framer-motion";
import DragableContent from "./dragableContent/DragableContent";
import {
  MetaDataLeft,
  MetaDataRight,
} from "./dragableContent/DragableContentData";
import { useEffect, useRef, useState } from "react";
import useIsTopInView from "components/hooks/useIsTopInView";
import { useSectionContext } from "components/pages/Context";

const Testing = () => {
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false);
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
    console.log("Width : ", width);
  }, []);

  return (
    <div ref={containerRef} className="h-[200vh]">
      <div className="sticky top-0 text-white overflow-auto flex justify-center items-center h-[100vh] w-[100vw]">
        <div
          className="absolute h-full"
          style={{ width: width, left: `calc(50% - ${width}px/2)` }}
        >
          <div className="flex justify-between">
            <div className="h-screen relative w-[700px]">
              {MetaDataLeft.map((data, i) => {
                return (
                  <DragableContent
                    drag
                    dragTransition={{ bounceStiffness: 600 }}
                    dragElastic={1}
                    onDrag={(_e: any, info: PanInfo) => {
                      // console.log("X: ", info.point.x);
                      // console.log("Y: ", info.point.y);
                      document.body.style.overflow = "hidden";
                    }}
                    onDragEnd={() => {
                      document.body.style.overflow = "unset";
                    }}
                    imageUrl={data.imageUrl}
                    alt={data.alt}
                    isGrabbing={isGrabbing}
                    initial={{
                      x: data.initial.x,
                      y: data.initial.y,
                    }}
                    size={data.size}
                    setIsGrabbing={setIsGrabbing}
                    key={i}
                  />
                );
              })}
            </div>
            <div className="h-screen relative w-[700px]">
              {MetaDataRight.map((data, i) => {
                return (
                  <DragableContent
                    drag
                    dragTransition={{ bounceStiffness: 600 }}
                    dragElastic={1}
                    onDragStart={(_e: any, _info: PanInfo) => {
                      // console.log("X: ", info.point.x);
                      // console.log("Y: ", info.point.y);
                      document.body.style.overflow = "hidden";
                    }}
                    onDragEnd={() => {
                      document.body.style.overflow = "unset";
                    }}
                    imageUrl={data.imageUrl}
                    alt={data.alt}
                    isGrabbing={isGrabbing}
                    initial={{
                      x: data.initial.x,
                      y: data.initial.y,
                    }}
                    size={data.size}
                    setIsGrabbing={setIsGrabbing}
                    key={i + 1}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <h2 className="text-[60px] z-[10] font-rubik font-bold">
          Software Development
        </h2>
      </div>
    </div>
  );
};

export default Testing;

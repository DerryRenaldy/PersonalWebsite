import { PanInfo } from "framer-motion";
import DragableContent from "./dragableContent/DragableContent";
import { MetaData } from "./dragableContent/DragableContentData";
import { useEffect, useState } from "react";
import Title from "components/common/Title";

const Testing = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [width, setWidth] = useState(window.screen.width);

  const windowResizeHandler = () => {
    setWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);
    console.log("Width : ", width);
  }, []);

  return (
    <>
      <Title title={"Expertise"} />
      <div className="relative text-white overflow-hidden flex justify-center items-center h-[100vh] w-[100vw]">
        <div
          className="absolute h-full"
          style={{ width: width, left: `calc(50% - ${width}px/2)` }}
        >
          {MetaData.map((data, i) => {
            return (
              <DragableContent
                drag
                dragTransition={{ bounceStiffness: 600 }}
                dragElastic={1}
                onDrag={(_e: any, info: PanInfo) => {
                  console.log("X: ", info.point.x);
                  console.log("Y: ", info.point.y);
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
        <h2 className="text-[60px] z-[10] font-rubik">Web Development</h2>
      </div>
    </>
  );
};

export default Testing;

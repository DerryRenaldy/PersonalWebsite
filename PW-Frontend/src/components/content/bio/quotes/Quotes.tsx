import { useEffect, useRef, useState } from "react";
import QuotesContent from "./QuotesContent";
import { motion, useAnimation } from "framer-motion";

const Quotes = () => {
  const containerOverflowRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(true);
  const [text, setText] = useState("");

  const opacity = useAnimation();

  const getTextState = (text: string) => {
    setText(text);
  };

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    if (event.currentTarget.scrollTop == 0) {
      opacity.start({ opacity: 1 });
    } else {
      opacity.start({ opacity: 0 });
    }
  };

  useEffect(() => {
    const containerOverflow = containerOverflowRef.current;

    if (containerOverflow) {
      console.log("Client Height : " + containerOverflow.offsetHeight);
      const hasOverflow = containerOverflow.clientHeight + 48 > 264;
      setIsOverflowing(hasOverflow);
    }

    console.log("Is Overflow : " + isOverflowing);
    console.log(text);
  }, [text]);

  return (
    <div className="relative h-full">
      <div
        onScroll={handleScroll}
        className="flex flex-col h-full p-6 font-rubik max-h-[264px] overflow-auto"
      >
        <div
          ref={containerOverflowRef}
          className={`flex flex-col gap-y-4 ${
            isOverflowing ? "h-fit" : "h-full"
          }`}
        >
          <div className="text-2xl text-left">Quotes</div>
          <div className="grow">
            <QuotesContent getText={getTextState} />
          </div>
          {isOverflowing && (
            <motion.div
              animate={opacity}
              transition={{ duration: 0.3 }}
              className="absolute left-0 bottom-0 w-full bg-gradient-to-t h-10 from-background flex justify-center items-center"
            ></motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quotes;

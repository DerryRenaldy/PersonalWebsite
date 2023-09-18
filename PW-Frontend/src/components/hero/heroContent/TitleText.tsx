import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const data: string[] = [
  "Software Engineer",
  "3D Modeler",
  "Unity Developer",
  "IOT Engineer",
];

const TitleText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeText = useAnimation();
  const getNextIndex = () => {
    // Increment the index and loop back to 0 when it reaches the end
    return (currentIndex + 1) % data.length;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeText.start({
        y: 10,
        opacity: 0,
      });
      setTimeout(() => {
        setCurrentIndex(getNextIndex());
      }, 1000); // Wait for the animation to finish (adjust the duration as needed)
      setTimeout(() => {
        changeText.start({
          y: 0,
          opacity: 1,
        });
      }, 1100); // Start the next animation
    }, 2000); // Change the duration as per your preference

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      <div>
        <h1 className="select-none pointer-events-none text-3xl">
          Hello, I'm Derry!
        </h1>
      </div>

      <div className="flex justify-center gap-x-2">
        {/* <h1 className="select-none pointer-events-none text-3xl">I'm a</h1> */}
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={changeText}
          className="text-[#C49B66] select-none pointer-events-none text-3xl"
        >
          {data[currentIndex]}
        </motion.div>
      </div>
    </>
  );
};

export default TitleText;

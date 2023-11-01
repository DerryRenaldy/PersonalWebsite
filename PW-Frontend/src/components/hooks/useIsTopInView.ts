import { useState, useEffect } from "react";

const useIsTopInView = (ref: any) => {
  const [isTopInView, setIsTopInView] = useState(false);

  const checkIsTopInView = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // console.log(rect.top);
      // console.log(rect.bottom);
      setIsTopInView(rect.top <= 0 && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      checkIsTopInView();
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check when the component mounts
    checkIsTopInView();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isTopInView;
};

export default useIsTopInView;

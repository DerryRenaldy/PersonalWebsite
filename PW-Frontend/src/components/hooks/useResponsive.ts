import React, { useCallback, useEffect } from "react";

export const useResponsive = () => {
  const [screenType, setScreenType] = React.useState("INITIAL");

  const updateWindowDimensions = useCallback(() => {
    if (window.innerWidth > 768 && window.innerWidth < 1280) {
      setScreenType("TABLET");
    } else if (window.innerWidth > 1280) {
      setScreenType("DESKTOP");
    } else {
      setScreenType("MOBILE");
    }
  }, [screenType]);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [updateWindowDimensions]);

  return {
    screenType,
  };
};

import { useEffect, useState } from "react";

const useIntersectionObserver = (ref: React.RefObject<HTMLElement>) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(entry.isIntersecting);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return { isScrolled, setIsScrolled };
};

export default useIntersectionObserver;

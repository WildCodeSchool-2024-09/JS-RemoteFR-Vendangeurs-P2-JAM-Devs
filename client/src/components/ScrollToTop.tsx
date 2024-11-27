import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
  scrollableElement: React.RefObject<HTMLElement>;
}

export default function ScrollToTop({ scrollableElement }: ScrollToTopProps) {
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  const scrollToTop = useCallback(() => {
    if (scrollableElement) {
      scrollableElement.current?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [scrollableElement]);

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      prevPathname.current = location.pathname;
    }
    scrollToTop();
  }, [location, scrollToTop]);

  return null;
}

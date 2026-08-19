import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Delay slightly to ensure elements are mounted in the DOM
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }, 60);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

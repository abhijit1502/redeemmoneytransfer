import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export default function useScrollSmoother() {
  const location = useLocation();

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (gsap && window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    if (!isMobile && window.ScrollSmoother) {
      gsap.registerPlugin(window.ScrollSmoother);

      const smoother = window.ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        effects: true,
      });

      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      return () => {
        // Only kill the ScrollSmoother instance
        if (smoother) smoother.kill();
      };
    }
  }, [location.pathname]);
}

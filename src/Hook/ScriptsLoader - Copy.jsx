// --- START OF CORRECTED FILE ScriptsLoader.jsx ---

import React from "react";
import useScript from "./useScript";
import useAccordionToggle from "./useAccordionToggle";

const ScriptsLoader = () => {
  // 1. Load jQuery first. This is our primary dependency.
  const jqueryLoaded = useScript("assets/js/jquery-3.7.1.min.js");

  // 2. Load GSAP and its plugins. These are often dependencies for other animations.
  //    We wait for jQuery to load first as a general safety measure, although GSAP
  //    itself doesn't depend on it.
  const gsapLoaded = useScript("assets/js/gsap.min.js", jqueryLoaded);
  const splitTextLoaded = useScript("assets/js/SplitText.min.js", gsapLoaded);
  const scrollTriggerLoaded = useScript("assets/js/ScrollTrigger.min.js", gsapLoaded);
  const scrollSmootherLoaded = useScript("assets/js/ScrollSmoother.min.js", scrollTriggerLoaded);

  // 3. Load all other scripts.
  //    Each hook is now called at the top level, respecting React's rules.
  //    We pass `jqueryLoaded` to ensure they don't try to run before jQuery is available.
  useScript("assets/js/phosphor-icon.js", jqueryLoaded);
  useScript("assets/js/boostrap.bundle.min.js", jqueryLoaded);
  useScript("assets/js/swiper-bundle.min.js", jqueryLoaded);
  useScript("assets/js/marquee-main.js", jqueryLoaded);
  useScript("assets/js/aos-animation.js", jqueryLoaded);
  useScript("assets/js/counter-up.main.js", jqueryLoaded);
  useScript("assets/js/magific-popup.js", jqueryLoaded);
  
  // 4. IMPORTANT: Custom scripts like `custom-gsap.js` and `main.js` often
  //    initialize plugins. They must be loaded LAST, after all their
  //    dependencies (jQuery, GSAP, Swiper, etc.) are loaded.
  //    Here we wait for both jQuery and ScrollSmoother (as an example of a GSAP plugin).
  const allCoreLibsLoaded = jqueryLoaded && scrollSmootherLoaded;
  useScript("assets/js/custom-gsap.js", allCoreLibsLoaded);
  useScript("assets/js/main.js", allCoreLibsLoaded);

  // This hook will now correctly wait until jQuery is loaded.
  useAccordionToggle(jqueryLoaded);

  // This component's purpose is to load scripts, not render UI.
  return null;
};

export default ScriptsLoader;
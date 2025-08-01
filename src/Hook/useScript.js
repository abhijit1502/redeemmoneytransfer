// --- START OF CORRECTED FILE useScript.js ---

import { useEffect, useState } from "react";

/**
 * Loads an external script dynamically and ensures it persists on the page.
 * @param {string} src - The source URL of the script.
 * @param {boolean} waitFor - Optional flag to delay loading until a dependency is ready.
 * @returns {boolean} - A boolean state indicating if the script has loaded.
 */
const useScript = (src, waitFor = true) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // If we're waiting for a dependency that isn't ready, do nothing.
    if (!waitFor) {
      return;
    }

    // Check if the script tag already exists on the page.
    const existingScript = document.querySelector(`script[src="${src}"]`);

    if (existingScript) {
      // If it exists, we assume it's loaded or will be loaded.
      // We can set our state to true.
      setLoaded(true);
      return;
    }

    // If it doesn't exist, create it.
    const script = document.createElement("script");
    script.src = src;
    
    // Using `defer` is best for this use-case. It ensures scripts are
    // executed in the order they are added to the DOM, and only after the
    // document has been fully parsed. This is crucial for dependencies.
    script.defer = true;

    // Set up event listeners to update our state.
    script.onload = () => {
      // You can uncomment this for debugging to see the load order.
      // console.log(`Script loaded successfully: ${src}`);
      setLoaded(true);
    };
    script.onerror = () => {
      console.error(`Error loading script: ${src}`);
      setLoaded(false);
    };

    // Add the script to the end of the body.
    document.body.appendChild(script);

    // --- CRITICAL CHANGE ---
    // We REMOVE the cleanup function. Removing foundational scripts like jQuery
    // or GSAP from the DOM on component unmount/re-render would break the site.
    // These scripts should load once and stay.
    // return () => {
    //   if (script) {
    //     document.body.removeChild(script);
    //   }
    // };

  }, [src, waitFor]); // The effect re-runs if the src or the waitFor condition changes.

  return loaded;
};

export default useScript;
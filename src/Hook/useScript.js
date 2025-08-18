import { useEffect, useState } from "react";

// A simple global cache to track scripts that have successfully FINISHED loading.
const loadedScripts = new Set();

/**
 * Loads an external script dynamically and safely handles dependencies and re-renders.
 * @param {string} src - The source URL of the script.
 * @param {boolean} waitFor - Optional flag to delay loading until a dependency is ready.
 * @returns {boolean} - A boolean state indicating if the script has loaded.
 */
const useScript = (src, waitFor = true) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 1. If we're waiting for a dependency that isn't ready, do nothing.
    if (!waitFor) {
      return;
    }

    // 2. Check our reliable cache first. If it's already loaded, we're done.
    if (loadedScripts.has(src)) {
      setLoaded(true);
      return;
    }

    // A single handler for when any instance confirms the script is loaded.
    const handleLoad = () => {
      loadedScripts.add(src); // Add to our global cache *only* on successful load.
      setLoaded(true);
    };

    const handleError = () => {
      console.error(`Error loading script: ${src}`);
    };

    // 3. Check if the script tag is already on the page (added by another hook instance).
    const existingScript = document.querySelector(`script[src="${src}"]`);

    if (existingScript) {
      // 4. *** THE FIX ***
      // If the tag exists but isn't in our cache, it's still downloading.
      // Do NOT assume it's loaded. Instead, attach our own listeners to wait for it.
      existingScript.addEventListener('load', handleLoad);
      existingScript.addEventListener('error', handleError);

      // Cleanup listeners for this specific component instance.
      return () => {
        existingScript.removeEventListener('load', handleLoad);
        existingScript.removeEventListener('error', handleError);
      };
    }

    // 5. If script does not exist at all, create it.
    const script = document.createElement("script");
    script.src = src;
    script.defer = true; // defer maintains execution order for dependent scripts.

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.body.appendChild(script);

    // Cleanup listeners for the component instance that created the script.
    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };

  }, [src, waitFor]);

  return loaded;
};

export default useScript;
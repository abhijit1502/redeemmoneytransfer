import { useEffect } from "react";

const useAccordionToggle = (bootstrapLoaded) => {
  useEffect(() => {
    if (!bootstrapLoaded || typeof window.bootstrap === "undefined") return;

    const buttons = document.querySelectorAll(".accordion-button");

    const handleClick = (e) => {
      const targetId = e.currentTarget.getAttribute("data-bs-target");
      const target = document.querySelector(targetId);

      if (!target) return;

      // If the target is open, close it manually
      if (target.classList.contains("show")) {
        e.preventDefault();
        e.stopPropagation();

        // Hide using Bootstrap Collapse
        const collapse = new window.bootstrap.Collapse(target, {
          toggle: false,
        });
        collapse.hide();
      }
    };

    buttons.forEach((btn) => btn.addEventListener("click", handleClick));

    // Cleanup on unmount
    return () => {
      buttons.forEach((btn) => btn.removeEventListener("click", handleClick));
    };
  }, [bootstrapLoaded]);
};

export default useAccordionToggle;

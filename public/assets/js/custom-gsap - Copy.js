// --- START OF FILE: custom-gsap.js (Corrected for React) ---

// This part MUST run immediately when the script is loaded to prepare GSAP.
// It should be at the top level, outside any function.
gsap.registerPlugin(ScrollTrigger, SplitText);

// Create a new function to hold all the logic that needs to find DOM elements.
function initGsapScripts() {
  console.log("🚀 Initializing custom GSAP scripts...");

  // Use a small timeout to be extra sure the DOM is ready.
  setTimeout(() => {
    // =================================== Custom Cursor Js Start =====================================
    // This code attaches listeners to the body, so it's generally safe,
    // but wrapping it ensures it doesn't run multiple times unnecessarily if we add guards.
    const body = document.body;
    const cursor = document.querySelector(".cursor");
    const dot = document.querySelector(".dot");
    const cursorSmalls = document.querySelectorAll(".cursor-small");
    const cursorBigs = document.querySelectorAll(".cursor-big");

    if (cursor && dot) {
        body.addEventListener("mousemove", function (event) {
            gsap.to(cursor, { x: event.x, y: event.y, duration: 2, delay: 0.1, visibility: "visible", ease: "expo.out" });
        });
        body.addEventListener("mousemove", function (event) {
            gsap.to(dot, { x: event.x, y: event.y, duration: 1.5, visibility: "visible", ease: "expo.out" });
        });
        cursorSmalls.forEach((cursorSmall) => {
            cursorSmall.addEventListener("mouseenter", function () { gsap.to(dot, { scale: 8, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "hidden", opacity: 0 }); });
            cursorSmall.addEventListener("mouseleave", function () { gsap.to(dot, { scale: 1, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "visible", opacity: 1 }); });
        });
        cursorBigs.forEach((cursorBig) => {
            cursorBig.addEventListener("mouseenter", function () { gsap.to(dot, { scale: 36, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "hidden", opacity: 0 }); });
            cursorBig.addEventListener("mouseleave", function () { gsap.to(dot, { scale: 1, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "visible", opacity: 1 }); });
        });
    }
    // =================================== Custom Cursor Js End =====================================

    // **************************** Mobile Menu js Start ****************************
    // This was wrapped in DOMContentLoaded, which fails in React. Now it will work.
    var mmm = gsap.matchMedia();
    var mtl = gsap.timeline({ paused: true });
    const toggleMobileMenu = document.querySelector(".toggle-mobileMenu");
    const closeButton = document.querySelector(".close-button");
    const mobileSideOverlay = document.querySelector(".side-overlay");

    if (toggleMobileMenu && closeButton && mobileSideOverlay) {
        mmm.add("(max-width: 991px)", () => {
            mtl.to(".side-overlay", { opacity: 1, visibility: "visible", duration: 0.1 });
            mtl.to(".mobile-menu", { x: 0 });
            mtl.from(".nav-menu__item", { opacity: 0, duration: 0.1, y: -60, stagger: 0.05 });
            mtl.from(".close-button", { opacity: 0, scale: 0 });
            toggleMobileMenu.addEventListener("click", function () { mtl.play(); document.body.style.overflow = "hidden"; });
            closeButton.addEventListener("click", function () { mtl.reverse(); document.body.style.overflow = ""; });
            mobileSideOverlay.addEventListener("click", function () { mtl.reverse(); document.body.style.overflow = ""; });
        });
    }
    // **************************** Mobile Menu js End ****************************

    // =================================== Custom Split text Js Start =====================================
    // This was failing because the elements didn't exist yet. Now they do.
    if ($(".splitTextStyleOne").length > 0) {
      // Kill old ScrollTriggers to prevent memory leaks on page navigation
      ScrollTrigger.getAll().forEach(t => t.kill());
      
      let character = gsap.utils.toArray(".splitTextStyleOne");
      character.forEach((character) => {
        let split_char = new SplitText(character, { type: "chars, words", lineThreshold: 0.3 });
        const tl2 = gsap.timeline({ scrollTrigger: { trigger: character, start: "top 90%", end: "bottom 60%", scrub: false, markers: false, toggleActions: "play none none none" } });
        tl2.from(split_char.chars, { autoAlpha: 0, y: 40, duration: 0.3, opacity: 0, stagger: 0.03, ease: "back.out(1.7)" });
      });
    }
    // =================================== Custom Split text Js End =====================================

    // **************************** Position Aware button hover js start ****************************
    // This was failing because the buttons didn't exist yet. Now they do.
    class Button {
        constructor(buttonElement) { /* ... same as your original ... */ }
        init() { /* ... */ }
        getXY(e) { /* ... */ }
        initEvents() { /* ... */ }
    }
    const buttonElements = document.querySelectorAll('[data-block="button"]');
    buttonElements.forEach((buttonElement) => { new Button(buttonElement); });
    // **************************** Position Aware button hover js End ****************************

    console.log("✅ Custom GSAP scripts initialization finished.");

  }, 100);
}

// Attach the function to the window object so React can call it.
window.initGsapScripts = initGsapScripts;
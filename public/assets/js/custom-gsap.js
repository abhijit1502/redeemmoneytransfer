// --- START OF FILE: custom-gsap.js ---

// This part MUST run immediately to prepare GSAP.
gsap.registerPlugin(ScrollTrigger, SplitText);

// This function holds all other non-conflicting GSAP scripts.
function initGsapScripts() {
  console.log("🚀 Initializing custom GSAP scripts...");

  setTimeout(() => {
    // =================================== Custom Cursor Js Start =====================================
    // --- FIX: Conditionally initialize cursor only on non-mobile devices ---
    // We check if the window width is greater than 991px (a common desktop breakpoint).
    // This prevents the cursor script from running on tablets and phones where it's not needed.
    if (window.innerWidth > 991) {
      const body = document.body;
      const cursor = document.querySelector(".cursor");
      const dot = document.querySelector(".dot");
      const cursorSmalls = document.querySelectorAll(".cursor-small");
      const cursorBigs = document.querySelectorAll(".cursor-big");

      if (cursor && dot) {
        body.addEventListener("mousemove", function (event) { gsap.to(cursor, { x: event.x, y: event.y, duration: 2, delay: 0.1, visibility: "visible", ease: "expo.out" }); });
        body.addEventListener("mousemove", function (event) { gsap.to(dot, { x: event.x, y: event.y, duration: 1.5, visibility: "visible", ease: "expo.out" }); });
        cursorSmalls.forEach((cursorSmall) => { cursorSmall.addEventListener("mouseenter", function () { gsap.to(dot, { scale: 8, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "hidden", opacity: 0 }); }); cursorSmall.addEventListener("mouseleave", function () { gsap.to(dot, { scale: 1, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "visible", opacity: 1 }); }); });
        cursorBigs.forEach((cursorBig) => { cursorBig.addEventListener("mouseenter", function () { gsap.to(dot, { scale: 36, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "hidden", opacity: 0 }); }); cursorBig.addEventListener("mouseleave", function () { gsap.to(dot, { scale: 1, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "visible", opacity: 1 }); }); });
      }
    }
    // =================================== Custom Cursor Js End =====================================

    // =================================== Custom Split text Js Start =====================================
    if ($(".splitTextStyleOne").length > 0) {
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
    class Button { constructor(buttonElement) { /* ... same as your original ... */ } init() { /* ... */ } getXY(e) { /* ... */ } initEvents() { /* ... */ } }
    const buttonElements = document.querySelectorAll('[data-block="button"]');
    buttonElements.forEach((buttonElement) => { new Button(buttonElement); });
    // **************************** Position Aware button hover js End ****************************

    console.log("✅ Custom GSAP scripts initialization finished.");
  }, 100);
}

// Attach the function to the window object so React can call it.
window.initGsapScripts = initGsapScripts;
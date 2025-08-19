// --- START OF FILE: custom-gsap.js (Corrected for React, Mobile Cursor & Mobile Scrolling) ---

// This part MUST run immediately when the script is loaded to prepare GSAP.
// It should be at the top level, outside any function.
gsap.registerPlugin(ScrollTrigger, SplitText);

// A variable to hold our GSAP context. This is key for cleanup in React.
let gsapContext;

// Create a new function to hold all the logic that needs to find DOM elements.
function initGsapScripts() {
  console.log("🚀 Initializing custom GSAP scripts...");

  // ==============================================================================
  // ===== CRITICAL FIX FOR MOBILE SCROLLING ISSUE =====
  // This line removes any 'overflow: hidden' style that might be leftover
  // from the mobile menu on the previous page. This MUST run immediately.
  document.body.style.overflow = "";
  // ==============================================================================


  // --- CLEANUP PHASE ---
  // Before we create new animations, we must clean up the old ones.
  if (gsapContext) {
    console.log("🧹 Cleaning up previous GSAP context...");
    gsapContext.revert();
  }
  // Kill any other stray ScrollTriggers just in case.
  ScrollTrigger.getAll().forEach(t => t.kill());

  // Use a small timeout to be extra sure the DOM is ready.
  setTimeout(() => {
    // --- INITIALIZATION PHASE ---
    gsapContext = gsap.context(() => {

      // =================================== Custom Cursor Js Start (Desktop Only) =====================================
      const cursorMatcher = gsap.matchMedia();
      cursorMatcher.add("(min-width: 992px)", () => {
          const body = document.body;
          const cursor = document.querySelector(".cursor");
          const dot = document.querySelector(".dot");
          const cursorSmalls = document.querySelectorAll(".cursor-small");
          const cursorBigs = document.querySelectorAll(".cursor-big");

          if (cursor && dot) {
              const moveCursor = (event) => {
                  gsap.to(cursor, { x: event.clientX, y: event.clientY, duration: 2, delay: 0.1, visibility: "visible", ease: "expo.out" });
                  gsap.to(dot, { x: event.clientX, y: event.clientY, duration: 1.5, visibility: "visible", ease: "expo.out" });
              };
              body.addEventListener("mousemove", moveCursor);

              cursorSmalls.forEach((cursorSmall) => {
                  cursorSmall.addEventListener("mouseenter", () => { gsap.to(dot, { scale: 8, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "hidden", opacity: 0 }); });
                  cursorSmall.addEventListener("mouseleave", () => { gsap.to(dot, { scale: 1, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "visible", opacity: 1 }); });
              });
              cursorBigs.forEach((cursorBig) => {
                  cursorBig.addEventListener("mouseenter", () => { gsap.to(dot, { scale: 36, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "hidden", opacity: 0 }); });
                  cursorBig.addEventListener("mouseleave", () => { gsap.to(dot, { scale: 1, backgroundColor: "#fff" }); gsap.to(cursor, { visibility: "visible", opacity: 1 }); });
              });
          }
          return () => {
              if (cursor) cursor.style.visibility = 'hidden';
              if (dot) dot.style.visibility = 'hidden';
          }
      });
      // =================================== Custom Cursor Js End =====================================

      // **************************** Mobile Menu js Start ****************************
      const mmm = gsap.matchMedia();
      const toggleMobileMenu = document.querySelector(".toggle-mobileMenu");
      const closeButton = document.querySelector(".close-button");
      const mobileSideOverlay = document.querySelector(".side-overlay");

      if (toggleMobileMenu && closeButton && mobileSideOverlay) {
          mmm.add("(max-width: 991px)", () => {
              let mtl = gsap.timeline({ paused: true });
              mtl.to(".side-overlay", { opacity: 1, visibility: "visible", duration: 0.1 });
              mtl.to(".mobile-menu", { x: 0 });
              mtl.from(".nav-menu__item", { opacity: 0, duration: 0.1, y: -60, stagger: 0.05 });
              mtl.from(".close-button", { opacity: 0, scale: 0 });

              toggleMobileMenu.addEventListener("click", () => { mtl.play(); document.body.style.overflow = "hidden"; });
              closeButton.addEventListener("click", () => { mtl.reverse(); document.body.style.overflow = ""; });
              mobileSideOverlay.addEventListener("click", () => { mtl.reverse(); document.body.style.overflow = ""; });
          });
      }
      // **************************** Mobile Menu js End ****************************

      // =================================== Custom Split text Js Start =====================================
      if (document.querySelector(".splitTextStyleOne")) {
        let characters = gsap.utils.toArray(".splitTextStyleOne");
        characters.forEach((char) => {
          let split_char = new SplitText(char, { type: "chars, words", lineThreshold: 0.3 });
          gsap.from(split_char.chars, {
            scrollTrigger: { trigger: char, start: "top 90%", end: "bottom 60%", scrub: false, markers: false, toggleActions: "play none none none" },
            autoAlpha: 0, y: 40, duration: 0.3, opacity: 0, stagger: 0.03, ease: "back.out(1.7)"
          });
        });
      }
      // =================================== Custom Split text Js End =====================================

      // **************************** Position Aware button hover js start ****************************
      class Button {
          constructor(buttonElement) {
              this.button = buttonElement;
              if (!this.button) return;
              this.text = this.button.querySelector('.text');
              this.init();
          }
          init() { this.initEvents(); }
          getXY(e) {
              let { left, top } = this.button.getBoundingClientRect();
              let x = e.clientX - left;
              let y = e.clientY - top;
              return { x, y };
          }
          initEvents() {
              this.button.addEventListener('mouseenter', e => {
                  const { x, y } = this.getXY(e);
                  this.text.style.setProperty('--x', `${x}px`);
                  this.text.style.setProperty('--y', `${y}px`);
              });
              this.button.addEventListener('mouseleave', e => {
                  const { x, y } = this.getXY(e);
                  this.text.style.setProperty('--x', `${x}px`);
                  this.text.style.setProperty('--y', `${y}px`);
              });
          }
      }
      const buttonElements = document.querySelectorAll('[data-block="button"]');
      buttonElements.forEach((buttonElement) => { new Button(buttonElement); });
      // **************************** Position Aware button hover js End *============================

    }); // End of gsap.context()

    console.log("✅ Custom GSAP scripts initialization finished.");

  }, 100);
}

// Attach the function to the window object so React can call it.
window.initGsapScripts = initGsapScripts;
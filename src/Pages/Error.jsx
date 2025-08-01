import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Preloader from "../Components/Preloader";
import Error_Seo from "../SEO/Error_Seo";

function Error() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const smootherRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const ScrollSmoother = window.ScrollSmoother;
    const SplitText = window.SplitText;

    let smoother;

    const initializeSmoother = () => {
      // Register plugins
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

      // Kill existing instance
      if (ScrollSmoother.get()) {
        ScrollSmoother.get().kill();
      }

      // Check if wrapper and content exist
      const wrapper = document.getElementById("smooth-wrapper");
      const content = document.getElementById("smooth-content");

      if (!wrapper || !content) return;

      // Recreate smoother
      smoother = ScrollSmoother.create({
        wrapper: wrapper,
        content: content,
        smooth: 1.2,
        effects: true,
      });

      // SplitText animation
      const split = new SplitText(".headline", { type: "words,chars" });
      gsap.from(split.chars, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.05,
        ease: "power2.out",
      });

      // Scroll animation
      gsap.to(".line_item_one", {
        scrollTrigger: {
          trigger: ".line_item_one",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
        x: 200,
      });
    };

    if (!isLoading) {
      // Wait for DOM + React hydration
      requestAnimationFrame(() => {
        setTimeout(() => {
          initializeSmoother();
        }, 100); // delay ensures DOM is ready
      });
    }

    // Clean up on unmount/route change
    return () => {
      if (ScrollSmoother.get()) {
        ScrollSmoother.get().kill();
      }
    };
  }, [isLoading, location.pathname]);

  return (
    <>
      <Error_Seo />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div className="line_wrap">
                <div className="line_item_one" />
                <div className="line_item" />
                <div className="line_item" />
                <div className="line_item" />
                <div className="line_item" />
              </div>
              <main>
                <section className="error-page">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        {/*===  Section Content Box  ===*/}
                        <div className="section-content-box text-center">
                          <div className="error-image">
                            <img
                              src="assets/images/404/error.png"
                              alt="404 Error"
                            />
                          </div>
                          <h1
                            data-aos="fade-down"
                            data-aos-duration={1200}
                            className="aos-init"
                          >
                            OPPS! Page Are Can’t Be Found
                          </h1>
                          <h5
                            data-aos="fade-up"
                            data-aos-duration={1300}
                            className="aos-init"
                          >
                            We're sorry, the page you have looked for does not exist in our database! Maybe go to our home page or try to use a search?
                          </h5>
                          <a
                            href="index.html"
                            className="theme-btn style-one aos-init"
                            data-aos="fade-up"
                            data-aos-duration={1400}
                          >
                            Go to Home{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Error;

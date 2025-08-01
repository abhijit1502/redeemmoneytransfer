import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import Help_Seo from "../../SEO/Help_Seo";

function Help() {
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
      <Help_Seo />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
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
                {/*======  Start Page Hero Section  ======*/}
                <section className="page-hero-ss">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="page-content text-center">
                          <h1 className="page-title">Help</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="active">Help</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End Page Hero Section  ======*/}
                {/*<<Help Section Start>>*/}
                <section className="help-area pb-80">
                  <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                      <div className="col-lg-7">
                        <div className="title-area mb-2 text-center text-lg-start">
                          <p className="">For Documents</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="nav nav-tabs help-tabs"
                      id="nav-tab"
                      role="tablist"
                    >
                      <NavLink to="/onboarding" className="nav-link">
                        <img src="assets/images/photo/kyc.png" />
                        <span className="box-title">KYC Upload</span>
                      </NavLink>
                    </div>
                    <hr style={{ color: "#2d2bb5" }} />
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                      <div className="col-lg-7">
                        <div className="title-area mb-2 text-center text-lg-start">
                          <p className="">For Safety</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="nav nav-tabs help-tabs"
                      id="nav-tab"
                      role="tablist"
                    >
                      <NavLink to="/data-safety" className="nav-link">
                        <img src="assets/images/photo/data-safety.png" />
                        <span className="box-title">Data Safety</span>
                      </NavLink>
                    </div>
                    <hr style={{ color: "#2d2bb5" }} />
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                      <div className="col-lg-7">
                        <div className="title-area mb-2 text-center text-lg-start">
                          <p className="">For FAQ's</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="nav nav-tabs help-tabs"
                      id="nav-tab"
                      role="tablist"
                    >
                      <NavLink to="/onboarding-faq" className="nav-link">
                        <img src="assets/images/photo/onbordingfaq.png" />
                        <span className="box-title">Onboarding FAQs</span>
                      </NavLink>
                      <NavLink to="/general-faq" className="nav-link">
                        <img src="assets/images/photo/faq.png" />
                        <span className="box-title">General FAQs</span>
                      </NavLink>
                    </div>
                    <hr style={{ color: "#2d2bb5" }} />
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                      <div className="col-lg-7">
                        <div className="title-area mb-2 text-center text-lg-start">
                          <p className="">For Any Help</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="nav nav-tabs help-tabs"
                      id="nav-tab"
                      role="tablist"
                    >
                      <NavLink
                        to="https://api.whatsapp.com/send?phone=14379861192&amp;text=Hello There, I would like to enquire about money transfer."
                        className="nav-link"
                        target="_blank"
                      >
                        <img src="assets/images/photo/whatsapp.png" />
                        <span className="box-title">Whatsapp</span>
                      </NavLink>
                      <NavLink to="tel:14379861192" className="nav-link">
                        <img src="assets/images/photo/phone.png" />
                        <span className="box-title">Phone</span>
                      </NavLink>
                    </div>
                  </div>
                </section>

                {/*====== Start CTA Section ======*/}
                <section
                  className="cta-sb bg_cover p-r z-1 pt-90 pb-40"
                  style={{
                    backgroundImage: "url(assets/images/bg/cta-bg1.jpg)",
                  }}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-12">
                        {/*=== Section Content Box ===*/}
                        <div className="section-content-box mb-50 text-center">
                          <div className="section-title text-white mb-55">
                            <h2 className="text-anm">
                              <span className="font-200">Download</span> Our
                              Mobile App
                            </h2>
                          </div>
                        </div>
                        <div className="section-content-box mb-40 text-center">
                          <div className="row justify-content-center">
                            <div className="col-xl-2 col-md-6">
                              {/*=== Iconic Box ===*/}
                              <NavLink to="#" target="_blank" className="mb-3">
                                <img src="assets/images/icons/Play-store.png" />
                              </NavLink>
                            </div>
                            <div className="col-xl-2 col-md-6">
                              {/*=== Iconic Box ===*/}
                              <NavLink to="#" target="_blank" className="mb-3">
                                <img src="assets/images/icons/Appstore.png" />
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*====== End CTA Section ======*/}
              </main>
              <Footer />
            </div>
          </div>
          <CookieConsent />
        </>
      )}
    </>
  );
}

export default Help;

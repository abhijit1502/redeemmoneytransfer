import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import "../../css/steps.css";
import Onboarding_Seo from '../../SEO/Onboarding_Seo';

function Onboarding() {
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
      <Onboarding_Seo />
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
                          <h1 className="page-title">Onboarding</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/help">Help</NavLink>
                            </li>
                            <li className="active">Onboarding</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End Page Hero Section  ======*/}
                 
                    {/*<< Onboarding Section Start>>*/}
                <section className="kyc-upload pb-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="heading_block style_2 text-center">
                                    <h2 className="heading_text mb-3">
                                        KYC Documents Upload
                                    </h2>
                                    <p>
                                        On our mobile app to complete your onboarding process we require your Photo ID
                                        and a selfie. We use ID Scan solution which takes less than a minute to complete
                                        this for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div id="msform">
                                    {/* progressbar */}
                                    <ul id="progressbar">
                                        <NavLink to="/onboarding">
                                            <li className="active" id="confirm"><strong>1) Scanning Your Id</strong>
                                            </li>
                                        </NavLink>
                                        <NavLink to="/livenesscheck">
                                            <li id="confirm"><strong>2) Liveness Check</strong></li>
                                        </NavLink>
                                        <NavLink to="/finish">
                                            <li id="confirm"><strong>Finish</strong></li>
                                        </NavLink>
                                    </ul>
                                    {/* fieldsets */}
                                    <fieldset>
                                        <div className="form-card">
                                            <div className="row justify-content-center">
                                                <h4 className="mb-4">How To Scan Id?</h4>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        >
                                                        <img className="card-img-top" src="assets/images/photo/scanid1.png"
                                                            alt="How to scan Id?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">Try not to take the photo from
                                                                any other angle. It will work regardless, but parallel
                                                                is better.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        >
                                                        <img className="card-img-top" src="assets/images/photo/scanid2.png"
                                                            alt="How to scan Id?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">Try not to take the photo from
                                                                any other angle. It will work regardless, but parallel
                                                                is better.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="hrcss" />
                                            <div className="row justify-content-center">
                                                <h4 className="mb-4 mt-2">What to avoid?</h4>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        >
                                                        <img className="card-img-top" src="assets/images/photo/scanid4.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">Please avoid flash or glares.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        >
                                                        <img className="card-img-top" src="assets/images/photo/scanid6.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">Please avoid shadows over the
                                                                ID.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        >
                                                        <img className="card-img-top" src="assets/images/photo/scanid7.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">Please remove any background
                                                                clutter.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        >
                                                        <img className="card-img-top" src="assets/images/photo/scanid3.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text mb-4">Please make sure your details
                                                                aren't blurry.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        >
                                                        <img className="card-img-top" src="assets/images/photo/scanid5.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">Please make sure you are not
                                                                cropping or skewing the ID.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <NavLink to="/livenesscheck" className="theme-btn style-one">Next</NavLink>
                                    </fieldset>
                                </div>
                            </div>
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

export default Onboarding
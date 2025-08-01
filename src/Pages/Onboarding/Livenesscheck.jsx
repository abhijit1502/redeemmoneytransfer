import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import "../../css/steps.css";
import Livenesscheck_Seo from '../../SEO/Livenesscheck_Seo';

function Livenesscheck() {
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
     <Livenesscheck_Seo />
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
                                            <li className="active" id="confirm"><strong>2) Liveness Check</strong></li>
                                        </NavLink>
                                        <NavLink to="/finish">
                                            <li id="confirm"><strong>Finish</strong></li>
                                        </NavLink>
                                    </ul>
                                    {/* fieldsets */}
                                    <fieldset>
                                        <div className="form-card">
                                            <div className="row justify-content-center">
                                                <h4 className="mb-4">Taking Perfect Photo</h4>
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                        <img className="card-img-top"
                                                            src="assets/images/photo/takephoto1.png"
                                                            alt="Taking Perfect Photo" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">Make sure the camera has a
                                                                consistent aspect ratio, so it does not stretch the
                                                                image in any direction.</p>
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
                                                        style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                        <img className="card-img-top"
                                                            src="assets/images/photo/takephoto7.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text mb-0">Avoid shadows on the face or a
                                                                strong side light.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                        <img className="card-img-top"
                                                            src="assets/images/photo/takephoto3.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">Make sure your face is within
                                                                the circle guidelines shown on the screen.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                        <img className="card-img-top"
                                                            src="assets/images/photo/takephoto4.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text mb-0">Make sure you are in a
                                                                well-lit room that is not too dark.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                        <img className="card-img-top"
                                                            src="assets/images/photo/takephoto2.png"
                                                            alt="What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">Turn off any filters that
                                                                might distort the image but keep the white light
                                                                correction ON.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                        <img className="card-img-top"
                                                            src="assets/images/photo/takephoto6.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0 mb-4">Avoid having a light
                                                                source behind the person's head, such as from a window.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                        <img className="card-img-top"
                                                            src="assets/images/photo/takephoto8.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">Avoid anything covering the
                                                                face, such as masks, hats, sunglasses or hair flopping
                                                                over the face.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="card cardcss"
                                                        style={{ boxShadow: '0 5px 40px 0 rgba(0, 0, 0, .11)', margin: '0 0 20px 0' }}>
                                                        <img className="card-img-top"
                                                            src="assets/images/photo/takephoto5.png"
                                                            alt=" What to avoid?" />
                                                        <div className="card-body">
                                                            <p className="card-text m-0">For active liveness only - When
                                                                performing actions such as turn right, do not
                                                                over-rotate the face to 90 degrees, an angle of 35
                                                                degrees should be enough. Start with the camera raised
                                                                so there is space to look down.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <NavLink to="/onboarding" type="button" className="theme-btn style-sign">
                                            Previous</NavLink>&emsp;
                                        <NavLink to="/finish" type="button" className="theme-btn style-one">Next
                                        </NavLink>
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

export default Livenesscheck
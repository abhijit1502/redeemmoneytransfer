import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CorridorsSlider from "../../Components/CorridorsSlider";
import Testimonial from "./Testimonial";
import CookieConsent from "../../Components/CookieConsent";
import Money_Transfer_Seo from "../../SEO/Money_Transfer_Seo";
import Calculator from "../../Components/Calculator";

function MoneyTransfer() {
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
      <Money_Transfer_Seo />
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
                          <h1 className="page-title">Money Transfer</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="active">Money Transfer</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End Page Hero Section  ======*/}

                {/*====== Start  Section ======*/}
                <section className="team-details-page pb-80">
                  <div className="container">
                    {/*===   Wrapper ===*/}
                    <div className="team-details-wrapper">
                      <div className="row align-items-center">
                        <div className="col-xl-5">
                          <div
                            className="team-item mb-50"
                            data-aos="fade-up"
                            data-aos-duration={800}
                          >
                            <div className="member-image">
                              <Calculator />
                            </div>
                            <div className="text-center">
                              <h6 className="mb-3">Download Our App</h6>
                              <div className="row">
                                <div className="col-xl-12 col-md-12 gap-3">
                                  {/*=== Iconic Box ===*/}
                                  <NavLink
                                    to="#"
                                    target="_blank"
                                    className="mb-3"
                                  >
                                    <img src="assets/images/icons/Play-store.png" />
                                  </NavLink>
                                  &emsp;
                                  <NavLink
                                    to="#"
                                    target="_blank"
                                    className="mb-3"
                                  >
                                    <img src="assets/images/icons/Appstore.png" />
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7">
                          <div className="member-info-content mb-10">
                            <div
                              className="content-box"
                              data-aos="fade-up"
                              data-aos-duration={900}
                            >
                              <div className="mb-3">
                                <span className="sub-heading">
                                  Money Transfer
                                </span>
                                <h2 className="text-anm">
                                  <span className="font-200">
                                    Super Fast & Secure
                                  </span>
                                  Money Transfer Services
                                </h2>
                              </div>
                              <p>
                                Pelmax Money Transfer Service, sending money to
                                UAE, UK, Australia, Japan, Switzerland,
                                Singapore, Hong Kong, France, Spain, Canada, and
                                the USA has never been easier. Our secure
                                electronic funds transfer system, competitive
                                exchange rates, and real-time tracking ensure
                                every transaction is efficient and reliable.
                              </p>
                              <div className="sasly-item mb-30">
                                <div className="icon">
                                   <img
                                  src="assets/images/icon/Global-Payments.svg"
                                  alt="Global Payments"
                                />
                                </div>
                                <div className="content">
                                  <h5 className="title">Global Payments</h5>
                                  <p>
                                   Send money worldwide with seamless, secure transactions to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong, and beyond.
                                  </p>
                                </div>
                              </div>
                              <div className="sasly-item mb-30">
                                <div className="icon">
                                  <img
                                  src="assets/images/icon/Competitive-Rates.svg"
                                  alt="Competitive Rates"
                                />
                                </div>
                                <div className="content">
                                  <h5 className="title">Competitive Rates</h5>
                                  <p>
                                    Enjoy transparent pricing with industry-leading exchange rates for secure and affordable money transfers across international borders. No hidden fees, just reliable transactions.
                                  </p>
                                </div>
                              </div>
                              <div className="sasly-item mb-30">
                                <div className="icon">
                                 <img
                                  src="assets/images/icon/Service-2.svg"
                                  alt="24/7 Service"
                                />
                                </div>
                                <div className="content">
                                  <h5 className="title">24/7 Service</h5>
                                  <p>
                                    Access secure money transfer services anytime, anywhere with round-the-clock assistance and real-time transaction tracking for complete peace of mind.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*====== End  Section ======*/}

                {/*====== Start corridors Section ======*/}
                <CorridorsSlider />
                {/*====== End corridors Section ======*/}

                {/*====== Start About Section =======*/}
                <section className="about-sb pt-130 pb-75">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        {/*=== Section Title  ===*/}
                        <div className="section-title style-one text-center mb-60">
                          <span className="sub-heading">
                           Reliable Money Transfer Service 
                          </span>
                          <h2 className="text-anm">
                            <span className="font-200">
                              Money Transfer at your
                            </span>&nbsp;Fingertips
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-xl-5">
                        {/*=== Section Content Box ===*/}
                        <div className="section-content-box style-one">
                          <p className="mb-35" data-aos="fade-up">
                           Experience hassle-free international transactions with Redeem Money Transfer. Securely send money online anytime, anywhere with instant transfers, competitive rates, and real-time tracking for complete peace of mind. Let me know if you need refinements!
                          </p>
                          <div className="row">
                            <div className="col-lg-12" data-aos="fade-up">
                              <ul className="check-list style-one">
                                <li>
                                  <i class="far fa-check-circle"></i>
                                  Easy sign up
                                </li>
                                 <li>
                                  <i class="far fa-check-circle"></i>
                                  Choose your payment method
                                </li>
                                 <li>
                                  <i class="far fa-check-circle"></i>
                                  End-to-End Data Encryption
                                </li>
                                 <li>
                                  <i class="far fa-check-circle"></i>
                                  Live Exchange Rate Updates
                                </li>
                                 <li>
                                  <i class="far fa-check-circle"></i>
                                  Transaction Success Confirmation
                                </li>
                                 <li>
                                  <i class="far fa-check-circle"></i>
                                  Instant Security Alerts
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="about-button" data-aos="fade-up">
                            <NavLink
                              to="#"
                              className="theme-btn style-two"
                              target="_blank"
                            >
                              Send Money Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        {/*=== Iconic Box ===*/}
                        <div className="section-image-box mb-55">
                          <img
                            src="assets/images/about/Fingertips.png"
                            className="rounded-3 translate-img"
                            alt="Money Transfer at your Fingertips"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*====== End About Section =======*/}

                {/*====== Start Testimonial Section ======*/}
                <Testimonial />
                {/*====== End Testimonial Section ======*/}

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

export default MoneyTransfer;

import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import About_Seo from "../../SEO/About_Seo";
import Testimonial from "./Testimonial";

function AboutUs() {
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
      <About_Seo />
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
                          <h1 className="page-title">About Us</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="active">About Us</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End Page Hero Section  ======*/}

                {/*======  Start Page Banner Section  ======*/}
                <section className="page-banner-ss pb-110">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="sasly-image-box">
                          <img
                            src="assets/images/about/about1.jpg"
                            alt="About Redeem Money Transfer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End Page Banner Section  ======*/}

                {/*======  Start About Section  ======*/}
                <section className="about-page-ss">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-12">
                        <div className="section-title mb-60">
                          <h2 className="text-anm">
                            <span className="font-200">
                              We Provide Super Fast & Secure
                            </span>{" "}
                            Money Transfer Services
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="section-content-box  mb-40">
                          <p className="mb-10" data-aos="fade-up">
                            At Redeem Money Transfer Ltd., we are redefining the way
                            financial services are delivered - securely,
                            efficiently, and with unwavering compliance. Based
                            in Canada and fully licensed as a Money Services
                            Business (MSB), Pelmax is built to serve a global
                            clientele with trusted, technology-driven solutions.
                          </p>
                          <p className="mb-10" data-aos="fade-up">
                            Founded with a clear mission - to provide accessible
                            and reliable financial services - Pelmax has evolved
                            into a versatile platform supporting individuals,
                            entrepreneurs, and businesses of all sizes in
                            managing and moving money across borders.
                          </p>
                          <p className="mb-10" data-aos="fade-up">
                            Our core offerings include:
                            <div className="row mt-2">
                              <div className="col-lg-6" data-aos="fade-up">
                                <ul className="check-list style-one">
                                  <li>
                                    <i class="far fa-check-circle"></i>{" "}
                                    International Money Remittance
                                  </li>
                                  <li>
                                    <i class="far fa-check-circle"></i> Foreign
                                    Exchange Services
                                  </li>
                                  <li>
                                    <i class="far fa-check-circle"></i> Virtual
                                    Currency Transactions
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-6" data-aos="fade-up">
                                <ul className="check-list style-one">
                                  <li>
                                    <i class="far fa-check-circle"></i> Payment
                                    Processing Solutions
                                  </li>
                                  <li>
                                    <i class="far fa-check-circle"></i> Prepaid
                                    Card Issuance
                                  </li>
                                  <li>
                                    <i class="far fa-check-circle"></i> Client
                                    Account Services
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </p>
                          <p className="mb-10" data-aos="fade-up">
                            We understand that in today’s financial landscape,
                            speed, security, and transparency are
                            non-negotiable. That’s why we combine cutting-edge
                            technology with strict regulatory compliance to
                            ensure every transaction is handled with integrity
                            and care.
                          </p>
                          <p className="mb-10" data-aos="fade-up">
                            What sets us apart is our team of seasoned
                            professionals - experts in finance, technology, and
                            customer service - who bring a wealth of global
                            experience and a client-first mindset to every
                            engagement. Whether you&#39;re sending money to
                            family abroad, managing FX exposure, launching a
                            fintech venture, or seeking a robust partner for
                            virtual asset services, Pelmax delivers tailored
                            solutions to meet your specific needs.
                          </p>
                          <p className="mb-10" data-aos="fade-up">
                            We are more than a financial service provider - we
                            are a trusted ally, committed to helping you succeed
                            in a fast-changing financial world.
                          </p>
                          <p className="mb-35" data-aos="fade-up">
                            Redeem Money Transfer Ltd. — Empowering Confidence in
                            Every Transaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End About Section  ======*/}

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

export default AboutUs;

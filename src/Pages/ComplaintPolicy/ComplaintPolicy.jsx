import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import Complaint_Policy_Seo from "../../SEO/Complaint_Policy_Seo";

function ComplaintPolicy() {
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
      <Complaint_Policy_Seo />
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
                          <h1 className="page-title">Complaint Policy</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="active">Complaint Policy</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End Page Hero Section  ======*/}

                {/*====== Start Blog Section ======*/}
                <section className="blog-details-ss pb-80">
                  <div className="container">
                    {/*=== Blog Details Wrapper ===*/}
                    <div className="blog-details-wrapper">
                      <div className="row">
                        <div className="col-xl-12">
                          {/*=== Blog Post Main ===*/}
                          <div className="blog-post-main mb-70">
                            <div className="blog-post-item">
                              <div
                                className="post-content"
                                data-aos="fade-up"
                                data-aos-duration={800}
                              >
                                <h3 className="title">Our complaints policy</h3>
                                <p>
                                  We are committed to providing a high-quality
                                  money transfer service to all our clients.
                                  When something goes wrong, we need you to tell
                                  us about it. This will help us to improve our
                                  standards.
                                </p>
                                <p>
                                  If you have a complaint, please contact us
                                  with the details.
                                </p>

                                <h3 className="title">Definitions</h3>
                                <p>
                                  <ul
                                    className="mb-1 mrl"
                                    style={{ listStyle: "disc" }}
                                  >
                                    <li>
                                      By Email:&nbsp;
                                      <NavLink to="mailto:operations@pelmax.solutions.">
                                        operations@pelmax.solutions
                                      </NavLink>
                                    </li>
                                    <li>
                                      By Phone:&nbsp;
                                      <NavLink to="tel:14379861192">
                                        +1 437 986 1192
                                      </NavLink>
                                    </li>
                                    <li>
                                      By Post: 23-1771 Robson Street, Vancouver, Bc, V6g 3b7, Canada
                                    </li>
                                  </ul>
                                  We have eight weeks to consider your
                                  complaint. If we have not resolved it within
                                  this time you may complain to the Financial
                                  Ombudsman Service.
                                </p>

                                <h3 className="title">
                                  1. What Personal Data is collected and why?
                                </h3>

                                <p>
                                  <ul
                                    className="mb-1 mrl"
                                    style={{ listStyle: "disc" }}
                                  >
                                    <li>
                                      We will send you a letter/email
                                      acknowledging receipt of your complaint on
                                      the same day of receiving it, enclosing a
                                      copy of this procedure. If you have
                                      complained in person or on call, we will
                                      try to resolve and reach the solution the
                                      same day.
                                    </li>
                                    <li>
                                      If we are unable to resolve your complaint
                                      on the same day then we will further
                                      investigate your complaint. This will
                                      normally involve finding details of your
                                      complaint, reviewing your matter by
                                      speaking to the member of staff who acted
                                      for you.
                                    </li>
                                    <li>
                                      We will respond to you within 7 days with
                                      our Final Response which may be a remedial
                                      action.
                                    </li>
                                    <li>
                                      If you are still not satisfied, you can
                                      then contact the Financial Ombudsman
                                      Service, about your complaint. Normally,
                                      you will need to bring a complaint to the
                                      Financial Ombudsman Service within six
                                      months of receiving a final written
                                      response from us about your complaint. For
                                      further information, you should contact
                                      the Financial Ombudsman Service on:
                                      <ul
                                        className="mb-1 mrl"
                                        style={{ listStyle: "circle" }}
                                      >
                                        <li>
                                          Online:&nbsp;
                                          <NavLink
                                            to="https://www.financial-ombudsman.org.uk/"
                                            target="_blank"
                                          >
                                            https://www.financial-ombudsman.org.uk/
                                          </NavLink>
                                        </li>
                                        <li>
                                          Email:&nbsp;
                                          <NavLink to="mailto:complaint.info@financial-ombudsman.org.uk">
                                            complaint.info@financial-ombudsman.org.uk
                                          </NavLink>
                                          ,
                                        </li>
                                        <li>
                                          By post: The Financial Ombudsman
                                          Service Exchange Tower, London, E14
                                          9SR
                                        </li>
                                        <li>
                                          Phone:&nbsp;
                                          <NavLink to="tel:08000234567">
                                            0800 023 4 567
                                          </NavLink>
                                          (free),
                                          &nbsp;<NavLink to="tel:03001239123">
                                            0300 123 9 123
                                          </NavLink>
                                          , weekdays from 8:00am - 8:00pm (GMT),
                                          and on Saturday from 9:00 - 1:00pm
                                          (GMT).
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      If you're not in the UK, call&nbsp;
                                      <NavLink to="tel:08000568330">
                                        0800 056 8330
                                      </NavLink>&nbsp;
                                      |
                                      &nbsp;<NavLink to="tel:07728918745">
                                        0772 891 8745
                                      </NavLink>
                                      .
                                    </li>
                                  </ul>
                                  FOS will not charge you for making a complaint
                                  and if you are not satisfied with the outcome
                                  you can still bring legal proceedings. In
                                  addition, please note that disputes may also
                                  be submitted for online resolution via the
                                  European Online Dispute Resolution Platform
                                  accessible at:&nbsp;
                                  <NavLink
                                    to="http://ec.europa.eu/odr"
                                    target="_blank"
                                  >
                                    http://ec.europa.eu/odr
                                  </NavLink>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*====== End Blog Section ======*/}

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

export default ComplaintPolicy;

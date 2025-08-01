import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import "../../css/steps.css";
import CookieConsent from "../../Components/CookieConsent";
import General_FAQ_Seo from "../../SEO/General_FAQ_Seo";

function GeneralFAQ() {
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
      <General_FAQ_Seo />
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
                          <h1 className="page-title">General FAQs</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/help">Help</NavLink>
                            </li>
                            <li className="active">General FAQs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End Page Hero Section  ======*/}

                {/*======  Start Faq Page Section  ======*/}
                <section className="faqs-page-ss pb-80">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        {/*====== Accordion  ======*/}
                        <div className="accordion" id="accordionOne">
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-10">
                            <div className="accordion-header">
                              <h6
                                className="accordion-title"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1"
                                aria-expanded="false"
                              >
                                <span className="sn">01.</span> Why do I need to
                                provide documents during registration?
                              </h6>
                            </div>
                            <div
                              id="collapse1"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionOne"
                            >
                              <div className="accordion-content">
                                <p>
                                  As a regulated entity under the Financial
                                  Transactions and Reports Analysis Centre of
                                  Canada (FINTRAC), we are legally obligated to
                                  verify your identity as part of our Customer
                                  Due Diligence (CDD) process.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-10">
                            <div className="accordion-header">
                              <h6
                                className="accordion-title"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2"
                                aria-expanded="false"
                              >
                                <span className="sn">02.</span>How can I cancel
                                my transfer?
                              </h6>
                            </div>
                            <div
                              id="collapse2"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionOne"
                            >
                              <div className="accordion-content">
                                <p>
                                  If you wish to cancel your transfer, please
                                  contact us by phone or email at the earliest
                                  opportunity.
                                  <br />
                                  Please note that once a transfer has been paid
                                  out to the recipient, it cannot be cancelled.
                                  <br />
                                  If your payment has been made but the transfer
                                  is still pending, contact us immediately. We
                                  will assist in arranging a refund. A small
                                  handling or service fee may apply, and the
                                  remaining balance will be returned to you.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-10">
                            <div className="accordion-header">
                              <h6
                                className="accordion-title"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse3"
                                aria-expanded="false"
                              >
                                <span className="sn">03.</span>Will I receive
                                notifications about my transfer status?
                              </h6>
                            </div>
                            <div
                              id="collapse3"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionOne"
                            >
                              <div className="accordion-content">
                                <p>
                                  Yes, you will receive email updates at each
                                  stage of the transfer process. You can also
                                  track the status of your transfer by logging
                                  in to your online account.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-10">
                            <div className="accordion-header">
                              <h6
                                className="accordion-title"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse4"
                                aria-expanded="false"
                              >
                                <span className="sn">04.</span>How many
                                recipients can I add?
                              </h6>
                            </div>
                            <div
                              id="collapse4"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionOne"
                            >
                              <div className="accordion-content">
                                <p>
                                  There is no limit to the number of recipients
                                  you can add to your account.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-10">
                            <div className="accordion-header">
                              <h6
                                className="accordion-title"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse5"
                                aria-expanded="false"
                              >
                                <span className="sn">05.</span>You’ve asked me
                                to upload an additional document - how do I do
                                that?
                              </h6>
                            </div>
                            <div
                              id="collapse5"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionOne"
                            >
                              <div className="accordion-content">
                                <p>
                                  Please log in to your account. Under the “My
                                  Account” section, you will find a “Documents”
                                  area where you can upload the requested file.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-10">
                            <div className="accordion-header">
                              <h6
                                className="accordion-title"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse6"
                                aria-expanded="false"
                              >
                                <span className="sn">06.</span>How can I pay for
                                my transfer?
                              </h6>
                            </div>
                            <div
                              id="collapse6"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionOne"
                            >
                              <div className="accordion-content">
                                <p>
                                  You can pay via bank transfer to our business
                                  account or by using a credit or debit card. We
                                  recommend bank transfers as the preferred
                                  payment method. Please note that card payments
                                  may be subject to restrictions and could incur
                                  additional fees.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-10">
                            <div className="accordion-header">
                              <h6
                                className="accordion-title"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse7"
                                aria-expanded="false"
                              >
                                <span className="sn">07.</span>Why did I receive
                                a &#39;Transfer Complete&#39; email, but the
                                recipient hasn’t received the funds?
                              </h6>
                            </div>
                            <div
                              id="collapse7"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionOne"
                            >
                              <div className="accordion-content">
                                <p>
                                  In some cases, our payout partner may have
                                  completed the transfer, but the recipient’s
                                  bank may take a few hours to reflect the funds
                                  in their account.
                                  <br />
                                  If the delay continues beyond a reasonable
                                  timeframe, please contact our support team—we
                                  will ensure the funds reach your recipient as
                                  promised.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-10">
                            <div className="accordion-header">
                              <h6
                                className="accordion-title"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse8"
                                aria-expanded="false"
                              >
                                <span className="sn">08.</span>Good to Know
                              </h6>
                            </div>
                            <div
                              id="collapse8"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionOne"
                            >
                              <div className="accordion-content">
                                <ul className="check-list style-one mt-2">
                                  <li>
                                    <i class="far fa-check-circle"></i> You must
                                    be at least 18 years old to register
                                  </li>
                                  <li>
                                    <i class="far fa-check-circle"></i> Identity
                                    verification is required (this does not
                                    affect your credit score)
                                  </li>
                                  <li>
                                    <i class="far fa-check-circle"></i> Your
                                    account activation is subject to review of
                                    the documents submitted
                                  </li>
                                  <li>
                                    <i class="far fa-check-circle"></i> Monthly
                                    sending limits may apply
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End Faq Page Section  ======*/}

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

export default GeneralFAQ;

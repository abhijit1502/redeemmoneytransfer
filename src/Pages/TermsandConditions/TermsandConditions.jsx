import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import Terms_and_Conditions_Seo from "../../SEO/Terms_and_Conditions_Seo";

function TermsandConditions() {
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
      <Terms_and_Conditions_Seo />
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
                          <h1 className="page-title">Terms and Conditions</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="active">Terms and Conditions</li>
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
                                <h3 className="title">
                                  <span>I.</span> General Provisions
                                </h3>
                                <p>
                                  These Terms and Conditions (&quot;Terms&quot;)
                                  govern your use of the website operated by
                                  Redeem Money Transfer Ltd. (&quot;we&quot;,
                                  &quot;us&quot;, &quot;our&quot;) and any
                                  associated services (collectively, the
                                  “Service”). By accessing, registering with, or
                                  using the Service, you agree to be legally
                                  bound by these Terms.
                                </p>
                                <p>
                                  The terms “you” and “your” refer to any
                                  individual or entity that accesses or uses the
                                  Service. Use of the Service is conditional
                                  upon your acceptance of these Terms. The
                                  governing language of these Terms is English,
                                  and all communication related to the Service
                                  shall be conducted in English.
                                </p>

                                <h3 className="title">
                                  <span>II.</span> Definitions
                                </h3>
                                <p>For the purposes of these Terms:</p>
                                <ul>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Compliance Officer
                                    </h6>
                                    A designated employee responsible for
                                    ensuring compliance with applicable Canadian
                                    laws, including anti-money laundering (AML)
                                    and counter- terrorist financing (CTF)
                                    regulations.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Fees
                                    </h6>
                                    Charges applicable to the Service, as
                                    published on our website or notified to you
                                    prior to the transaction.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Force Majeure Event
                                    </h6>
                                    Circumstances beyond our reasonable control
                                    including natural disasters, government
                                    actions, wars, system failures, or other
                                    events that prevent us from fulfilling our
                                    obligations.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; FX Spread
                                    </h6>
                                    The margin applied to currency conversion,
                                    reflecting the difference between the rate
                                    we obtain and the rate offered to you.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Malicious Code
                                    </h6>
                                    Any software designed to disrupt or damage
                                    operations, including viruses, worms, or
                                    spyware.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Money Transfer Regulations
                                    </h6>
                                    All applicable Canadian federal and
                                    provincial laws governing money transfer,
                                    including but not limited to the Proceeds of
                                    Crime (Money Laundering) and Terrorist
                                    Financing Act (PCMLTFA).
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Prohibited Purpose
                                    </h6>
                                    Any illegal activity including fraud, money
                                    laundering, terrorist financing, or any
                                    transfer conducted without lawful authority.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Recipient
                                    </h6>
                                    The individual receiving the funds via our
                                    Service.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Reference Number
                                    </h6>
                                    A unique identifier provided for each
                                    transaction.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Sender
                                    </h6>
                                    The individual who initiates a transfer.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Transaction
                                    </h6>
                                    Any request initiated by you for a money
                                    transfer or related service.
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>III.</span> Eligibility and Access
                                </h3>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>You must be at least 18
                                    years of age and legally capable of entering
                                    into binding agreements under applicable
                                    Canadian laws.
                                  </li>
                                  <li>
                                    <span>&#8226;</span>We reserve the right to
                                    suspend or terminate access to the Service
                                    at our discretion, especially in cases of
                                    suspected fraud, identity misrepresentation,
                                    or violation of these Terms.
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>IV.</span> Formation of Contract
                                </h3>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>A transaction request
                                    submitted through our platform is considered
                                    an offer. A binding agreement is formed only
                                    upon our issuance of a transaction
                                    confirmation.
                                  </li>
                                  <li>
                                    <span>&#8226;</span>We reserve the right to
                                    decline any transaction, even after
                                    confirmation, in circumstances including but
                                    not limited to AML compliance issues or
                                    insufficient documentation.
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>V.</span> Post-Transaction Information
                                </h3>
                                <p>
                                  Upon successful processing, you will receive:
                                </p>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>Transaction reference
                                    number
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Amounts sent and
                                    received
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Applicable fees and FX
                                    rate
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Recipient bank or
                                    service details (if applicable)
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>VI.</span> Confidentiality and Privacy
                                </h3>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>Your personal data will
                                    be collected, stored, and processed in
                                    accordance with Canadian privacy laws,
                                    including the Personal Information
                                    Protection and Electronic Documents Act
                                    (PIPEDA).
                                  </li>
                                  <li>
                                    <span>&#8226;</span>We may disclose
                                    information as required by law, including to
                                    FINTRAC, law enforcement, or courts.
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Full privacy practices
                                    are outlined in our [Privacy Policy].
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>VII.</span> Limitation of Liability
                                </h3>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>We are not liable for
                                    any loss due to delays or failed transfers
                                    caused by Force Majeure or regulatory
                                    intervention.
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Except in cases of gross
                                    negligence or fraud, our liability is
                                    limited to the amount of the service fee or
                                    CAD 1,000, whichever is greater.
                                  </li>
                                  <li>
                                    <span>&#8226;</span>We are not liable for
                                    the quality or delivery of goods or services
                                    paid for using the Service.
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>VIII.</span> Your Responsibilities
                                </h3>
                                <p>By using our Service, you agree to:</p>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>Provide accurate and
                                    updated identity and transaction-related
                                    information
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Not use the Service for
                                    any Prohibited Purpose
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Only send funds from
                                    accounts held in your name
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Protect all transaction
                                    details, especially your Reference Number
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>IX.</span> Fees and Payment
                                </h3>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>Our service fees and FX
                                    spreads are clearly displayed at the time of
                                    transaction.
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Payment methods may
                                    include bank transfers, debit/credit cards,
                                    or other approved options.
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Promotions or discounts,
                                    if offered, are subject to additional terms.
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>X.</span> Cancellations and Refunds
                                </h3>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>You may cancel a
                                    transaction before funds are disbursed to
                                    the recipient.
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Refunds are subject to
                                    conditions and may take up to 7 business
                                    days.
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Administrative charges
                                    may apply to refund requests initiated by
                                    you without fault on our part.
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>XI.</span> Complaints
                                </h3>
                                <p>Complaints can be submitted by:</p>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>Email:{" "}
                                    <NavLink to="mailto:support@pelmax.solutions">
                                      support@pelmax.solutions
                                    </NavLink>
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Post: [Redeem Money Transfer
                                    Ltd., 23-1771 Robson Street, Vancouver, BC,
                                    V6G 3B7, Canada]
                                  </li>
                                </ul>
                                <p>
                                  Unresolved complaints may be escalated to the
                                  Financial Consumer Agency of Canada (FCAC).
                                </p>

                                <h3 className="title">
                                  <span>XII.</span> Regulatory Information
                                </h3>
                                <p>
                                  Redeem Money Transfer Ltd is registered with the
                                  Financial Transactions and Reports Analysis
                                  Centre of Canada (FINTRAC) as a Money Services
                                  Business (MSB), in accordance with the
                                  PCMLTFA.
                                </p>

                                <h3 className="title">
                                  <span>XIII.</span> Communications
                                </h3>
                                <p>
                                  You consent to receiving all notices and
                                  communications from us electronically. This
                                  does not affect your statutory rights under
                                  Canadian law.
                                </p>

                                <h3 className="title">
                                  <span>XIV.</span> Intellectual Property
                                </h3>
                                <p>
                                  All intellectual property rights associated
                                  with our brand, website, services, and content
                                  remain our sole property. Unauthorized use is
                                  prohibited.
                                </p>

                                <h3 className="title">
                                  <span>XV.</span> Amendments
                                </h3>
                                <p>
                                  We may update these Terms at any time.
                                  Continued use of the Service constitutes your
                                  acceptance of any changes.
                                </p>

                                <h3 className="title">
                                  <span>XVI.</span> Governing Law and
                                  Jurisdiction
                                </h3>
                                <p>
                                  These Terms shall be governed by the laws of
                                  the Province of Ontario and the federal laws
                                  of Canada. Any disputes shall be subject to
                                  the exclusive jurisdiction of the courts of
                                  Ontario.
                                </p>

                                <h3 className="title">
                                  <span>XVII.</span> Contact Details
                                </h3>
                                <p>
                                  <strong>Redeem Money Transfer Ltd</strong>
                                </p>
                                <p>Registered in Canada</p>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>Phone:
                                    <NavLink to="tel:14379861192">
                                      +1 437 986 1192
                                    </NavLink>
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Email:
                                    <NavLink to="mailto:support@pelmax.solutions">
                                      support@pelmax.solutions
                                    </NavLink>
                                  </li>
                                  {/* <li>
                                        <span>&#8226;</span>Website:
                                        <a
                                          href="http://mekskymoney.com/"
                                          target="_blank"
                                        >
                                          http://mekskymoney.com/
                                        </a>
                                      </li> */}
                                </ul>
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

export default TermsandConditions;

import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import Privacy_Policy_Seo from "../../SEO/Privacy_Policy_Seo";

function PrivacyPolicy() {
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
      <Privacy_Policy_Seo />
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
                          <h1 className="page-title">Privacy Policy</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="active">Privacy Policy</li>
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
                                  <span>1.</span> Purpose and Scope
                                </h3>
                                <p>
                                  Redeem Money Transfer Ltd., along with its
                                  subsidiaries and affiliates, is committed to
                                  protecting the personal information of its
                                  employees, contractors, clients, prospective
                                  clients, partners, and other third parties.
                                  This Privacy Policy outlines how Pelmax
                                  Solutions Ltd. collects, uses, discloses,
                                  retains, and protects personal information, in
                                  compliance with Canada’s Personal Information
                                  Protection and Electronic Documents Act
                                  (PIPEDA) and any applicable provincial privacy
                                  laws.
                                </p>
                                <p>
                                  This Policy applies to all personal
                                  information collected, whether in electronic,
                                  paper, or verbal form, in the course of our
                                  business activities. Redeem Money Transfer Ltd.
                                  ensures that personal information is handled
                                  with transparency, accountability, and respect
                                  for individual rights.
                                </p>

                                <h3 className="title">
                                  <span>2.</span> Definitions
                                </h3>
                                <ul>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Personal Information
                                    </h6>
                                    Any information about an identifiable
                                    individual. This includes but is not limited
                                    to names, contact details, identification
                                    numbers, employment details, financial
                                    records, and other data that can identify an
                                    individual, directly or indirectly.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Data Subject / Individual
                                    </h6>
                                    Any natural person whose personal
                                    information is collected or processed by
                                    Redeem Money Transfer Ltd (e.g., employees,
                                    clients, service providers).
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Sensitive Personal
                                      Information
                                    </h6>
                                    A subset of personal information that
                                    includes medical, financial, biometric, or
                                    other data considered sensitive under
                                    Canadian law. Such data requires a higher
                                    standard of care and explicit consent.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Processing
                                    </h6>
                                    Any operation performed on personal
                                    information, including collection, storage,
                                    use, disclosure, or destruction.
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>3.</span> Ten Privacy Principles (as per
                                  PIPEDA)
                                </h3>
                                <p>
                                  Redeem Money Transfer Ltd. adheres to the ten
                                  privacy principles outlined in PIPEDA:
                                </p>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Accountability
                                    </h6>
                                    We designate a Privacy Officer responsible
                                    for ensuring compliance with this Policy and
                                    applicable privacy laws.
                                  </li>
                                  <li>
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Identifying Purposes
                                    </h6>
                                    We clearly identify the purposes for which
                                    personal information is collected before or
                                    at the time of collection.
                                  </li>
                                  <li>
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Consent
                                    </h6>
                                    We obtain meaningful consent from
                                    individuals before collecting, using, or
                                    disclosing their personal information,
                                    except where otherwise permitted or required
                                    by law.
                                  </li>
                                  <li>
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Limiting Collection
                                    </h6>
                                    We collect personal information only for the
                                    identified purposes and limit collection to
                                    what is necessary.
                                  </li>
                                  <li>
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Limiting Use, Disclosure,
                                      and Retention
                                    </h6>
                                    Personal information is used and disclosed
                                    only for the purposes for which it was
                                    collected unless otherwise permitted by law.
                                    We retain information only as long as
                                    necessary for those purposes or as required
                                    by law.
                                  </li>
                                  <li>
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Accuracy
                                    </h6>
                                    We take reasonable steps to ensure that
                                    personal information is accurate, complete,
                                    and up-to-date.
                                  </li>
                                  <li>
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Safeguards
                                    </h6>
                                    We protect personal information with
                                    appropriate security measures based on the
                                    sensitivity of the data.
                                  </li>
                                  <li>
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Openness
                                    </h6>
                                    This Policy is publicly available, and
                                    individuals may contact us for additional
                                    information about our privacy practices.
                                  </li>
                                  <li>
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Individual Access
                                    </h6>
                                    Upon request, individuals will be informed
                                    of the existence, use, and disclosure of
                                    their personal information and may request
                                    corrections, subject to legal limitations.
                                  </li>
                                  <li>
                                    <h6 className="mb-2">
                                      &#10162; &nbsp; Challenging Compliance
                                    </h6>
                                    Individuals may challenge our compliance
                                    with this Policy through our designated
                                    Privacy Officer.
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>4.</span> Use of Personal Information
                                </h3>
                                <p>
                                  Redeem Money Transfer Ltd. collects personal
                                  information for purposes including but not
                                  limited to:
                                </p>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>Employment
                                    administration
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Regulatory compliance
                                    (e.g., FINTRAC obligations)
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Client onboarding and
                                    KYC procedures
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Contractual and legal
                                    obligations
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Communication and
                                    customer service
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Marketing (with consent)
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Website functionality
                                    and analytics
                                  </li>
                                </ul>

                                <h3 className="title">
                                  <span>5.</span> Cross-Border Transfers
                                </h3>
                                <p>
                                  Personal information may be stored or
                                  processed outside Canada, including in
                                  jurisdictions where data protection laws may
                                  differ. When transferring personal information
                                  across borders, we use appropriate safeguards
                                  (e.g., contractual clauses) to ensure
                                  protection equivalent to Canadian standards.
                                </p>

                                <h3 className="title">
                                  <span>6.</span> Data Security
                                </h3>
                                <p>
                                  We implement physical, administrative, and
                                  technical safeguards to protect personal
                                  information against unauthorized access,
                                  disclosure, alteration, or destruction. This
                                  includes secure storage systems, encryption,
                                  access controls, and regular monitoring.
                                </p>

                                <h3 className="title">
                                  <span>7.</span> Data Retention
                                </h3>
                                <p>
                                  Redeem Money Transfer Ltd. retains personal
                                  information only for as long as necessary to
                                  fulfill the purposes for which it was
                                  collected, or as required by law (e.g., CRA,
                                  AML/ATF regulations). When no longer needed,
                                  personal information is securely destroyed or
                                  anonymized.
                                </p>

                                <h3 className="title">
                                  <span>8.</span> Access and Correction
                                </h3>
                                <p>
                                  Individuals may request access to their
                                  personal information held by Redeem Money Transfer
                                  Ltd.. Where appropriate, we will correct or
                                  update inaccurate or incomplete data. Requests
                                  may be subject to verification and permitted
                                  exemptions under the law.
                                </p>

                                <h3 className="title">
                                  <span>9.</span> Complaints and Inquiries
                                </h3>
                                <p>
                                  If you have questions or concerns about this
                                  Policy or Redeem Money Transfer Ltd.’s data
                                  handling practices, please contact:
                                </p>
                                <ul className="info-number-list mt-2 mb-2">
                                  <li>
                                    <span>&#8226;</span>Address:&nbsp;
                                    <NavLink to="#">
                                      23-1771 Robson Street, Vancouver, BC, V6G
                                      3B7, Canada
                                    </NavLink>
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Phone:&nbsp;
                                    <NavLink to="tel:14379861192">
                                      +1 437 986 1192
                                    </NavLink>
                                  </li>
                                  <li>
                                    <span>&#8226;</span>Email:&nbsp;
                                    <NavLink to="mailto:privacy@pelmax.solutions">
                                      privacy@pelmax.solutions
                                    </NavLink>
                                  </li>
                                </ul>
                                <p>
                                  If you are not satisfied with our response,
                                  you may contact the
                                  <strong>
                                    Office of the Privacy Commissioner of Canada
                                  </strong>
                                  &nbsp; at&nbsp;
                                  <NavLink
                                    to="https://www.priv.gc.ca"
                                    target="_blank"
                                  >
                                    https://www.priv.gc.ca
                                  </NavLink>
                                  .
                                </p>

                                <h3 className="title">
                                  <span>10.</span> Website and Cookies
                                </h3>
                                <p>
                                  Our website uses cookies and tracking
                                  technologies (e.g., Google Analytics) to
                                  analyze usage and improve user experience.
                                  These tools collect information in aggregate
                                  and anonymous form. You may disable cookies
                                  through your browser settings or opt out
                                  at:&nbsp;{" "}
                                  <NavLink
                                    to="http://tools.google.com/dlpage/gaoptout"
                                    target="_blank"
                                  >
                                    http://tools.google.com/dlpage/gaoptout
                                  </NavLink>
                                </p>

                                <h3 className="title">
                                  <span>11.</span> Policy Updates
                                </h3>
                                <p>
                                  Redeem Money Transfer Ltd. may revise this Policy
                                  from time to time to reflect changes in our
                                  practices, technologies, or legal obligations.
                                  Updated versions will be posted on our
                                  website, and significant changes will be
                                  communicated where applicable.
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

export default PrivacyPolicy;

import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import Cookie_Policy_Seo from "../../SEO/Cookie_Policy_Seo";

function CookiePolicy() {
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
      <Cookie_Policy_Seo />
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
                          <h1 className="page-title">Cookie Policy</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="active">Cookie Policy</li>
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
                                <p>
                                  Redeem Money Transfer Ltd. (&quot;Pelmax&quot;,
                                  &quot;we&quot;, &quot;us&quot;, or
                                  &quot;our&quot;) is committed to protecting
                                  your privacy and ensuring transparency
                                  regarding how we collect and use data. This
                                  Cookie Policy explains how and why cookies and
                                  similar technologies are used when you visit
                                  or interact with our website or online
                                  services.
                                </p>
                                <h3 className="title">1. What Are Cookies?</h3>
                                <p>
                                  Cookies are small text files placed on your
                                  device when you visit a website. They help
                                  websites recognize your browser and store
                                  information about your preferences or past
                                  actions. Some cookies are essential for our
                                  website to function, while others help us
                                  improve your experience or deliver targeted
                                  content.
                                </p>
                                <h3 className="title">
                                  2. Types of Cookies We Use
                                </h3>
                                <p>
                                  We use the following categories of cookies:
                                </p>
                                <ul>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      <i className="fas fa-check-circle" />
                                      &nbsp; Strictly Necessary Cookies
                                    </h6>
                                    These cookies are essential for the
                                    operation of our website and enable core
                                    functionality, such as security, network
                                    management, and accessibility. They cannot
                                    be disabled through our systems.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      <i className="fas fa-check-circle" />
                                      &nbsp; Performance and Analytics Cookies
                                    </h6>
                                    These cookies help us understand how
                                    visitors interact with our website by
                                    collecting information such as the number of
                                    visitors, pages visited, and traffic
                                    sources. We use this data to improve website
                                    performance. These cookies are typically
                                    anonymous.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      <i className="fas fa-check-circle" />
                                      &nbsp; Functionality Cookies
                                    </h6>
                                    These cookies remember your preferences
                                    (e.g., language or region) to enhance your
                                    experience. They may be set by us or by
                                    third-party providers whose services we use.
                                  </li>
                                  <li className="mb-3">
                                    <h6 className="mb-2">
                                      <i className="fas fa-check-circle" />
                                      &nbsp; Targeting and Advertising Cookies
                                    </h6>
                                    These cookies may be set through our site by
                                    advertising partners. They may be used to
                                    build a profile of your interests and show
                                    you relevant advertisements on other
                                    websites.
                                  </li>
                                </ul>

                                <h3 className="title">
                                  3. Third-Party Cookies
                                </h3>
                                <p>
                                  We may allow third-party service providers,
                                  such as Google Analytics, to place cookies on
                                  your device to collect data on your usage of
                                  our services. These third parties are
                                  responsible for how they use your information
                                  and are subject to their own privacy policies.
                                </p>

                                 <h3 className="title">4. How to Manage or Disable Cookies</h3>
                                <p>
                                  You can manage or disable cookies at any time
                                  by adjusting your browser settings. Most
                                  browsers allow you to refuse or delete
                                  cookies. However, please note that disabling
                                  some cookies may impact the functionality or
                                  performance of our website.
                                </p>
                                <p>
                                  You can also opt out of certain cookies using
                                  industry opt-out mechanisms, such as:
                                </p>
                                <ul className="check-list style-one">
                                  <li>
                                    <i className="fas fa-check-circle" />
                                    Google Analytics:{" "}
                                    <NavLink
                                      to="https://tools.google.com/dlpage/gaoptout"
                                      target="_blank"
                                    >
                                      https://tools.google.com/dlpage/gaoptout
                                    </NavLink>
                                  </li>
                                  <li>
                                    <i className="fas fa-check-circle" />
                                    Digital Advertising Alliance:{" "}
                                    <NavLink
                                      to="https://optout.aboutads.info/"
                                      target="_blank"
                                    >
                                      https://optout.aboutads.info/
                                    </NavLink>
                                  </li>
                                </ul>

                                 <h3 className="title">5. Consent</h3>
                                <p>
                                  By continuing to use our website, you consent
                                  to the placement of cookies on your device
                                  unless you have disabled them using your
                                  browser settings.
                                </p>

                                 <h3 className="title">6. Updates to This Policy</h3>
                                <p>
                                  We may update this Cookie Policy from time to
                                  time to reflect changes in our technology,
                                  legal requirements, or our business
                                  operations. Any updates will be posted on this
                                  page with a revised &quot;Last Updated&quot;
                                  date.
                                </p>

                                <h3 className="title">7. Contact Us</h3>
                                <p>
                                  If you have any questions or concerns about
                                  this Cookie Policy, please contact our Data
                                  Privacy Officer at:
                                </p>
                                <ul>
                                    <li>
                                        Redeem Money Transfer Ltd.
                                    </li>
                                    <li>
                                        Email: <NavLink to="mailto:support@pelmax.solutions">support@pelmax.solutions</NavLink>
                                    </li>
                                    <li>
                                        Phone: <NavLink to="tel:14379861192">+1 437 986 1192</NavLink>
                                    </li>
                                    <li>
                                        Address: 23-1771 Robson Street, Vancouver, BC, V6G 3B7, Canada
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

export default CookiePolicy;

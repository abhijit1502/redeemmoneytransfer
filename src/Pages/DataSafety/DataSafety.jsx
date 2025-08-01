import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import "../../css/steps.css";
import CookieConsent from "../../Components/CookieConsent";
import DataSafety_Seo from '../../SEO/DataSafety_Seo';

function DataSafety() {
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
      <DataSafety_Seo />
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
                          <h1 className="page-title">Data Safety</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/help">Help</NavLink>
                            </li>
                            <li className="active">Data Safety</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End Page Hero Section  ======*/}

                {/*<<Help Section Start>>*/}
                <section className="pb-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <p className='text-center'>If you have completed your registration with Redeem Money Transfer but
                                    haven’t initiated any transaction, then you can send us a request to delete your
                                    account with us. Deleting your account will remove your data we have stored with us.
                                </p>
                                <div className="form-card">
                                    <div className="row text-center justify-content-center" data-aos-delay={300}>
                                        <h4 className="mb-2 mt-3">Temporary Account Deletion</h4>
                                        <p className="mb-5">
                                            Please follow the below steps to delete your account on a temporary basis.
                                        </p>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-6 col-lg-6" data-aos-delay={300}>
                                            <div className="card cardcss">
                                                <img className="card-img-top" src="assets/images/data-safety/1.png"
                                                    alt="Data Safety" />
                                                <div className="card-body">
                                                    <p className="card-text mb-0">
                                                        <strong>Step 1:</strong> Go to the dashboard and open
                                                        the ‘Settings’ tab. Click on the ‘Delete My Account’ option.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6" data-aos-delay={400}>
                                            <div className="card cardcss">
                                                <img className="card-img-top" src="assets/images/data-safety/2.png"
                                                    alt="Data Safety" />
                                                <div className="card-body">
                                                    <p className="card-text mb-4">
                                                        <strong>Step 2:</strong> Click the ‘Yes’ option to
                                                        temporarily delete your account.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6" data-aos-delay={600}>
                                            <div className="card cardcss">
                                                <img className="card-img-top" src="assets/images/data-safety/3.png"
                                                    alt="Data Safety" />
                                                <div className="card-body">
                                                    <p className="card-text mb-0">
                                                        <strong>Step 3:</strong> To proceed with your request, please
                                                        click on
                                                        the ‘Yes’ option. We will delete all your data
                                                        records stored in our system. You can cancel the request by
                                                        clicking on
                                                        the ‘No’ option.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row text-center justify-content-center" data-aos-delay={300}>
                                        <h4 className="mb-2 mt-3">Permanent Account Deletion</h4>
                                        <p className="mb-5">
                                            Please follow the below steps to delete your account permanently.
                                        </p>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-6 col-lg-6" data-aos-delay={600}>
                                            <div className="card cardcss">
                                                <img className="card-img-top" src="assets/images/data-safety/1.png"
                                                    alt="Data Safety?" />
                                                <div className="card-body">
                                                    <p className="card-text mb-0">
                                                        <strong>Step 1:</strong> Go to the dashboard and open
                                                        the ‘Settings’ tab. Click on the ‘Delete My Account’ option.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6" data-aos-delay={700}>
                                            <div className="card cardcss">
                                                <img className="card-img-top" src="assets/images/data-safety/2.png"
                                                    alt="Data Safety?" />
                                                <div className="card-body">
                                                    <p className="card-text mb-0">
                                                        <strong>Step 2:</strong> Click on the ‘No. Delete my account
                                                        permanently’ option to delete your account
                                                        permanently.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6" data-aos-delay={800}>
                                            <div className="card cardcss">
                                                <img className="card-img-top" src="assets/images/data-safety/4.png"
                                                    alt="Data Safety?" />
                                                <div className="card-body">
                                                    <p className="card-text mb-4">
                                                        <strong>Step 3:</strong> Your request for account
                                                        deletion will be submitted. Our team will reach out to you
                                                        shortly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6" data-aos-delay={900}>
                                            <div className="card cardcss">
                                                <img className="card-img-top" src="assets/images/data-safety/5.png"
                                                    alt="Data Safety?" />
                                                <div className="card-body">
                                                    <p className="card-text mb-0">
                                                        <strong>Step 4:</strong> To proceed with your request, please
                                                        click on
                                                        the ‘Yes’ option. We will delete all your data
                                                        records stored in our system.&nbsp;You can cancel the request by
                                                        clicking on the ‘No’ option.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12" data-aos-delay={900}>
                                            <p>
                                                If you have completed your registration with Redeem Money Transfer and have
                                                processed your
                                                transaction, you can also send us a request to delete your account.
                                            </p>
                                            <p>
                                                But as per the Regulation 40 of The MLR 2017, we are liable:
                                            </p>
                                            <ul className="ul2" style={{listStyle:"disc"}}>
                                                <li>
                                                    To store your documents and information we have collected from you
                                                    as a
                                                    part of the
                                                    customer due diligence (CDD) process.
                                                </li>
                                                <li>
                                                    To store any supporting records including original documents or
                                                    copies you
                                                    have provided to
                                                    us as a part of CDD.
                                                </li>
                                            </ul>
                                            <p className='mb-4'>
                                                We will store your data for 5 years beginning from when your
                                                transactions have
                                                been
                                                completed for which you have provided us your data to process the
                                                transaction.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4 className="mb-3 mt-5">We will not delete your account and data stored
                                                with us in the below</h4>
                                            <p>
                                                Please follow the below steps to delete your account permanently.
                                            </p>
                                            <p>
                                                The period of 5 years will not be applicable in the following cases.
                                            </p>
                                            <p>
                                                As per Regulation 40 (5), we will store your data if,
                                            </p>
                                            <ol className="ul3" style={{listStyle:"decimal"}}>
                                                <li>
                                                    We are liable to do so by or under any enactment,
                                                </li>
                                                <li>
                                                    For any court proceedings;
                                                </li>
                                                <li>
                                                    You have given consent to retain your data provided to us; or
                                                </li>
                                                <li>
                                                    If Redeem Money Transfer has reasons to believe that your data records need
                                                    to
                                                    be maintained
                                                    with us for legal proceedings.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
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

export default DataSafety
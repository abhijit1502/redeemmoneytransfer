import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import "../../css/steps.css";
import Onboarding_FAQ_Seo from "../../SEO/Onboarding_FAQ_Seo";

function OnboardingFAQ() {
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
      <Onboarding_FAQ_Seo />
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
                                <span className="sn">01.</span> Why do you need
                                my documents while registration?
                              </h6>
                            </div>
                            <div
                              id="collapse1"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionOne"
                            >
                              <div className="accordion-content">
                                  <p className="faq-text mb-2">
                                    Does your screen look something like this?
                                  </p>
                                  <div className="row">
                                    <div className="col-6 col-md-4 col-lg-2">
                                      <div className="cardcss">
                                        <img
                                          className="card-img-top"
                                          src="assets/images/photo/blankscreen1.png"
                                          alt="I'm getting a black blank screen. What should I do?"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                      <div className="cardcss">
                                        <img
                                          className="card-img-top"
                                          src="assets/images/photo/blankscreen2.png"
                                          alt="I'm getting a black blank screen. What should I do?"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <p className="faq-text mb-2 mt-1">
                                    This means the CAMERA access to your default
                                    BROWSER is denied. Please follow the steps
                                    below to Allow camera access.
                                  </p>
                                  <ul
                                    className="nav nav-pills nav-justified flex-column flex-sm-row style1"
                                    id="pills-tab"
                                    role="tablist"
                                  >
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <a
                                        className="nav-link active"
                                        id="pills-cloud-tab"
                                        data-bs-toggle="pill"
                                        href="#iOS"
                                        role="tab"
                                        aria-controls="pills-cloud"
                                        aria-selected="true"
                                      >
                                        <div className="text-center py-2">
                                          <h6 className="mb-0">iOS</h6>
                                        </div>
                                      </a>
                                      {/*end nav link*/}
                                    </li>
                                    {/*end nav item*/}
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <a
                                        className="nav-link"
                                        id="pills-smart-tab"
                                        data-bs-toggle="pill"
                                        href="#android"
                                        role="tab"
                                        aria-controls="pills-smart"
                                        aria-selected="false"
                                        tabIndex={-1}
                                      >
                                        <div className="text-center py-2">
                                          <h6 className="mb-0">Android</h6>
                                        </div>
                                      </a>
                                      {/*end nav link*/}
                                    </li>
                                    {/*end nav item*/}
                                  </ul>
                                  {/*end nav pills*/}
                                  <div className="row">
                                    <div className="col-12 mt-1 pt-1">
                                      <div
                                        className="tab-content"
                                        id="pills-tabContent"
                                      >
                                        <div
                                          className="tab-pane fade show active"
                                          id="iOS"
                                          role="tabpanel"
                                          aria-labelledby="pills-cloud-tab"
                                        >
                                          <div className="row align-items-center">
                                            <div className="col-md-12 mt-1 mt-sm-0 pt-0 pt-sm-0">
                                              <div className="full mb-1">
                                                <div
                                                  className="row wow fadeInUp animated animated animated"
                                                  data-wow-delay="0.4s"
                                                  style={{
                                                    visibility: "visible",
                                                    animationDelay: "0.4s",
                                                    animationName: "fadeInUp",
                                                  }}
                                                >
                                                  <div className="col-12 col-md-12 col-xs-12">
                                                    <p className="faq-text mb-2">
                                                      i. Go to Settings → Safari
                                                    </p>
                                                    <div className="row">
                                                      <div className="col-12 col-md-5 col-lg-4">
                                                        <div className="cardcss">
                                                          <img
                                                            className="card-img-top"
                                                            src="assets/images/photo/apple1.png"
                                                            alt="Step1"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <p className="faq-text mb-2 mt-2">
                                                      ii. Scroll to find
                                                      "Camera" under SETTINGS
                                                      FOR WEBSITES section
                                                    </p>
                                                    <div className="row">
                                                      <div className="col-12 col-md-5 col-lg-4">
                                                        <div className="cardcss">
                                                          <img
                                                            className="card-img-top"
                                                            src="assets/images/photo/apple2.png"
                                                            alt="Step2"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <p className="faq-text mb-2 mt-2">
                                                      iii. Tap on Camera option
                                                      and you will be navigated
                                                      to CAMERA ACCESS ON ALL
                                                      WEBSITES. Tap on "Allow"
                                                      option.
                                                    </p>
                                                    <div className="row">
                                                      <div className="col-12 col-md-5 col-lg-4">
                                                        <div className="cardcss">
                                                          <img
                                                            className="card-img-top"
                                                            src="assets/images/photo/apple3.png"
                                                            alt="Step1"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            {/*end col*/}
                                          </div>
                                          {/*end row*/}
                                        </div>
                                        {/*end teb pane*/}
                                        <div
                                          className="tab-pane fade"
                                          id="android"
                                          role="tabpanel"
                                          aria-labelledby="pills-smart-tab"
                                        >
                                          <div className="row align-items-center">
                                            <div className="col-md-12 mt-1 mt-sm-0 pt-0 pt-sm-0">
                                              <p className="faq-text mb-2">
                                                i. Go to Settings and tap on
                                                Apps
                                              </p>
                                              <div className="row">
                                                <div className="col-12 col-md-5 col-lg-4">
                                                  <div className="cardcss">
                                                    <img
                                                      className="card-img-top"
                                                      src="assets/images/photo/ad1.png"
                                                      alt="Step1"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <p className="faq-text mb-2 mt-2">
                                                ii. Scroll to find your default
                                                browser app. Mostly it is Google
                                                Chrome for Android device,
                                                unless explicitly changed.
                                              </p>
                                              <div className="row">
                                                <div className="col-12 col-md-5 col-lg-4">
                                                  <div className="cardcss">
                                                    <img
                                                      className="card-img-top"
                                                      src="assets/images/photo/ad2.png"
                                                      alt="Step2"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <p className="faq-text mb-2 mt-2">
                                                iii. Chrome → Permissions will
                                                show you what is enabled. Camera
                                                permission need to be enabled
                                                here.{" "}
                                              </p>
                                              <div className="row">
                                                <div className="col-12 col-md-5 col-lg-4">
                                                  <div className="cardcss">
                                                    <img
                                                      className="card-img-top"
                                                      src="assets/images/photo/ad3.png"
                                                      alt="Step3"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <p className="faq-text mb-2 mt-2">
                                                iv. App permissions will show
                                                what is allowed and what's
                                                denied.
                                              </p>
                                              <div className="row">
                                                <div className="col-12 col-md-5 col-lg-4">
                                                  <div className="cardcss">
                                                    <img
                                                      className="card-img-top"
                                                      src="assets/images/photo/ad4.png"
                                                      alt="Step4"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <p className="faq-text mb-2 mt-2">
                                                v. Tap on Camera to Allow camera
                                                permission to Chrome.
                                              </p>
                                              <div className="row">
                                                <div className="col-12 col-md-5 col-lg-4">
                                                  <div className="cardcss">
                                                    <img
                                                      className="card-img-top"
                                                      src="assets/images/photo/ad5.png"
                                                      alt="Step5"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            {/*end col*/}
                                          </div>
                                          {/*end row*/}
                                        </div>
                                        {/*end teb pane*/}
                                      </div>
                                      {/*end tab content*/}
                                    </div>
                                    {/*end col*/}
                                  </div>
                                  {/*end row*/}
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
                                <span className="sn">02.</span>How can I cancel my transfer?
                              </h6>
                            </div>
                            <div
                              id="collapse2"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionOne"
                            >
                              <div className="accordion-content">
                                <p className="faq-text mb-2">
                                    Does your screen look something like this?
                                  </p>
                                  <div className="row">
                                    <div className="col-6 col-md-5 col-lg-4">
                                      <div className="cardcss">
                                        <img
                                          className="card-img-top"
                                          src="assets/images/photo/ID Upload failure.png"
                                          alt="Wrong ID document or something went wrong."
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <p className="faq-text mt-2">
                                    This means the ID you uploaded is not
                                    supported or was having glare or blur while
                                    uploading. This may have resulted us in not
                                    been able to capture ID details. Please give
                                    it another try or contact our support team.
                                  </p>
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
export default OnboardingFAQ;

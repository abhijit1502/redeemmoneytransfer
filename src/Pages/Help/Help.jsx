import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import Help_Seo from "../../SEO/Help_Seo";

function Help() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (window.initThemeScripts) window.initThemeScripts();
      if (window.initGsapScripts) window.initGsapScripts();
    }
  }, [isLoading]);

  return (
    <>
      <Help_Seo />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          {/* ==================== Breadcrumb Start Here ==================== */}
          <div className="bg-neutral-20 position-relative z-1 py-120 pb-5">
            <img
              src="assets/images/shape/my-profile-shape-1.png"
              alt="Image"
              className="shape__one position-absolute z-n1 tw-block-end-0 tw-start-0"
            />
            <img
              src="assets/images/shape/my-profile-shape-2.png"
              alt="Image"
              className="shape__two position-absolute z-n1 tw-block-end-0 tw-end-0"
            />
            <div className="text-center">
              <h1
                className="fw-normal text-dark-600 text-uppercase cursor-big"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                Help
              </h1>
              <div
                className="d-flex align-items-center tw-gap-105 justify-content-center"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <NavLink
                  to="/"
                  className="fw-semibold tw-text-base text-dark-600 text-uppercase"
                >
                  HOME
                </NavLink>
                <span className="tw-text-6 text-main-600">
                  <i className="ph ph-caret-double-right" />
                </span>
                <span className="fw-semibold tw-text-base text-main-600 text-uppercase">
                  Help
                </span>
              </div>
            </div>
          </div>
          {/* ==================== Breadcrumb End Here ==================== */}
          {/* ==================== Help Start Here ==================== */}
          <section className="help-area py-80">
            <div className="container">
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-lg-7">
                  <div className="title-area mb-2 text-center text-lg-start">
                    <p className="">For Documents</p>
                  </div>
                </div>
              </div>
              <div>
                <NavLink className="max-w-246-px w-100" to="/onboarding">
                  <div className="group group-item position-relative">
                    <div className="our-services-slider-card tw-px-8 tw-py-8 tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend">
                      <span className="tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto">
                        <span className="tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500">
                          <img
                            src="assets/images/photo/kyc.png"
                            alt="KYC Upload"
                            className="group-hover-item-text-invert tw-duration-500"
                          />
                        </span>
                      </span>
                      <span className="fw-semibold tw-text-4 text-dark-600">
                        KYC Upload
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <hr />
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-lg-7">
                  <div className="title-area mb-2 text-center text-lg-start">
                    <p className="">For Safety</p>
                  </div>
                </div>
              </div>
              <div>
                <NavLink className="max-w-246-px w-100" to="/data-safety">
                  <div className="group group-item position-relative">
                    <div className="our-services-slider-card tw-px-8 tw-py-8 tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend">
                      <span className="tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto">
                        <span className="tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500">
                          <img
                            src="assets/images/photo/data-safety.png"
                            alt="Data Safety"
                            className="group-hover-item-text-invert tw-duration-500"
                          />
                        </span>
                      </span>
                      <span className="fw-semibold tw-text-4 text-dark-600">
                        Data Safety
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <hr />
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-lg-7">
                  <div className="title-area mb-2 text-center text-lg-start">
                    <p className="">For FAQ's</p>
                  </div>
                </div>
              </div>
              <div>
                <NavLink className="max-w-246-px w-100" to="#">
                  <div className="group group-item position-relative">
                    <div className="our-services-slider-card tw-px-8 tw-py-8 tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend">
                      <span className="tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto">
                        <span className="tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500">
                          <img
                            src="assets/images/photo/onbordingfaq.png"
                            alt="Onboarding FAQs"
                            className="group-hover-item-text-invert tw-duration-500"
                          />
                        </span>
                      </span>
                      <span className="fw-semibold tw-text-4 text-dark-600">
                        Onboarding FAQs
                      </span>
                    </div>
                  </div>
                </NavLink>&ensp;

                <NavLink className="max-w-246-px w-100" to="#">
                  <div className="group group-item position-relative">
                    <div className="our-services-slider-card tw-px-8 tw-py-8 tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend">
                      <span className="tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto">
                        <span className="tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500">
                          <img
                            src="assets/images/photo/faq.png"
                            alt="General FAQs"
                            className="group-hover-item-text-invert tw-duration-500"
                          />
                        </span>
                      </span>
                      <span className="fw-semibold tw-text-4 text-dark-600">
                        General FAQs
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <hr />
              <div className="row align-items-center justify-content-center justify-content-lg-between">
                <div className="col-lg-7">
                  <div className="title-area mb-2 text-center text-lg-start">
                    <p className="">For Any Help</p>
                  </div>
                </div>
              </div>
               <div>
                <NavLink className="max-w-246-px w-100" to="https://api.whatsapp.com/send?phone=41779873231&text=Hello There, I would like to enquire about money transfer." target="_blank">
                  <div className="group group-item position-relative">
                    <div className="our-services-slider-card tw-px-8 tw-py-8 tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend">
                      <span className="tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto">
                        <span className="tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500">
                          <img
                            src="assets/images/photo/whatsapp.png"
                            alt="Whatsapp"
                            className="group-hover-item-text-invert tw-duration-500"
                          />
                        </span>
                      </span>
                      <span className="fw-semibold tw-text-4 text-dark-600">
                        Whatsapp
                      </span>
                    </div>
                  </div>
                </NavLink>&ensp;

                <NavLink className="max-w-246-px w-100" to="tel:41779873231">
                  <div className="group group-item position-relative">
                    <div className="our-services-slider-card tw-px-8 tw-py-8 tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend">
                      <span className="tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto">
                        <span className="tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500">
                          <img
                            src="assets/images/photo/phone.png"
                            alt="Phone"
                            className="group-hover-item-text-invert tw-duration-500"
                          />
                        </span>
                      </span>
                      <span className="fw-semibold tw-text-4 text-dark-600">
                        Phone
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </section>
          {/* ==================== Help End Here ==================== */}

          <Footer />
        </>
      )}
    </>
  );
}

export default Help;

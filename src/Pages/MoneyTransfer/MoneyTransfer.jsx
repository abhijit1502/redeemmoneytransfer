import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import Calculator from "../../Components/Calculator";
import Testimonial from "./Testimonial";
import Seo from '../../Components/Seo';
import { moneyTransferSeo } from "../../seo-configs";

function MoneyTransfer() {
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // This effect runs when `isLoading` becomes false.
  useEffect(() => {
    if (!isLoading) {
      // Call the initialization function from main.js
      if (window.initThemeScripts) {
        window.initThemeScripts();
      }

      // Call the initialization function from custom-gsap.js
      if (window.initGsapScripts) {
        window.initGsapScripts();
      }
    }
  }, [isLoading]); // This dependency array is crucial.

  return (
    <>
      <Seo {...moneyTransferSeo} />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          {/* Breadcrumb */}
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
                Money Transfer
              </h1>
              <div
                className="d-flex align-items-center tw-gap-105 justify-content-center"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <NavLink
                  to="/"
                  className="fw-semibold tw-text-base text-dark-500 text-uppercase"
                >
                  Home
                </NavLink>
                <span className="tw-text-6 text-main-600">
                  <i className="ph ph-caret-double-right" />
                </span>
                <span className="fw-semibold tw-text-base text-main-600 text-uppercase">
                  Money Transfer
                </span>
              </div>
            </div>
          </div>

          {/* ======================= Our Feature Section Start ================ */}
          <section className="py-80 z-1 overflow-hidden">
            <div className="container">
  <div className="d-flex align-items-center tw-gap-3 justify-content-between flex-wrap">
                <div className="tw-mb-80-px mx-auto text-center align-items-center justify-content-center">
                  <div
                    className="d-flex justify-content-center align-items-center tw-gap-1 tw-mb-3 d-none"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <img src="assets/images/icon/star-icon2.png" alt="Image" />
                    <h5 className="fw-normal text-primary-500">
                      Send Money
                    </h5>
                  </div>
                  <h2
                    className="fw-bold tw-mb-3 cursor-big"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    Super Fast & Secure Money Transfer Services
                  </h2>
                  <p
                    className="tw-text-lg text-dark-500 fw-normal"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    Reliable, secure, fast, global, convenient, trusted,
                    seamless, innovative.
                  </p>
                </div>
              </div>
              <div className="row gy-4 align-items-center">
                <div className="col-lg-7">
                  <div >
                    <div
                      className="tw-mb-7"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      <span className="tw-w-72px tw-h-72-px border-base-two-600 d-flex align-items-center justify-content-center rounded-3 tw-mb-6">
                        <span className="w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center">
                          <img
                            src="assets/images/icon/globe-transfer.png"
                            alt="Global Money Transfers"
                          />
                        </span>
                      </span>
                      <h5 className="fw-normal text-dark-600 tw-mb-2 cursor-big">
                        Global Money Transfers
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500">
                        Send and receive payments worldwide with ease, speed,
                        and top-tier security.
                      </p>
                    </div>
                    <div
                      className="tw-mb-7"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <span className="tw-w-72px tw-h-72-px border-base-two-600 d-flex align-items-center justify-content-center rounded-3 tw-mb-6">
                        <span className="w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center">
                          <img
                            src="assets/images/icon/encrypted.png"
                            alt="Robust Data Protection"
                          />
                        </span>
                      </span>
                      <h5 className="fw-normal text-dark-600 tw-mb-2 cursor-big">
                        Robust Data Protection
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500">
                        Your data is encrypted, ensuring secure transactions and
                        absolute privacy protection.
                      </p>
                    </div>
                    <div className data-aos="fade-up" data-aos-duration={1200}>
                      <span className="tw-w-72px tw-h-72-px border-base-two-600 d-flex align-items-center justify-content-center rounded-3 tw-mb-6">
                        <span className="w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center">
                          <img
                            src="assets/images/icon/24-7.png"
                            alt="24/7 Service"
                          />
                        </span>
                      </span>
                      <h5 className="fw-normal text-dark-600 tw-mb-2 cursor-big">
                        24/7 Service
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500">
                       Secure money transfer services are available 24/7 with round-the-clock assistance and real-time transaction tracking for peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <Calculator/>
                </div>
              </div>
            </div>
          </section>
          {/* ======================= Our Feature Section End ================ */}

          {/* About Us Section */}
          <section className="py-80 z-1 overflow-hidden d-none">
            <div className="container">
              <div className="row gy-4 align-items-center">
                <div className="col-lg-6">
                  <div data-aos="zoom-in" data-aos-duration={1500}>
                    <img
                      className="rounded-2"
                      src="assets/images/thumbs/money-transfer-at-your-fingertips.jpg"
                      alt="Money Transfer at your Fingertips"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <h2
                      className="fw-bold cursor-big tw-mb-5"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      Money Transfer at your Fingertips
                    </h2>
                    <p
                      className="fw-normal text-dark-500 tw-text-lg tw-mb-8"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Experience hassle-free international transactions with
                      Redeem. Securely send money online anytime, anywhere with
                      instant transfers, competitive rates, and real-time
                      tracking for complete peace of mind.
                    </p>
                    <div className="tw-mb-7">
                      {[
                        "Easy sign up",
                        "Choose your payment method",
                        "End-to-End Data Encryption",
                        "Live Exchange Rate Updates",
                        "Transaction Success Confirmation",
                        "Instant Security Alerts",
                      ].map((text, idx) => (
                        <div
                          key={idx}
                          className="d-flex align-items-center tw-gap-2 tw-mb-4"
                          data-aos="fade-up"
                          data-aos-duration={1100 + idx * 100}
                        >
                          <span className="tw-text-xl text-dark-500">
                            <i className="ph ph-check-circle" />
                          </span>
                          <span className="text-dark-500 fw-semibold tw-text-lg">
                            {text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



           {/* =================== why choose us section start ======================= */}
          <section className="py-80">
            <div className="container">
              <div className="d-flex align-items-center tw-gap-3 justify-content-between flex-wrap">
                <div className="tw-mb-80-px mx-auto text-center align-items-center justify-content-center">
                  <div
                    className="d-flex justify-content-center align-items-center tw-gap-1 tw-mb-3 d-none"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <img src="assets/images/icon/star-icon2.png" alt="Image" />
                    <h5 className="fw-normal text-primary-500">
                      Send Money
                    </h5>
                  </div>
                  <h2
                    className="fw-bold tw-mb-3 cursor-big"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                   Money Transfer at your Fingertips
                  </h2>
                  <p
                    className="tw-text-lg text-dark-500 fw-normal"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    Experience hassle-free international transactions with Redeem. Securely send money online anytime, anywhere with instant transfers, competitive rates, and real-time tracking for complete peace of mind.
                  </p>
                </div>
              </div>
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                       <img src="assets/images/icon/Easy-Sign-Up.png" alt="Easy Sign Up" />
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Easy Sign Up
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Get started in minutes with a quick, hassle-free process.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <img src="assets/images/icon/Choose-Your-Payment-Method.png" alt="Choose Your Payment Method" />
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Choose Your Payment Method
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Multiple secure payment options at your fingertips.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <img src="assets/images/icon/End-to-End-Data-Encryption.png" alt="End-to-End Data Encryption" />
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        End-to-End Data Encryption
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Maximum protection for every transaction you make.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                     >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <img src="assets/images/icon/Live-Exchange-Rate-Updates.png" alt="Live Exchange Rate Updates" />
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Live Exchange Rate Updates
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Always enjoy the most accurate and current rates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <img src="assets/images/icon/Transaction-Success-Confirmation.png" alt="Transaction Success Confirmation" />
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Transaction Success Confirmation
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Instant confirmation when your transfer is complete.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <img src="assets/images/icon/Instant-Security-Alerts.png" alt="Instant Security Alerts" />
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Instant Security Alerts
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Stay protected with real-time security notifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* =================== why choose us section end ======================= */}

          {/* ==================== Testimonials Two Section Start ================ */}
          <Testimonial />
          {/* ==================== Testimonials Two Section end ================ */}

          <Footer />
        </>
      )}
    </>
  );
}

export default MoneyTransfer;

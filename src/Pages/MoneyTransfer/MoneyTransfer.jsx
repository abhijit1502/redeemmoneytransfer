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
              <div className="d-flex align-items-center tw-gap-3 justify-content-between flex-wrap tw-mb-80-px">
                <div className="max-w-560">
                  <div
                    className="d-flex align-items-center tw-gap-1 tw-mb-3"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <img src="assets/images/icon/star-icon2.png" alt="Image" />
                    <h5 className="text-primary-500 fw-normal">
                      {" "}
                     Send Money
                    </h5>
                  </div>
                  <h2
                    className="fw-bold text-dark-600 h1 cursor-big"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    Super Fast & Secure Money Transfer Services
                  </h2>
                </div>
                <div className="max-w-400">
                  <p
                    className="fw-normal tw-text-lg text-dark-500"
                    data-aos="fade-up"
                    data-aos-duration={1200}
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
          <section className="py-80 z-1 overflow-hidden">
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

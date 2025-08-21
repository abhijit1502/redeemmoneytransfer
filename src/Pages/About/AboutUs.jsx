import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import Seo from '../../Components/Seo';
import { aboutSeo } from '../../seo-configs';
import Testimonial from "./Testimonial";

function AboutUs() {
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
      <Seo {...aboutSeo} />
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
                About Us
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
                  Home
                </NavLink>
                <span className="tw-text-6 text-main-600">
                  <i className="ph ph-caret-double-right" />
                </span>
                <span className="fw-semibold tw-text-base text-main-600 text-uppercase">
                  About Us
                </span>
              </div>
            </div>
          </div>
          {/* ==================== Breadcrumb End Here ==================== */}

          {/* ====================== About Us Section Start ===================== */}
          <section className="py-80 z-1 overflow-hidden">
            <div className="container">
                <div className="d-flex align-items-center tw-gap-3 justify-content-between flex-wrap">
                <div className="mb-5 mx-auto text-center align-items-center justify-content-center">
                  <div
                    className="d-flex justify-content-center align-items-center tw-gap-1 tw-mb-3 d-none"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <img src="assets/images/icon/star-icon2.png" alt="Image" />
                    <h5 className="fw-normal text-primary-500">
                      About Us
                    </h5>
                  </div>
                  <h2
                    className="fw-bold tw-mb-3 cursor-big"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    What is Redeem LLC
                  </h2>
                  <p
                    className="tw-text-lg text-dark-500 fw-normal d-none"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    Our platform is designed to make cross-border payments and
                    remittances faster, safer, and more affordable than
                    traditional banks.
                  </p>
                </div>
              </div>
              <div className="row gy-4 align-items-center">
                {/* <div className="col-lg-6">
                  <div data-aos="zoom-in" data-aos-duration={1500}>
                    <img
                      className="rounded-2"
                      src="assets/images/thumbs/aboutus.jpg"
                      alt="What is Redeem LLC"
                    />
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className>
                    <p
                      className="fw-normal text-dark-500 tw-text-lg tw-mb-8" 
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Redeem GmbH is a company registered under the laws of Switzerland with company UID identification number CHE-358.466.446 trading with the names <strong>Redeem GmbH / Redeem LLC / Redeem Transfer / RMT / RT</strong>.
                    </p>
                     <p
                      className="fw-normal text-dark-500 tw-text-lg tw-mb-8"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      As a member of PolyReg (<NavLink to="https://www.polyreg.ch/" target="_blank">https://www.polyreg.ch/</NavLink> ), a Self-Regulatory Organization (SRO) officially recognized and approved by Switzerland's Federal Financial Market Supervisory Authority (FINMA), we have been licensed to operate in Switzerland as a Financial Intermediary (FI).
                    </p>
                    <p
                      className="fw-normal text-dark-500 tw-text-lg"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      By using the Website, App, service, you confirm that you have understood and accept Our Terms and Conditions (T&C) including all legal information and terms of use as presented here. If you do not accept any part of this T&C, please refrain from using our Website, App, or services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ====================== About Us Section End ===================== */}

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
                      Why Choose Us?
                    </h5>
                  </div>
                  <h2
                    className="fw-bold tw-mb-3 cursor-big"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    Why Choose Redeem for International Transfers
                  </h2>
                  <p
                    className="tw-text-lg text-dark-500 fw-normal"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    Our platform is designed to make cross-border payments and
                    remittances faster, safer, and more affordable than
                    traditional banks.
                  </p>
                </div>
              </div>
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="bg-neutral-10 tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                      style={{ backgroundColor: "#3b82f61a" }}
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#3B82F6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-send-horizontal"
                        >
                          <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"></path>
                          <path d="M6 12h16"></path>
                        </svg>
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Fast Global Transfers
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Send money to over 180 countries with delivery in as
                        little as minutes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="bg-neutral-10 tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                      style={{ backgroundColor: "#a855f71a" }}
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#3B82F6"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-walle"
                        >
                          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                        </svg>
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Multi-Currency Wallet
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Hold and manage multiple currencies in one place with
                        our digital wallet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="bg-neutral-10 tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                      style={{ backgroundColor: "#6366f11a" }}
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#6366F1"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-zap"
                        >
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Instant Notifications
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Real-time tracking and alerts for all your international
                        money transfers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="bg-neutral-10 tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                      style={{ backgroundColor: "#f59e0b1a" }}
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#F59E0B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-arrow-left-right"
                        >
                          <path d="M8 3 4 7l4 4"></path>
                          <path d="M4 7h16"></path>
                          <path d="m16 21 4-4-4-4"></path>
                          <path d="M20 17H4"></path>
                        </svg>
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Competitive Exchange Rates
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Get market-leading exchange rates with transparent
                        pricing and no hidden fees.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="bg-neutral-10 tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                      style={{ backgroundColor: "#22c55e1a" }}
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#22C55E"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-shield"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Secure Transactions
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Bank-level encryption and security protocols to protect
                        your money and data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="bg-neutral-10 tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <span
                      className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto"
                      style={{ backgroundColor: "#ef44441a" }}
                    >
                      <span className="tw-w-15 tw-h-15 tw-rounded-md  d-flex align-items-center justify-content-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#EF4444"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-globe"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                      </span>
                    </span>
                    <div>
                      <h5 className="fw-semibold text-dark-60 tw-mb-3 cursor-big">
                        Multiple Payout Options
                      </h5>
                      <p className="fw-normal tw-text-lg text-dark-500 ">
                        Bank deposits, mobile money, cash pickup, and home
                        delivery options available.
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

export default AboutUs;

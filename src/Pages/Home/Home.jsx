import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Home_Seo from "../../SEO/Home_Seo";
import Preloader from "../../Components/Preloader";
import Banner from "./Banner";
import { NavLink } from "react-router-dom";
import Testimonial from "./Testimonial";
import Calculator from "../../Components/Calculator";

function Home() {
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
      <Home_Seo />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <Banner />
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
                    <span className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto">
                      <span className="tw-w-15 tw-h-15 tw-rounded-md bg-base-two-600 d-flex align-items-center justify-content-center">
                        <img
                          className="white-image"
                          src="assets/images/icon/Fast-Global-Transfers.png"
                          alt="Fast Global Transfers"
                        />
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
                    <span className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto">
                      <span className="tw-w-15 tw-h-15 tw-rounded-md bg-base-two-600 d-flex align-items-center justify-content-center">
                        <img
                          className="white-image"
                          src="assets/images/icon/Multi-Currency-Wallet.png"
                          alt="Multi-Currency Wallet"
                        />
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
                    <span className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto">
                      <span className="tw-w-15 tw-h-15 tw-rounded-md bg-base-two-600 d-flex align-items-center justify-content-center">
                        <img
                          className="white-image"
                          src="assets/images/icon/Instant-Notifications.png"
                          alt="Instant Notifications"
                        />
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
                    <span className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto">
                      <span className="tw-w-15 tw-h-15 tw-rounded-md bg-base-two-600 d-flex align-items-center justify-content-center">
                        <img
                          className="white-image"
                          src="assets/images/icon/Exchange-Rates.png"
                          alt="Competitive Exchange Rates"
                        />
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
                    <span className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto">
                      <span className="tw-w-15 tw-h-15 tw-rounded-md bg-base-two-600 d-flex align-items-center justify-content-center">
                        <img
                          className="white-image"
                          src="assets/images/icon/Secure-Transactions.png"
                          alt="Secure Transactions"
                        />
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
                    <span className="tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto">
                      <span className="tw-w-15 tw-h-15 tw-rounded-md bg-base-two-600 d-flex align-items-center justify-content-center">
                        <img
                          className="white-image"
                          src="assets/images/icon/Multiple-Payout-Options.png"
                          alt="Multiple Payout Options"
                        />
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

          {/* ================== Working Section Start ===================== */}
          <section className="py-80 z-1 bg-neutral-10 overflow-hidden">
            <div className="container">
              <div className="">
                <div className="mx-auto justify-content-center overflow-hidden">
                  <div className="tw-mb-80-px mx-auto text-center align-items-center justify-content-center">
                    <div
                      className="d-flex justify-content-center align-items-center tw-gap-1 tw-mb-3 d-none"
                      data-aos="fade-up"
                      data-aos-duration={600}
                    >
                      <img
                        src="assets/images/icon/star-icon2.png"
                        alt="Image"
                      />
                      <h5 className="fw-normal text-primary-500">
                        How Redeem Work?
                      </h5>
                    </div>
                    <h2
                      className="fw-bold tw-mb-3 cursor-big"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      How Redeem Works
                    </h2>
                    <p
                      className="tw-text-lg text-dark-500 fw-normal"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Send money internationally in just four simple steps -
                      it's fast, secure, and straightforward.
                    </p>
                  </div>

                  <div className="position-relative">
                    {/* Adjusted Animated connecting line */}
                    <div
                      className="fast-safe-my position-absolute top-50 start-0 w-100 h-2 d-none d-lg-block"
                      style={{ transform: "translateY(-300%)" }}
                    >
                      <div className="position-relative w-100 h-100 mx-auto">
                        <div className="fast-safe-line"></div>
                      </div>
                    </div>

                    <div className="row gx-3 gx-lg-4 justify-content-center position-relative">
                      {/* Step 1 */}
                      <div
                        className="col-lg-3 col-md-6 mb-4 mb-lg-0"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <div className="text-center p-4 h-100">
                          <span className="tw-w-100px tw-h-100-px bg-base-two-10 tw-text-15 rounded-circle d-flex align-items-center justify-content-center text-primary-400 flex-shrink-0 mx-auto mb-4 position-relative">
                            <i className="fa-solid fa-circle-user"></i>
                            <span className="step-number position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary-500">
                              1
                            </span>
                          </span>
                          <div className="max-w-400 mx-auto">
                            <h4 className="fw-normal tw-mb-3 cursor-big">
                              Create an Account
                            </h4>
                            <p className="fw-normal tw-text-lg text-dark-500">
                              Sign up in minutes with a simple verification
                              process.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div
                        className="col-lg-3 col-md-6 mb-4 mb-lg-0"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <div className="text-center p-4 h-100">
                          <span className="payment-method tw-w-100px tw-h-100-px bg-base-two-10 tw-text-15 rounded-circle d-flex align-items-center justify-content-center text-primary-400 flex-shrink-0 mx-auto mb-4 position-relative">
                            <i className="fa-solid fa-globe"></i>
                            <span className="step-number position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary-500">
                              2
                            </span>
                          </span>
                          <div className="max-w-400 mx-auto">
                            <h4 className="fw-normal tw-mb-3 cursor-big">
                              Select Destination
                            </h4>
                            <p className="fw-normal tw-text-lg text-dark-500">
                              Choose from 180+ countries and select your
                              preferred delivery method.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div
                        className="col-lg-3 col-md-6 mb-4 mb-lg-0"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <div className="text-center p-4 h-100">
                          <span className="tw-w-100px tw-h-100-px bg-base-two-10 tw-text-13 rounded-circle d-flex align-items-center justify-content-center text-primary-400 flex-shrink-0 mx-auto mb-4 position-relative">
                            <i className="fa-solid fa-paper-plane"></i>
                            <span className="step-number position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary-500">
                              3
                            </span>
                          </span>
                          <div className="max-w-400 mx-auto">
                            <h4 className="fw-normal tw-mb-3 cursor-big">
                              Fund Your Transfer
                            </h4>
                            <p className="fw-normal tw-text-lg text-dark-500">
                              Add funds via bank transfer, debit card, or
                              digital wallet.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div
                        className="col-lg-3 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <div className="text-center p-4 h-100">
                          <span className="payment-method tw-w-100px tw-h-100-px bg-base-two-10 tw-text-15 rounded-circle d-flex align-items-center justify-content-center text-primary-400 flex-shrink-0 mx-auto mb-4 position-relative">
                            <i className="fa-solid fa-thumbs-up"></i>
                            <span className="step-number position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary-500">
                              4
                            </span>
                          </span>
                          <div className="max-w-400 mx-auto">
                            <h4 className="fw-normal tw-mb-3 cursor-big">
                              Complete Transfer
                            </h4>
                            <p className="fw-normal tw-text-lg text-dark-500">
                              Confirm details and track your money as it's
                              delivered securely.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ================== Working Section End ===================== */}

          {/* =============== Calculator Two Section Start ================= */}
          <section className="py-80 z- overflow-hidden">
            <div className="container">
              <div className="d-flex tw-gap-5 justify-content-between flex-wrap">
                <div className="tw-mb-80-px mx-auto text-center align-items-center justify-content-center">
                  <div
                    className="d-flex justify-content-center align-items-center tw-gap-1 tw-mb-3 d-none"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <img src="assets/images/icon/star-icon2.png" alt="Image" />
                    <h5 className="fw-normal text-primary-500">Send Money</h5>
                  </div>
                  <h2
                    className="fw-bold tw-mb-3 cursor-big"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    Ready to Send Your First Transfer?
                  </h2>
                  <p
                    className="tw-text-lg text-dark-500 fw-normal"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    Join millions of customers who trust Redeem for their
                    international money transfer needs.
                  </p>
                </div>
              </div>
              <div className="tw-mb-80-px">
                <div className="row gy-4">
                  <div className="col-xl-7">
                    <div className="tw-px-12 tw-py-1405 bg-neutral-10 rounded-4">
                      <div
                        className="feature-card d-flex align-items-center tw-gap-2 flex-wrap tw-mb-12"
                        data-aos="fade-up"
                        data-aos-duration={600}
                      >
                        <span className="tw-w-82px tw-h-82-px flex-shrink-0 d-flex align-items-center justify-content-center flex-shrink-0">
                          <img src="assets/images/icon/1.png" alt="Image" />
                        </span>
                        <div className="our-peature__item">
                          <h5 className="fw-normal">No Registration Fees</h5>
                          <p className="fw-medium tw-text-lg">
                            Create your account for free in minutes
                          </p>
                        </div>
                      </div>
                      <div
                        className="feature-card d-flex align-items-center tw-gap-2 flex-wrap tw-mb-12"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        <span className="tw-w-82px tw-h-82-px flex-shrink-0 d-flex align-items-center justify-content-center">
                          <img src="assets/images/icon/2.png" alt="Image" />
                        </span>
                        <div className="our-peature__item">
                          <h5 className="fw-normal">Transparent Pricing</h5>
                          <p className="fw-medium tw-text-lg">
                            See exactly what you'll pay before confirming
                          </p>
                        </div>
                      </div>
                      <div
                        className="feature-card d-flex align-items-center tw-gap-2 flex-wrap"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <span className="tw-w-82px tw-h-82-px flex-shrink-0 d-flex align-items-center justify-content-center">
                          <img src="assets/images/icon/3.png" alt="Image" />
                        </span>
                        <div className="our-peature__item">
                          <h5 className="fw-normal">24/7 Support</h5>
                          <p className="fw-medium tw-text-lg">
                            Get help anytime via chat, email, or phone
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <Calculator />
                  </div>
                </div>
              </div>
              <div className="row gy-4">
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div
                    className="tw-pe-8 text-center"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <h4 className="fw-normal text-dark-600 tw-mb-3">
                      Active Users Worldwide
                    </h4>
                    <h2 className="banner-item-title tw-text-15 text-primary-500 tw-mb-6 cursor-big counter">
                      5M+
                    </h2>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div
                    className="tw-pe-8 text-center"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <h4 className="fw-normal text-dark-600 tw-mb-3">
                      Countries Supported
                    </h4>
                    <h2 className="banner-item-title h1 tw-text-15 text-primary-500 tw-mb-6 cursor-big counter">
                      180+
                    </h2>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                  <div
                    className="tw-pe-8 text-center"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <h4 className="fw-normal text-dark-600 tw-mb-3">
                      Average Customer Rating
                    </h4>
                    <h2 className="banner-item-title tw-text-15 h1 text-primary-500 tw-mb-6 cursor-big counter">
                      4.5/5
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* =============== Calculator Two Section End ================= */}

          {/* =============== FAQ Two Section Start ================ */}
          <section className="bg-neutral-10 py-80 z-1 overflow-hidden">
            <div className="container">
              <div className="justify-content-center mx-auto">
                <div className="tw-mb-80-px">
                  <div className="max-w-560 text-center justify-content-center align-items-center mx-auto">
                    <h2
                      className="fw-bold text-dark-600 cursor-big"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>
                <div className>
                  <div
                    className="accordion d-flex justify-content-center tw-gap-6 flex-wrap"
                    id="accordionExample"
                  >
                    <div className="w-100">
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={600}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Is Redeem LLC Regulated?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Yes, Redeem LLC (RMT) is regulated by the SRO
                              PolyReg in Switzerland. We conform to the rules
                              and regulations in the countries we remit to
                              through our trusted and reliable distributors and
                              Payout Partners.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Do you have a Physical location or is RMT an online
                            business?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              With the lockdowns and social distancing policies
                              in most countries, We are currently providing
                              online services with the partners in the countries
                              we service. However, in the future, we intend to
                              have a physical presence in some major locations.
                              Our current online business operational model
                              allows RMT users to send money from the comfort of
                              their homes with highly competitive rates using
                              our secure and fast interface.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Is your Money Safe with Us?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Yes, We hold customer money in a dedicated
                              business account, independent of our business
                              operational account. All Remit requests are
                              matched with a corresponding transaction id and
                              leaves our account shortly after the request is
                              initiated, thereby reducing financial risk or loss
                              to customer money.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            How much money can I transfer?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              We are providing transaction daily limits up to
                              CHF 1’000.00 and a Monthly limit up to 5’000.00
                              CHF. For amounts higher than the monthly limit,
                              please contact us. Irrespective of these
                              thresholds, RMT can at any time request further
                              documents from each customer in compliance with
                              the SRO AML policies.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={600}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How long does it take to deliver funds to the
                            receiver?
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              We aim to get the remittance to the receiver
                              within 1 working day; in exceptional cases where
                              we cannot get it to the receiver within 48hrs, we
                              will contact you to provide an explanation and
                              revised time of delivery.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            How do I open a Redeem LLC account?
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Use the 'Sign-up' button on our website and follow
                              the instructions. On successful verification of
                              your details and documents by our registration
                              team, we will activate your account to make
                              remittances.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            Is my Data Safe with Redeem LLC?
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Redeem LLC is secured in line with the Switzerland
                              Data Protection, hence we ensure any data you
                              provide to us is confidential and held securely.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            Does Redeem LLC need my bank details for remittance
                            request?
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              <strong>Yes and No.</strong>
                            </p>
                            <p className="fw-normal tw-text-lg text-dark-600">
                              <strong>Yes</strong>
                              <br />
                              if during a transaction you use our{" "}
                              <strong>e-Check</strong> which is a recognized
                              payment processor/interface to make online
                              payments, We require customer bank details for
                              remittance request;{" "}
                              <strong>
                                the customer bank details must match the name(s)
                                used during opening of your Redeem LLC Account.
                              </strong>{" "}
                              The money will be booked directly from your bank
                              account. You (Customer) will be solely responsible
                              for any charges from using this payment processor.
                              The charges will be made clear to you and
                              separated from the amount RMT will send to your
                              receiver. Anyone with a savings account can pay by
                              eCheck.
                            </p>
                            <p className="fw-normal tw-text-lg text-dark-600 mt-3">
                              To make a payment with an e-Check, you simply
                              provide the following information:
                              <ul>
                                <li>Your IBAN number *</li>
                                <li>Your bank account number *</li>
                                <li>The name of your Bank *</li>
                                <li>The name on your bank account *</li>
                              </ul>
                              <em>
                                <strong>
                                  * This information is printed on your EC
                                  cards.
                                </strong>
                              </em>
                            </p>

                            <p className="fw-normal tw-text-lg text-dark-600 mt-3">
                              <strong>No</strong>
                              <br />
                              If you decide to manually transfer the money
                              directly to Our Bank account. <strong>The bank details
                              from which the transfer is initiated must match
                              the name(s) used during opening of your Redeem LLC
                              Account.</strong><br/>Our customers can choose either of both
                              options.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* =============== FAQ Two Section End ================ */}

          {/* ==================== Testimonials Two Section Start ================ */}
          <Testimonial />
          {/* ==================== Testimonials Two Section end ================ */}

          <Footer />
        </>
      )}
    </>
  );
}

export default Home;

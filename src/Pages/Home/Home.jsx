// --- START OF FILE: Home.jsx ---

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
          <section className="py-80 z-1 overflow-hidden d-none">
            <div className="container">
              <div className="d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-80-px">
                <div className="max-w-526">
                  <div
                    className="d-flex align-items-center tw-gap-1 tw-mb-3"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <img src="assets/images/icon/star-icon2.png" alt="Image" />
                    <h5 className="fw-normal text-primary-500">
                      Why Choose Us
                    </h5>
                  </div>
                  <h2
                    className="fw-normal text-dark-700 cursor-big"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    Why Choose Redeem for International Transfers
                  </h2>
                </div>
                <div className="max-w-426">
                  <p
                    className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                    data-aos="fade-up"
                    data-aos-duration={900}
                  >
                    Our platform is designed to make cross-border payments and
                    remittances faster, safer, and more affordable than
                    traditional banks.
                  </p>
                </div>
              </div>
              <div className="row gy-4">
                <div
                  className="col-lg-4"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <img
                    src="assets/images/thumbs/Why-Choose-Us.png"
                    alt="Why-Choose-Us"
                    className="bg-img tw-h-420-px rounded-3"
                  />
                </div>
                <div className="col-xl-8">
                  <div className="one-platform__title d-flex align-items-center tw-gap-2">
                    <div
                      className="payment-solutions__item cursor-pointer active"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      <div className="payment-solutions__button bg-base-two-10 tw-h-420-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative">
                        <span className="choose-us__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-base-two-600 tw-text-7 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7">
                          <img
                            src="assets/images/icon/Fast-Global-Transfers.png"
                            alt="Fast Global Transfers"
                          />
                        </span>
                        <h5 className="choose-us__title fw-normal text-dark-600 cursor-big tw-w-406-px">
                          Fast Global Transfers
                        </h5>
                      </div>
                      <div className="payment-solutions__content max-w-418-px tw-w-406-px w-100 bg-primary-400 tw-rounded-xl tw-px-8 tw-py-8">
                        <span className="tw-w-15 tw-h-15 bg-white tw-rounded-md d-flex align-items-center justify-content-center tw-mb-8">
                          <img
                            src="assets/images/icon/Fast-Global-Transfers.png"
                            alt="Fast Global Transfers"
                          />
                        </span>
                        <h4 className="fw-normal cursor-big text-white tw-mb-3">
                          Fast Global Transfers
                        </h4>
                        <p className="fw-normal tw-text-405 text-white tw-mb-17">
                          Send money to over 180 countries with delivery in as
                          little as minutes.
                        </p>
                      </div>
                    </div>
                    <div
                      className="payment-solutions__item cursor-pointer"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <div className="payment-solutions__button bg-base-two-10 tw-h-420-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative">
                        <span className="choose-us__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-base-two-600 tw-text-7 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7">
                          <img
                            src="assets/images/icon/Exchange-Rates.png"
                            alt="Competitive Exchange Rates"
                          />
                        </span>
                        <h5 className="choose-us__title fw-normal text-dark-600 cursor-big tw-w-406-px">
                          Competitive Exchange Rates
                        </h5>
                      </div>
                      <div className="payment-solutions__content max-w-418-px tw-w-406-px w-100 bg-primary-400 tw-rounded-xl tw-px-8 tw-py-8">
                        <span className="tw-w-15 tw-h-15 bg-white tw-rounded-md d-flex align-items-center justify-content-center tw-mb-8">
                          <img
                            src="assets/images/icon/Exchange-Rates.png"
                            alt="Competitive Exchange Rates"
                          />
                        </span>
                        <h4 className="fw-normal cursor-big text-white tw-mb-3">
                          Competitive Exchange Rates
                        </h4>
                        <p className="fw-normal tw-text-405 text-white tw-mb-17">
                          Get market-leading exchange rates with transparent
                          pricing and no hidden fees.
                        </p>
                      </div>
                    </div>
                    <div
                      className="payment-solutions__item cursor-pointer"
                      data-aos="fade-up"
                      data-aos-duration={1200}
                    >
                      <div className="payment-solutions__button bg-base-two-10 tw-h-420-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative">
                        <span className="choose-us__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-base-two-600 tw-text-7 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7">
                          <img
                            src="assets/images/icon/Secure-Transactions.png"
                            alt="Secure Transactions"
                          />
                        </span>
                        <h5 className="choose-us__title fw-normal text-dark-600 cursor-big tw-w-406-px">
                          Secure Transactions
                        </h5>
                      </div>
                      <div className="payment-solutions__content max-w-418-px tw-w-406-px w-100 bg-primary-400 tw-rounded-xl tw-px-8 tw-py-8">
                        <span className="tw-w-15 tw-h-15 bg-white tw-rounded-md d-flex align-items-center justify-content-center tw-mb-8">
                          <img
                            src="assets/images/icon/Secure-Transactions.png"
                            alt="Secure Transactions"
                          />
                        </span>
                        <h4 className="fw-normal cursor-big text-white tw-mb-3">
                          Secure Transactions
                        </h4>
                        <p className="fw-normal tw-text-405 text-white tw-mb-17">
                          Bank-level encryption and security protocols to
                          protect your money and data.
                        </p>
                      </div>
                    </div>
                    <div
                      className="payment-solutions__item cursor-pointer"
                      data-aos="fade-up"
                      data-aos-duration={1300}
                    >
                      <div className="payment-solutions__button bg-base-two-10 tw-h-420-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative">
                        <span className="choose-us__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-base-two-600 tw-text-7 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7">
                          <img
                            src="assets/images/icon/Multi-Currency-Wallet.png"
                            alt="Multi-Currency Wallet"
                          />
                        </span>
                        <h5 className="choose-us__title fw-normal text-dark-600 cursor-big tw-w-406-px">
                          Multi-Currency Wallet
                        </h5>
                      </div>
                      <div className="payment-solutions__content max-w-418-px tw-w-406-px w-100 bg-primary-400 tw-rounded-xl tw-px-8 tw-py-8">
                        <span className="tw-w-15 tw-h-15 bg-white tw-rounded-md d-flex align-items-center justify-content-center tw-mb-8">
                          <img
                            src="assets/images/icon/Multi-Currency-Wallet.png"
                            alt="Multi-Currency Wallet"
                          />
                        </span>
                        <h4 className="fw-normal cursor-big text-white tw-mb-3">
                          Multi-Currency Wallet
                        </h4>
                        <p className="fw-normal tw-text-405 text-white tw-mb-17">
                          Hold and manage multiple currencies in one place with
                          our digital wallet.
                        </p>
                      </div>
                    </div>
                    <div
                      className="payment-solutions__item cursor-pointer"
                      data-aos="fade-up"
                      data-aos-duration={1300}
                    >
                      <div className="payment-solutions__button bg-base-two-10 tw-h-420-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative">
                        <span className="choose-us__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-base-two-600 tw-text-7 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7">
                          <img
                            src="assets/images/icon/Multiple-Payout-Options.png"
                            alt="Multiple Payout Options"
                          />
                        </span>
                        <h5 className="choose-us__title fw-normal text-dark-600 cursor-big tw-w-406-px">
                          Multiple Payout Options
                        </h5>
                      </div>
                      <div className="payment-solutions__content max-w-418-px tw-w-406-px w-100 bg-primary-400 tw-rounded-xl tw-px-8 tw-py-8">
                        <span className="tw-w-15 tw-h-15 bg-white tw-rounded-md d-flex align-items-center justify-content-center tw-mb-8">
                          <img
                            src="assets/images/icon/Multiple-Payout-Options.png"
                            alt="Multiple Payout Options"
                          />
                        </span>
                        <h4 className="fw-normal cursor-big text-white tw-mb-3">
                          Multiple Payout Options
                        </h4>
                        <p className="fw-normal tw-text-405 text-white tw-mb-17">
                          Bank deposits, mobile money, cash pickup, and home
                          delivery options available.
                        </p>
                      </div>
                    </div>
                    <div
                      className="payment-solutions__item cursor-pointer"
                      data-aos="fade-up"
                      data-aos-duration={1300}
                    >
                      <div className="payment-solutions__button bg-base-two-10 tw-h-420-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative">
                        <span className="choose-us__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-base-two-600 tw-text-7 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7">
                          <img
                            src="assets/images/icon/Instant-Notifications.png"
                            alt="Instant Notifications"
                          />
                        </span>
                        <h5 className="choose-us__title fw-normal text-dark-600 cursor-big tw-w-406-px">
                          Instant Notifications
                        </h5>
                      </div>
                      <div className="payment-solutions__content max-w-418-px tw-w-406-px w-100 bg-primary-400 tw-rounded-xl tw-px-8 tw-py-8">
                        <span className="tw-w-15 tw-h-15 bg-white tw-rounded-md d-flex align-items-center justify-content-center tw-mb-8">
                          <img
                            src="assets/images/icon/Instant-Notifications.png"
                            alt="Instant Notifications"
                          />
                        </span>
                        <h4 className="fw-normal cursor-big text-white tw-mb-3">
                          Instant Notifications
                        </h4>
                        <p className="fw-normal tw-text-405 text-white tw-mb-17">
                          Real-time tracking and alerts for all your
                          international money transfers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                  <h3
                    className="fw-normal tw-mb-3 cursor-big"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    Why Choose Redeem for International Transfers
                  </h3>
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
                      <h5 className="fw-normal text-dark-60 tw-mb-3 cursor-big">
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
                <div className="max-w-856 mx-auto justify-content-center overflow-hidden">
                  <div className="tw-mb-80-px mx-auto text-center align-items-center  justify-content-center">
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
                    <h3
                      className="fw-normal tw-mb-3 cursor-big"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      How Redeem Work?
                    </h3>
                    <p
                      className="tw-text-lg text-dark-500 fw-normal"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Send money internationally in just four simple steps -
                      it's fast, secure, and straightforward.
                    </p>
                  </div>
                  <div className=" position-relative overflow-hidden">
                    <span className="fast-safe border-neutral-100 position-absolute top-0 start-50 w-05 h-100  d-lg-block d-none" />
                    <div
                      className="working-process max-w-580 d-flex align-items-center tw-gap-16 tw-ms-auto pb-120 flex-wrap"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <span className="tw-w-100px tw-h-100-px bg-base-two-10 tw-text-15 rounded-circle d-flex align-items-center justify-content-center text-primary-400 flex-shrink-0">
                        <i class="fa-solid fa-circle-user"></i>
                      </span>
                      <div className="max-w-400 tw-px-10">
                        <span className="fw-bold tw-text-lg text-primary-500 tw-mb-3">
                          STEP_01{" "}
                        </span>
                        <h4 className="fw-normal tw-mb-3 cursor-big">
                          Create an Account
                        </h4>
                        <p className="fw-normal tw-text-lg text-dark-500">
                          Sign up in minutes with a simple verification process.
                        </p>
                      </div>
                    </div>
                    <div
                      className=" working-process max-w-580 d-flex align-items-center tw-gap-16 text-end pb-120 flex-wrap"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <div className="max-w-400 tw-px-10 working-process__text">
                        <span className="fw-bold tw-text-lg text-primary-500 tw-mb-3">
                          STEP_02
                        </span>
                        <h4 className="fw-normal tw-mb-3 cursor-big">
                          Select Destination
                        </h4>
                        <p className="fw-normal tw-text-lg text-dark-500">
                          Choose from 180+ countries and select your preferred
                          delivery method.
                        </p>
                      </div>
                      <span className="payment-method tw-w-100px tw-h-100-px bg-base-two-10 tw-text-15 rounded-circle d-flex align-items-center justify-content-center text-primary-400 flex-shrink-0">
                        <i class="fa-solid fa-globe"></i>
                      </span>
                    </div>
                    <div
                      className="working-process max-w-580 d-flex align-items-center tw-gap-16 pb-120 flex-wrap tw-ms-auto"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <span className="tw-w-100px tw-h-100-px bg-base-two-10 tw-text-13 rounded-circle d-flex align-items-center justify-content-center text-primary-400 flex-shrink-0 transform-scale-09">
                        <i class="fa-solid fa-paper-plane"></i>
                      </span>
                      <div className="max-w-400 tw-px-10">
                        <span className="fw-bold tw-text-lg text-primary-500 tw-mb-3">
                          STEP_03{" "}
                        </span>
                        <h4 className="fw-normal tw-mb-3 cursor-big">
                          Fund Your Transfer
                        </h4>
                        <p className="fw-normal tw-text-lg text-dark-500">
                          Add funds via bank transfer, debit card, or digital
                          wallet.
                        </p>
                      </div>
                    </div>
                    <div
                      className="working-process max-w-580 d-flex align-items-center tw-gap-16 text-end flex-wrap"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <div className="max-w-400 tw-px-10 working-process__text">
                        <span className="fw-bold tw-text-lg text-primary-500 tw-mb-3">
                          STEP_04
                        </span>
                        <h4 className="fw-normal tw-mb-3 cursor-big">
                          {" "}
                          Complete Transfer
                        </h4>
                        <p className="fw-normal tw-text-lg text-dark-500">
                          Confirm details and track your money as it's delivered
                          securely.
                        </p>
                      </div>
                      <span className="payment-method tw-w-100px tw-h-100-px bg-base-two-10 tw-text-15 rounded-circle d-flex align-items-center justify-content-center text-primary-400 flex-shrink-0">
                        <i class="fa-solid fa-thumbs-up"></i>
                      </span>
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
                  <h3
                    className="fw-normal tw-mb-3 cursor-big"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    Ready to Send Your First Transfer?
                  </h3>
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
                      className="fw-normal text-dark-600 cursor-big"
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
                    <div className="w-100 max-w-885-px">
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={600}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ab laboriosam, unde asperiores ea veniam,
                              dolorum, reprehenderit nihil assumenda itaque nemo
                              praesentium dolorem et quasi voluptate quo ipsa
                              non. Eveniet, doloremque.
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
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Mollitia accusamus cumque alias
                              minus rem libero praesentium corporis consequatur
                              voluptatem magni dolorem, repellat sapiente sint
                              ex nihil, expedita nesciunt, unde vel!
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
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Minima neque quibusdam quas corrupti facere
                              nulla modi dolorum perspiciatis numquam vero eum
                              in, natus reiciendis sint placeat officiis
                              consectetur nesciunt sequi.
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
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Omnis rerum ex voluptatem esse
                              culpa impedit quasi! Minima nemo architecto
                              voluptas atque libero pariatur accusamus
                              perspiciatis aut quas minus! Veniam, voluptatum?
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
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Et perspiciatis perferendis
                              recusandae adipisci quaerat rem, consequatur
                              aspernatur delectus qui, neque veritatis ipsum
                              illum odio facere dolores eligendi illo voluptatem
                              dicta.
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
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quia optio reiciendis culpa ab consequuntur
                              sunt? Autem est aliquid itaque ad expedita rem
                              blanditiis. Consequuntur aperiam nulla saepe at
                              nostrum numquam.
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
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ex asperiores impedit cumque debitis ipsam,
                              provident consectetur nostrum. Hic minus aliquam
                              blanditiis veritatis officiis, inventore fugit
                              vitae illo, temporibus, excepturi consequuntur.
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
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Debitis, tenetur. Recusandae
                              officia, iste est eveniet quos ipsam debitis error
                              incidunt iusto explicabo alias ea? Quasi fugiat
                              excepturi libero animi vel.
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

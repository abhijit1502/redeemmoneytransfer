import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CookieConsent from "../Components/CookieConsent";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ==================== Newsletter Two Section Start ====================== */}
      <div
        className="margin-block-end--162px z-2 overflow-hidden d-none"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <div className="container">
          <div
            className="pt-5 pb-5 rounded-2 cts-css"
            style={{
              backgroundImage: "url(assets/images/bg/cts-img.png)",
            }}
          >
            <div className="d-flex align-items-center justify-content-center tw-gap-4 flex-wrap">
              <div className="text-center">
                <h2 className="cursor-big fw-bold mb-3">Download Our App</h2>
                <p className="tw-px-10">
                  Start your money transfer journey with the Redeem app.
                  Download from the Play Store or App Store
                </p>

                <div className="d-flex justify-content-center align-items-center tw-gap-6 flex-wrap mt-4">
                  <div>
                    <NavLink to="#" target="_blank">
                      <img src="assets/images/Appstore.svg" />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="#" target="_blank">
                      <img src="assets/images/Playstore.svg" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Newsletter Two Section End ====================== */}
      {/* ==================== Footer Two Section Start Here ==================== */}
      <footer className="pt-120 bg-dark-600 z-1 overflow-hidden">
        <div className="container">
          <div className="mb-5">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div
                  className="max-w-306"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <div className="tw-mb-15">
                    <NavLink to="/">
                      <img
                        src="assets/images/logo/footer-logo.png"
                        alt="Image"
                        className="tw-mb-6"
                      />
                    </NavLink>
                    <p className="fw-normal tw-text-lg text-neutral-10 tw-mb-8">
                      Transform your customer relationships with our modern,
                      flexible loyalty and rewards platform.
                    </p>
                    <div className="d-flex justify-content-center align-items-center tw-gap-6 mt-4">
                      <div>
                        <NavLink to="#" target="_blank">
                          <img src="assets/images/Appstore.svg" />
                        </NavLink>
                      </div>
                      <div>
                        <NavLink to="#" target="_blank">
                          <img src="assets/images/Playstore.svg" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div data-aos="fade-up" data-aos-duration={800}>
                  <h4 className="text-white fw-normal tw-mb-10 cursor-big">
                    Quick Links
                  </h4>
                  <ul>
                    <li className="tw-mb-4">
                      <NavLink
                        to="/aboutus"
                        className="fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="tw-mb-4">
                      <NavLink
                        to="/money-transfer"
                        className="fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        Money Transfer
                      </NavLink>
                    </li>
                    <li className="tw-mb-4">
                      <NavLink
                        to="/help"
                        className="fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        Help
                      </NavLink>
                    </li>
                    <li className="tw-mb-4">
                      <NavLink
                        to="/general-faq"
                        className="fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        FAQs
                      </NavLink>
                    </li>
                    <li className="tw-mb-4">
                      <NavLink
                        to="/contactus"
                        className="fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div data-aos="fade-up" data-aos-duration={1000}>
                  <h4 className="text-white fw-normal tw-mb-10 cursor-big">
                    Legal Links
                  </h4>
                  <ul>
                    <li className="tw-mb-4">
                      <NavLink
                        to="/terms-and-conditions"
                        className="fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        Teams & Conditions
                      </NavLink>
                    </li>
                    <li className="tw-mb-4">
                      <NavLink
                        to="/privacy-policy"
                        className="fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li className="tw-mb-4 d-none">
                      <NavLink
                        to="/complaint-policy"
                        className="fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        Complaint Policy
                      </NavLink>
                    </li>
                    <li className="tw-mb-4">
                      <NavLink
                        to="/cookie-policy"
                        className="fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        Cookie Policy
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div data-aos="fade-up" data-aos-duration={1200}>
                  <h4 className="fw-normal text-white tw-mb-10 cursor-big">
                    Contact Us
                  </h4>
                  <ul>
                    <li className="tw-mb-3 group">
                      <NavLink
                        to="javascript:void(0)"
                        className="d-flex tw-gap-2 fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        <span className="text-neutral-10 tw-text-6 group-hover-text-main-600 tw-duration-500">
                          <i className="ph ph-map-pin" />
                        </span>
                        <span className="fw-normal tw-text-lg text-neutral-10 group-hover-text-main-600 tw-duration-500">
                          Wartstr 22, 8400 Winterthur
                        </span>
                      </NavLink>
                    </li>
                    <li className="tw-mb-3 group">
                      <NavLink
                        to="tel:+41779873231"
                        className="d-flex tw-gap-2 fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        <span className="text-neutral-10 tw-text-6 group-hover-text-main-600 tw-duration-500">
                          <i className="ph ph-phone-call" />
                        </span>
                        <span className="fw-normal tw-text-lg text-neutral-10 group-hover-text-main-600 tw-duration-500">
                          +41 779873231
                        </span>
                      </NavLink>
                    </li>
                    <li className="group">
                      <NavLink
                        to="mailto:customercare@redeemtransfer.com"
                        className="d-flex tw-gap-2 fw-normal tw-text-lg text-neutral-10 hover-text-main-600"
                      >
                        <span className="text-neutral-10 tw-text-6 group-hover-text-main-600 tw-duration-500">
                          <i className="ph ph-envelope-simple" />
                        </span>
                        <span className="fw-normal tw-text-lg text-neutral-10 group-hover-text-main-600 tw-duration-500">
                          customercare@redeemtransfer.com
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="d-flex align-items-center tw-gap-5 mt-4 footer-social-media">
                    <li>
                      <NavLink
                        to="https://www.facebook.com/RedeemTransfer"
                        target="_blank"
                      >
                        <img
                          src="assets/images/icon/facebook.png"
                          alt="Image"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="https://www.instagram.com/redeemtransfer/"
                        target="_blank"
                      >
                        <img
                          src="assets/images/icon/instagram.png"
                          alt="Image"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" target="_blank">
                        <img
                          src="assets/images/icon/linkedin.png"
                          alt="Image"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="https://x.com/RedeemTransfer"
                        target="_blank"
                      >
                        <img src="assets/images/icon/twitter.png" alt="Image" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-mb-10 border-top-dark-500 tw-pt-6">
            <div className="d-flex align-items-center justify-content-center tw-gap-4 flex-wrap">
              <p className="fw-medium tw-text-lg text-white">
                Copyright © {new Date().getFullYear()}&nbsp;
                <span>
                  <NavLink to="/">Redeem Money Transfer</NavLink>
                </span>{" "}
                All Rights Reserved. | Powered By{" "}
                <span>
                  <NavLink
                    to="https://www.calyx-solutions.com/"
                    target="_blank"
                  >
                    Calyx Solutions.
                  </NavLink>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>

       <CookieConsent />

      {/* ==================== Footer Two Section End Here ==================== */}
    </>
  );
};

export default Footer;

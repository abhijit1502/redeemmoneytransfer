import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Marquee from "../../Components/Marquee";
// import Calculator from "../../Components/Calculator";

function Banner() {
  return (
    <>
      {/* ==================== Banner Three Section Start ================== */}
      <section
        className="pt-120 z-1 position-relative overflow-hidden"
        style={{
          backgroundImage: "url(assets/images/bg/banner-three-bg1.png)",
        }}
      >
        <div className="tw-mb-96px">
          <div className="container">
            <div className="position-relative">
              <div className="row flex-wrap gy-4">
                <div className="col-xl-6">
                  <div className="max-w-667">
                    <div className="tw-mb-80-px position-relative">
                      <div>
                        <div className="tw-mb-10">
                          <div
                            className="d-flex align-items-center gap-1 tw-mb-3"
                            data-aos="fade-up"
                            data-aos-duration={600}
                          >
                            <img
                              src="assets/images/icon/star-icon3.png"
                              alt="star"
                            />
                            <h5 className="text-primary-500 cursor-big">
                              Global Money Transfers
                            </h5>
                          </div>
                          <div
                            className="position-relative"
                            data-aos="fade-up"
                            data-aos-duration={800}
                          >
                            <h2 className="banner-item-title h1 text-dark-600 tw-mb-3 tw-text-15 cursor-big">
                              Send Money <span className="text-primary-500">Across Borders</span>
                              Instantly
                            </h2>
                            <img
                              src="assets/images/shape/banner-three-shape1.png"
                              alt="Image"
                              className="banner-shape-three-one position-absolute z-n1 tw-block-start-130-px d-lg-block d-none"
                            />
                          </div>
                          <p
                            className="banner-item-text text-dark-500 tw-text-xl line-clamp-2"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                          >
                            Fast, secure, and affordable international money transfers with competitive exchange rates and minimal fees.
                          </p>
                        </div>
                        <div
                          className="d-flex align-items-center tw-gap-6 flex-wrap"
                          data-aos="fade-up"
                          data-aos-duration={1200}
                        >
                          <div className="position-relative">
                            <NavLink
                              to="#"
                              className="banner-three-item-link bg-main-600 text-dark-600 fw-semibold tw-text-lg tw-px-5 tw-py-3 border-two-px-solid rounded-3 hover-text-white"
                            >
                              Send Money Now
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <img
                        src="assets/images/shape/banner-three-start-shape1.png"
                        alt="Image"
                        className="position-absolute bottom-0 tw-end-100-px tw-mb--30px z-n1 d-xl-block d-none animation-rotation__two"
                      />
                    </div>
                    <div className="d-flex align-items-center tw-gap-12 tw-mb-15 flex-wrap">
                      <div data-aos="fade-up" data-aos-duration={1400}>
                        <div className="d-flex align-items-center tw-mb-2">
                          <img
                            src="assets/images/flags/aoa.png"
                            alt="Image"
                            className="tw-hover-z-2 tw-h-7 tw-rounded-3xl tw-duration-400"
                          />
                          <img
                            src="assets/images/flags/usd.png"
                            alt="Image"
                            className="margin-left--12px tw-h-7 tw-rounded-3xl tw-hover-z-2 tw-duration-400"
                          />
                          <img
                            src="assets/images/flags/brl.png"
                            alt="Image"
                            className="margin-left--12px tw-h-7 tw-rounded-3xl tw-hover-z-2 tw-duration-400"
                          />
                          <img
                            src="assets/images/flags/eur.png"
                            alt="Image"
                            className="margin-left--12px tw-h-7 tw-rounded-3xl"
                          />
                        </div>
                        <span className="tw-text-lg text-dark-500">
                          180+&nbsp;
                          <span className="fw-semibold border-bottom-dark-500">
                            countries supported worldwide
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="d-xl-block d-none text-end">
                    <img
                      src="assets/images/thumbs/banner-three-img1.png"
                      alt="img"
                      className="margin-top--40px"
                      data-aos="zoom-in"
                      data-aos-duration={1500}
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="banner-three-item margin-left-100px d-xl-block d-none">
                    <div className="max-w-185 tw-mb-12">
                      <h5 className="cursor-big tw-mb-1 counter">
                        Send Money
                      </h5>
                      <span className="tw-text-lg text-dark-500">
                        180+ destinations
                      </span>
                    </div>
                    <div className="max-w-185 tw-mb-12">
                      <h5 className="cursor-big tw-mb-1 counter">
                        Exchange Rates
                      </h5>
                      <span className="tw-text-lg text-dark-500">
                        Real-time updates
                      </span>
                    </div>
                     <div className="max-w-185 tw-mb-12">
                      <h5 className="cursor-big tw-mb-1 counter">
                        Digital Wallet
                      </h5>
                      <span className="tw-text-lg text-dark-500">
                       Multi-currency
                      </span>
                    </div>
                     <div className="max-w-185 tw-mb-12">
                      <h5 className="cursor-big tw-mb-1 counter">
                        Instant Transfers
                      </h5>
                      <span className="tw-text-lg text-dark-500">
                        24/7 availability
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================================= Marquee Section Start =============================== */}
         <Marquee/>
        </div>
      </section>
      {/* ==================== Banner Three Section End ================== */}
    </>
  );
}

export default Banner;

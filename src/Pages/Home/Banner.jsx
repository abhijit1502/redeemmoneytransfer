import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  // The full list of country flags you provided
  const flags = [
    // African countries
    "assets/images/flags/ngn.png", // Nigeria
    "assets/images/flags/ghs.png", // Ghana
    "assets/images/flags/zar.png", // South Africa
    "assets/images/flags/lrd.png", // Liberia
    "assets/images/flags/kes.png", // Kenya
    "assets/images/flags/ugx.png", // Uganda
    "assets/images/flags/zmw.png", // Zambia
    "assets/images/flags/etb.png", // Ethiopia
    "assets/images/flags/egp.png", // Egypt
    "assets/images/flags/tnd.png", // Tunisia
    "assets/images/flags/mad.png", // Morocco

    // Asian countries
    "assets/images/flags/bdt.png", // Bangladesh
    "assets/images/flags/khr.png", // Cambodia
    "assets/images/flags/cny.png", // China
    "assets/images/flags/inr.png", // India
    "assets/images/flags/mnt.png", // Mongolia
    "assets/images/flags/npr.png", // Nepal
    "assets/images/flags/pkr.png", // Pakistan
    "assets/images/flags/php.png", // Philippines
    "assets/images/flags/lkr.png", // Sri Lanka
    "assets/images/flags/thb.png", // Thailand
    "assets/images/flags/vnd.png", // Vietnam

    // American countries
    "assets/images/flags/brl.png", // Brazil
    "assets/images/flags/clp.png", // Chile
    "assets/images/flags/crc.png", // Costa Rica
    "assets/images/flags/dop.png", // Dominican Republic
    "assets/images/flags/usd.png", // Ecuador
    "assets/images/flags/htg.png", // Haiti
    "assets/images/flags/jmd.png", // Jamaica
    "assets/images/flags/pyg.png", // Paraguay
    "assets/images/flags/pen.png", // Peru

    // Middle East/Europe
    "assets/images/flags/kwd.png", // Kuwait
    "assets/images/flags/qar.png", // Qatar
    "assets/images/flags/aed.png", // UAE
    "assets/images/flags/try.png", // Turkey
    "assets/images/flags/gbp.png", // United Kingdom
  ];

  // For a seamless CSS loop, we render the list of flags twice.
  const doubledFlags = [...flags, ...flags];

  return (
    <>
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
                              Send Money{" "}
                              <span className="text-primary-500">
                                Across Borders
                              </span>
                              Instantly
                            </h2>
                            {/* <img
                              src="assets/images/shape/banner-three-shape1.png"
                              alt="Image"
                              className="banner-shape-three-one position-absolute z-n1 tw-block-start-130-px d-lg-block d-none"
                            /> */}
                          </div>
                          <p
                            className="banner-item-text text-dark-500 tw-text-xl line-clamp-2"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                          >
                            Fast, secure, and affordable international money
                            transfers with competitive exchange rates and
                            minimal fees.
                          </p>
                        </div>
                        <div
                          className="d-flex align-items-center tw-gap-1 flex-wrap"
                          data-aos="fade-up"
                          data-aos-duration={1200}
                        >
                          <div className="position-relative">
                            <NavLink
                              to="https://redeemtransfer.net/app/"
                              target="_blank"
                              className="banner-three-item-link bg-main-600 text-white fw-semibold tw-text-lg tw-px-3 tw-py-3   rounded-3 hover-text-neutral-20"
                            >
                              Send Money Now
                            </NavLink>
                          </div>
                          <div className="d-flex justify-content-center align-items-center tw-gap-1">
                            <div>
                              <NavLink
                                to="#"
                                target="_blank"
                              >
                                <img src="assets/images/mobile-img2.png" />
                              </NavLink>
                            </div>
                            <div>
                              <NavLink
                                to="#"
                                target="_blank"
                              >
                                <img src="assets/images/mobile-img1.png" />
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <img
                        src="assets/images/shape/banner-three-start-shape1.png"
                        alt="Image"
                        className="position-absolute bottom-0 tw-end-100-px tw-mb--30px z-n1 d-xl-block d-none animation-rotation__two"
                      /> */}
                    </div>

                    {/* --- FINAL FLAG SCROLLER SECTION --- */}
                    <div
                      className="d-flex flex-column tw-mb-15"
                      data-aos="fade-up"
                      data-aos-duration={1400}
                    >
                      <div className="scroller">
                        <div className="scroller-track">
                          {/* We map over the doubled list of flags */}
                          {doubledFlags.map((flag, index) => (
                            <img
                              key={index}
                              src={flag}
                              alt="Country flag"
                              className="flag-image"
                            />
                          ))}
                        </div>
                      </div>
                      <span className="tw-text-lg text-dark-500 mt-2">
                        180+&nbsp;
                        <span className="fw-semibold border-bottom-dark-500">
                          countries supported worldwide
                        </span>
                      </span>
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
                      <h5 className="cursor-big tw-mb-1 counter">Send Money</h5>
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
        </div>
      </section>
    </>
  );
}

export default Banner;

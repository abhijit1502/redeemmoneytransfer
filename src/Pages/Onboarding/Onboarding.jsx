import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import "../../css/steps.css";
import Seo from '../../Components/Seo';
import { onboardingSeo } from "../../seo-configs";

function Onboarding() {
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
      <Seo {...onboardingSeo} />
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
                Onboarding
              </h1>
              <div
                className="d-flex align-items-center tw-gap-105 justify-content-center"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <NavLink
                  to="/help"
                  className="fw-semibold tw-text-base text-dark-600 text-uppercase"
                >
                  Help
                </NavLink>
                <span className="tw-text-6 text-main-600">
                  <i className="ph ph-caret-double-right" />
                </span>
                <span className="fw-semibold tw-text-base text-main-600 text-uppercase">
                  Onboarding
                </span>
              </div>
            </div>
          </div>
          {/* ==================== Breadcrumb End Here ==================== */}

          <section className="kyc-upload py-80">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="heading_block style_2 text-center">
                    <h2 className="fw-normal text-dark-700 cursor-big aos-init aos-animate mb-3">KYC Documents Upload</h2>
                    <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate">
                      On our mobile app to complete your onboarding process we
                      require your Photo ID and a selfie. We use ID Scan
                      solution which takes less than a minute to complete this
                      for you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div id="msform">
                    {/* progressbar */}
                    <ul id="progressbar">
                      <NavLink to="/onboarding">
                        <li className="active" id="confirm">
                          <strong>1) Scanning Your Id</strong>
                        </li>
                      </NavLink>
                      <NavLink to="/livenesscheck">
                        <li id="confirm">
                          <strong>2) Liveness Check</strong>
                        </li>
                      </NavLink>
                      <NavLink to="/finish">
                        <li id="confirm">
                          <strong>Finish</strong>
                        </li>
                      </NavLink>
                    </ul>
                    {/* fieldsets */}
                    <fieldset>
                      <div className="form-card">
                        <div className="row justify-content-center">
                          <h4 className="mb-4">How To Scan Id?</h4>
                        </div>
                        <div className="row justify-content-center">
                          <div className="col-12 col-md-4 col-lg-4">
                            <div className="card cardcss">
                              <img
                                className="card-img-top"
                                src="assets/images/photo/scanid1.png"
                                alt="How to scan Id?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  Try not to take the photo from any other
                                  angle. It will work regardless, but parallel
                                  is better.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div className="card cardcss">
                              <img
                                className="card-img-top"
                                src="assets/images/photo/scanid2.png"
                                alt="How to scan Id?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  Try not to take the photo from any other
                                  angle. It will work regardless, but parallel
                                  is better.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="hrcss" />
                        <div className="row justify-content-center">
                          <h4 className="mb-4 mt-2">What to avoid?</h4>
                        </div>
                        <div className="row justify-content-center">
                          <div className="col-12 col-md-4 col-lg-4">
                            <div className="card cardcss">
                              <img
                                className="card-img-top"
                                src="assets/images/photo/scanid4.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  Please avoid flash or glares.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div className="card cardcss">
                              <img
                                className="card-img-top"
                                src="assets/images/photo/scanid6.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  Please avoid shadows over the ID.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div className="card cardcss">
                              <img
                                className="card-img-top"
                                src="assets/images/photo/scanid7.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  Please remove any background clutter.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div className="card cardcss">
                              <img
                                className="card-img-top"
                                src="assets/images/photo/scanid3.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-4">
                                  Please make sure your details aren't blurry.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div className="card cardcss">
                              <img
                                className="card-img-top"
                                src="assets/images/photo/scanid5.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  Please make sure you are not cropping or
                                  skewing the ID.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <NavLink
                        to="/livenesscheck"
                        className="btn-link tw-py-3 text-white rounded-3 fw-semibold"
                      >
                        Next
                      </NavLink>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}

export default Onboarding;

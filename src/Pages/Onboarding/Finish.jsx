import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import "../../css/steps.css";
import Finish_Seo from "../../SEO/Finish_Seo";

function Finish() {
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
      <Finish_Seo />
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
                   <h2 className="fw-normal text-dark-700 cursor-big aos-init aos-animate mb-3">
                      KYC Documents Upload
                    </h2>
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
                        <li className="active" id="confirm">
                          <strong>2) Liveness Check</strong>
                        </li>
                      </NavLink>
                      <NavLink to="/finish">
                        <li className="active" id="confirm">
                          <strong>Finish</strong>
                        </li>
                      </NavLink>
                    </ul>
                    {/* fieldsets */}
                    <fieldset>
                      <div className="form-card">
                        <div className="row justify-content-center">
                          <div className="col-12 col-md-4 col-lg-4">
                            <div className="card cardcss">
                              <img
                                className="card-img-top"
                                src="assets/images/photo/finishimg.png"
                                alt="Finish Image"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-0">
                                  On completion of your IDScan and Liveness
                                  check you will get a success screen to confirm
                                  completion of onboarding.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row justify-content-center">
                          <div className="col-12 text-center">
                            <h6 className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mt-3 mb-4">
                              If you have any further questions then please
                              visit our Onboarding FAQs page.
                            </h6>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-12">
                            <NavLink
                              to="/onboarding-faq"
                              className="btn-link tw-py-3 text-white rounded-3 fw-semibold"
                            >
                              FAQs
                            </NavLink>
                          </div>
                        </div>
                      </div>
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

export default Finish;

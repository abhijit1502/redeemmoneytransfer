import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import "../../css/steps.css";
import Livenesscheck_Seo from "../../SEO/Livenesscheck_Seo";

function Livenesscheck() {
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
      <Livenesscheck_Seo />
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
                        <li id="confirm">
                          <strong>Finish</strong>
                        </li>
                      </NavLink>
                    </ul>
                    {/* fieldsets */}
                    <fieldset>
                      <div className="form-card">
                        <div className="row justify-content-center">
                          <h4 className="mb-4">Taking Perfect Photo</h4>
                        </div>
                        <div className="row justify-content-center">
                          <div className="col-12 col-md-4 col-lg-4">
                            <div
                              className="card cardcss"
                              style={{
                                boxShadow: "0 5px 40px 0 rgba(0, 0, 0, .11)",
                                margin: "0 0 20px 0",
                              }}
                            >
                              <img
                                className="card-img-top"
                                src="assets/images/photo/takephoto1.png"
                                alt="Taking Perfect Photo"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  Make sure the camera has a consistent aspect
                                  ratio, so it does not stretch the image in any
                                  direction.
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
                            <div
                              className="card cardcss"
                              style={{
                                boxShadow: "0 5px 40px 0 rgba(0, 0, 0, .11)",
                                margin: "0 0 20px 0",
                              }}
                            >
                              <img
                                className="card-img-top"
                                src="assets/images/photo/takephoto7.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-0">
                                  Avoid shadows on the face or a strong side
                                  light.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div
                              className="card cardcss"
                              style={{
                                boxShadow: "0 5px 40px 0 rgba(0, 0, 0, .11)",
                                margin: "0 0 20px 0",
                              }}
                            >
                              <img
                                className="card-img-top"
                                src="assets/images/photo/takephoto3.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  Make sure your face is within the circle
                                  guidelines shown on the screen.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div
                              className="card cardcss"
                              style={{
                                boxShadow: "0 5px 40px 0 rgba(0, 0, 0, .11)",
                                margin: "0 0 20px 0",
                              }}
                            >
                              <img
                                className="card-img-top"
                                src="assets/images/photo/takephoto4.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-0">
                                  Make sure you are in a well-lit room that is
                                  not too dark.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div
                              className="card cardcss"
                              style={{
                                boxShadow: "0 5px 40px 0 rgba(0, 0, 0, .11)",
                                margin: "0 0 20px 0",
                              }}
                            >
                              <img
                                className="card-img-top"
                                src="assets/images/photo/takephoto2.png"
                                alt="What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  Turn off any filters that might distort the
                                  image but keep the white light correction ON.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div
                              className="card cardcss"
                              style={{
                                boxShadow: "0 5px 40px 0 rgba(0, 0, 0, .11)",
                                margin: "0 0 20px 0",
                              }}
                            >
                              <img
                                className="card-img-top"
                                src="assets/images/photo/takephoto6.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0 mb-4">
                                  Avoid having a light source behind the
                                  person's head, such as from a window.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div
                              className="card cardcss"
                              style={{
                                boxShadow: "0 5px 40px 0 rgba(0, 0, 0, .11)",
                                margin: "0 0 20px 0",
                              }}
                            >
                              <img
                                className="card-img-top"
                                src="assets/images/photo/takephoto8.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  Avoid anything covering the face, such as
                                  masks, hats, sunglasses or hair flopping over
                                  the face.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4">
                            <div
                              className="card cardcss"
                              style={{
                                boxShadow: "0 5px 40px 0 rgba(0, 0, 0, .11)",
                                margin: "0 0 20px 0",
                              }}
                            >
                              <img
                                className="card-img-top"
                                src="assets/images/photo/takephoto5.png"
                                alt=" What to avoid?"
                              />
                              <div className="card-body">
                                <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate m-0">
                                  For active liveness only - When performing
                                  actions such as turn right, do not over-rotate
                                  the face to 90 degrees, an angle of 35 degrees
                                  should be enough. Start with the camera raised
                                  so there is space to look down.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <NavLink
                        to="/onboarding"
                        type="button"
                        className="btn-link-pre tw-py-3 text-white rounded-3 fw-semibold"
                      >
                        Previous
                      </NavLink>
                      &emsp;
                      <NavLink
                        to="/finish"
                        type="button"
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

export default Livenesscheck;

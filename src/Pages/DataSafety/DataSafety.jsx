import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import "../../css/steps.css";
import DataSafety_Seo from "../../SEO/DataSafety_Seo";

function DataSafety() {
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
      <DataSafety_Seo />
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
                Data Safety
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
                  Data Safety
                </span>
              </div>
            </div>
          </div>
          {/* ==================== Breadcrumb End Here ==================== */}

          <section className="py-80">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate text-center">
                    If you have completed your registration with Redeem Money
                    Transfer but haven’t initiated any transaction, then you can
                    send us a request to delete your account with us. Deleting
                    your account will remove your data we have stored with us.
                  </p>
                  <div className="form-card">
                    <div
                      className="row text-center justify-content-center"
                      data-aos-delay={300}
                    >
                      <h4 className="fw-normal text-dark-700 cursor-big aos-init aos-animate mb-2 mt-3">Temporary Account Deletion</h4>
                      <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-5">
                        Please follow the below steps to delete your account on
                        a temporary basis.
                      </p>
                    </div>
                    <div className="row justify-content-center">
                      <div
                        className="col-12 col-md-6 col-lg-6"
                        data-aos-delay={300}
                      >
                        <div className="card cardcss">
                          <img
                            className="card-img-top"
                            src="assets/images/data-safety/1.png"
                            alt="Data Safety"
                          />
                          <div className="card-body">
                            <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-0">
                              <strong>Step 1:</strong> Go to the dashboard and
                              open the ‘Settings’ tab. Click on the ‘Delete My
                              Account’ option.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12 col-md-6 col-lg-6"
                        data-aos-delay={400}
                      >
                        <div className="card cardcss">
                          <img
                            className="card-img-top"
                            src="assets/images/data-safety/2.png"
                            alt="Data Safety"
                          />
                          <div className="card-body">
                            <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-4">
                              <strong>Step 2:</strong> Click the ‘Yes’ option to
                              temporarily delete your account.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12 col-md-6 col-lg-6"
                        data-aos-delay={600}
                      >
                        <div className="card cardcss">
                          <img
                            className="card-img-top"
                            src="assets/images/data-safety/3.png"
                            alt="Data Safety"
                          />
                          <div className="card-body">
                            <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-0">
                              <strong>Step 3:</strong> To proceed with your
                              request, please click on the ‘Yes’ option. We will
                              delete all your data records stored in our system.
                              You can cancel the request by clicking on the ‘No’
                              option.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div
                      className="row text-center justify-content-center"
                      data-aos-delay={300}
                    >
                      <h4 className="fw-normal text-dark-700 cursor-big aos-init aos-animate mb-2 mt-3">Permanent Account Deletion</h4>
                      <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-5">
                        Please follow the below steps to delete your account
                        permanently.
                      </p>
                    </div>
                    <div className="row justify-content-center">
                      <div
                        className="col-12 col-md-6 col-lg-6"
                        data-aos-delay={600}
                      >
                        <div className="card cardcss">
                          <img
                            className="card-img-top"
                            src="assets/images/data-safety/1.png"
                            alt="Data Safety?"
                          />
                          <div className="card-body">
                            <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-0">
                              <strong>Step 1:</strong> Go to the dashboard and
                              open the ‘Settings’ tab. Click on the ‘Delete My
                              Account’ option.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12 col-md-6 col-lg-6"
                        data-aos-delay={700}
                      >
                        <div className="card cardcss">
                          <img
                            className="card-img-top"
                            src="assets/images/data-safety/2.png"
                            alt="Data Safety?"
                          />
                          <div className="card-body">
                            <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-0">
                              <strong>Step 2:</strong> Click on the ‘No. Delete
                              my account permanently’ option to delete your
                              account permanently.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12 col-md-6 col-lg-6"
                        data-aos-delay={800}
                      >
                        <div className="card cardcss">
                          <img
                            className="card-img-top"
                            src="assets/images/data-safety/4.png"
                            alt="Data Safety?"
                          />
                          <div className="card-body">
                            <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-4">
                              <strong>Step 3:</strong> Your request for account
                              deletion will be submitted. Our team will reach
                              out to you shortly.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12 col-md-6 col-lg-6"
                        data-aos-delay={900}
                      >
                        <div className="card cardcss">
                          <img
                            className="card-img-top"
                            src="assets/images/data-safety/5.png"
                            alt="Data Safety?"
                          />
                          <div className="card-body">
                            <p className="fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate mb-0">
                              <strong>Step 4:</strong> To proceed with your
                              request, please click on the ‘Yes’ option. We will
                              delete all your data records stored in our
                              system.&nbsp;You can cancel the request by
                              clicking on the ‘No’ option.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12" data-aos-delay={900}>
                        <p className="fw-normal text-dark-700 cursor-big aos-init aos-animate">
                          If you have completed your registration with Redeem
                          Money Transfer and have processed your transaction,
                          you can also send us a request to delete your account.
                        </p>
                        <p className="fw-normal text-dark-700 cursor-big aos-init aos-animate">
                          But as per the Regulation 40 of The MLR 2017, we are
                          liable:
                        </p>
                        <ul className="ul2" style={{ listStyle: "disc" }}>
                          <li>
                            To store your documents and information we have
                            collected from you as a part of the customer due
                            diligence (CDD) process.
                          </li>
                          <li>
                            To store any supporting records including original
                            documents or copies you have provided to us as a
                            part of CDD.
                          </li>
                        </ul>
                        <p className="fw-normal text-dark-700 cursor-big aos-init aos-animate mb-4">
                          We will store your data for 5 years beginning from
                          when your transactions have been completed for which
                          you have provided us your data to process the
                          transaction.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="fw-normal text-dark-700 cursor-big aos-init aos-animate mb-2 mt-3">
                          We will not delete your account and data stored with
                          us in the below
                        </h4>
                        <p className="fw-normal text-dark-700 cursor-big aos-init aos-animate">
                          Please follow the below steps to delete your account
                          permanently.
                        </p>
                        <p className="fw-normal text-dark-700 cursor-big aos-init aos-animate">
                          The period of 5 years will not be applicable in the
                          following cases.
                        </p>
                        <p className="fw-normal text-dark-700 cursor-big aos-init aos-animate">
                          As per Regulation 40 (5), we will store your data if,
                        </p>
                        <ol className="ul3" style={{ listStyle: "decimal" }}>
                          <li>
                            We are liable to do so by or under any enactment,
                          </li>
                          <li>For any court proceedings;</li>
                          <li>
                            You have given consent to retain your data provided
                            to us; or
                          </li>
                          <li>
                            If Redeem Money Transfer has reasons to believe that
                            your data records need to be maintained with us for
                            legal proceedings.
                          </li>
                        </ol>
                      </div>
                    </div>
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

export default DataSafety;

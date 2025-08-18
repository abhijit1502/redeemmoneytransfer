import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import About_Seo from "../../SEO/About_Seo";

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
      <About_Seo />
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
              <div className="row gy-4 align-items-center">
                <div className="col-lg-6">
                  <div data-aos="zoom-in" data-aos-duration={1500}>
                    <img
                      className="rounded-2"
                      src="assets/images/thumbs/aboutus.jpg"
                      alt="What is Redeem LLC"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className>
                    <div
                      className="d-flex align-items-center tw-gap-1 tw-mb-3 d-none"
                      data-aos="fade-up"
                      data-aos-duration={600}
                    >
                      <span className>
                        <img
                          src="assets/images/icon/star-icon2.png"
                          alt="Image"
                          className
                        />
                      </span>
                      <h5 className="text-primary-600 fw-normal">
                        About Us
                      </h5>
                    </div>
                    <h2
                      className="fw-bold cursor-big tw-mb-5"
                      data-aos="fade-up"
                      data-aos-duration={800}
                    >
                      What is Redeem LLC
                    </h2>
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
                      className="fw-normal text-dark-500 tw-text-lg tw-mb-8"
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

          <Footer />
        </>
      )}
    </>
  );
}

export default AboutUs;

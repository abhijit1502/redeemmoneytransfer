import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import "../../css/steps.css";
import Seo from '../../Components/Seo';
import { onboardingFaqSeo } from "../../seo-configs";

function OnboardingFAQ() {
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
      <Seo {...onboardingFaqSeo} />
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
                Onboarding FAQs
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
                  Onboarding FAQs
                </span>
              </div>
            </div>
          </div>
          {/* ==================== Breadcrumb End Here ==================== */}
          {/* =============== FAQ Two Section Start ================ */}
          <section className="bg-neutral-10 py-80 z-1 overflow-hidden">
            <div className="container">
              <div className="justify-content-center mx-auto">
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
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            01. Why do you need my documents while registration?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600 mb-2">
                              Does your screen look something like this?
                            </p>
                            <div className="row">
                              <div className="col-6 col-md-4 col-lg-2">
                                <div className="cardcss">
                                  <img
                                    className="card-img-top"
                                    src="assets/images/photo/blankscreen1.png"
                                    alt="I'm getting a black blank screen. What should I do?"
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-4 col-lg-2">
                                <div className="cardcss">
                                  <img
                                    className="card-img-top"
                                    src="assets/images/photo/blankscreen2.png"
                                    alt="I'm getting a black blank screen. What should I do?"
                                  />
                                </div>
                              </div>
                            </div>
                            <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-1">
                              This means the CAMERA access to your default
                              BROWSER is denied. Please follow the steps below
                              to Allow camera access.
                            </p>
                            <ul
                              className="nav nav-pills nav-justified flex-column flex-sm-row style1"
                              id="pills-tab"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link active"
                                  id="pills-cloud-tab"
                                  data-bs-toggle="pill"
                                  href="#iOS"
                                  role="tab"
                                  aria-controls="pills-cloud"
                                  aria-selected="true"
                                >
                                  <div className="text-center py-2">
                                    <h6 className="mb-0">iOS</h6>
                                  </div>
                                </a>
                                {/*end nav link*/}
                              </li>
                              {/*end nav item*/}
                              <li className="nav-item" role="presentation">
                                <a
                                  className="nav-link"
                                  id="pills-smart-tab"
                                  data-bs-toggle="pill"
                                  href="#android"
                                  role="tab"
                                  aria-controls="pills-smart"
                                  aria-selected="false"
                                  tabIndex={-1}
                                >
                                  <div className="text-center py-2">
                                    <h6 className="mb-0">Android</h6>
                                  </div>
                                </a>
                                {/*end nav link*/}
                              </li>
                              {/*end nav item*/}
                            </ul>
                            {/*end nav pills*/}
                            <div className="row">
                              <div className="col-12 mt-1 pt-1">
                                <div
                                  className="tab-content"
                                  id="pills-tabContent"
                                >
                                  <div
                                    className="tab-pane fade show active"
                                    id="iOS"
                                    role="tabpanel"
                                    aria-labelledby="pills-cloud-tab"
                                  >
                                    <div className="row align-items-center">
                                      <div className="col-md-12 mt-1 mt-sm-0 pt-0 pt-sm-0">
                                        <div className="full mb-1">
                                          <div
                                            className="row wow fadeInUp animated animated animated"
                                            data-wow-delay="0.4s"
                                            style={{
                                              visibility: "visible",
                                              animationDelay: "0.4s",
                                              animationName: "fadeInUp",
                                            }}
                                          >
                                            <div className="col-12 col-md-12 col-xs-12">
                                              <p className="fw-normal tw-text-lg text-dark-600 mb-2">
                                                i. Go to Settings → Safari
                                              </p>
                                              <div className="row">
                                                <div className="col-12 col-md-5 col-lg-4">
                                                  <div className="cardcss">
                                                    <img
                                                      className="card-img-top"
                                                      src="assets/images/photo/apple1.png"
                                                      alt="Step1"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                                ii. Scroll to find "Camera"
                                                under SETTINGS FOR WEBSITES
                                                section
                                              </p>
                                              <div className="row">
                                                <div className="col-12 col-md-5 col-lg-4">
                                                  <div className="cardcss">
                                                    <img
                                                      className="card-img-top"
                                                      src="assets/images/photo/apple2.png"
                                                      alt="Step2"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                                iii. Tap on Camera option and
                                                you will be navigated to CAMERA
                                                ACCESS ON ALL WEBSITES. Tap on
                                                "Allow" option.
                                              </p>
                                              <div className="row">
                                                <div className="col-12 col-md-5 col-lg-4">
                                                  <div className="cardcss">
                                                    <img
                                                      className="card-img-top"
                                                      src="assets/images/photo/apple3.png"
                                                      alt="Step1"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                  </div>
                                  {/*end teb pane*/}
                                  <div
                                    className="tab-pane fade"
                                    id="android"
                                    role="tabpanel"
                                    aria-labelledby="pills-smart-tab"
                                  >
                                    <div className="row align-items-center">
                                      <div className="col-md-12 mt-1 mt-sm-0 pt-0 pt-sm-0">
                                        <p className="fw-normal tw-text-lg text-dark-600 mb-2">
                                          i. Go to Settings and tap on Apps
                                        </p>
                                        <div className="row">
                                          <div className="col-12 col-md-5 col-lg-4">
                                            <div className="cardcss">
                                              <img
                                                className="card-img-top"
                                                src="assets/images/photo/ad1.png"
                                                alt="Step1"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                          ii. Scroll to find your default
                                          browser app. Mostly it is Google
                                          Chrome for Android device, unless
                                          explicitly changed.
                                        </p>
                                        <div className="row">
                                          <div className="col-12 col-md-5 col-lg-4">
                                            <div className="cardcss">
                                              <img
                                                className="card-img-top"
                                                src="assets/images/photo/ad2.png"
                                                alt="Step2"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                          iii. Chrome → Permissions will show
                                          you what is enabled. Camera permission
                                          need to be enabled here.{" "}
                                        </p>
                                        <div className="row">
                                          <div className="col-12 col-md-5 col-lg-4">
                                            <div className="cardcss">
                                              <img
                                                className="card-img-top"
                                                src="assets/images/photo/ad3.png"
                                                alt="Step3"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                          iv. App permissions will show what is
                                          allowed and what's denied.
                                        </p>
                                        <div className="row">
                                          <div className="col-12 col-md-5 col-lg-4">
                                            <div className="cardcss">
                                              <img
                                                className="card-img-top"
                                                src="assets/images/photo/ad4.png"
                                                alt="Step4"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                          v. Tap on Camera to Allow camera
                                          permission to Chrome.
                                        </p>
                                        <div className="row">
                                          <div className="col-12 col-md-5 col-lg-4">
                                            <div className="cardcss">
                                              <img
                                                className="card-img-top"
                                                src="assets/images/photo/ad5.png"
                                                alt="Step5"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                  </div>
                                  {/*end teb pane*/}
                                </div>
                                {/*end tab content*/}
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
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
                            02. How can I cancel my transfer?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                             <p className="fw-normal tw-text-lg text-dark-600 mb-2">
                            Does your screen look something like this?
                          </p>
                          <div className="row">
                            <div className="col-6 col-md-5 col-lg-4">
                              <div className="cardcss">
                                <img
                                  className="card-img-top"
                                  src="assets/images/photo/ID Upload failure.png"
                                  alt="Wrong ID document or something went wrong."
                                />
                              </div>
                            </div>
                          </div>
                          <p className="fw-normal tw-text-lg text-dark-600 mb-2">
                            This means the ID you uploaded is not supported or
                            was having glare or blur while uploading. This may
                            have resulted us in not been able to capture ID
                            details. Please give it another try or contact our
                            support team.
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
          <Footer />

          {/*======  Start Faq Page Section  ======*/}
          <section className="faqs-page-ss pb-80">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  {/*====== Accordion  ======*/}
                  <div className="accordion" id="accordionOne">
                    {/*====== Accordion Item  ======*/}
                    <div className="accordion-item mb-10">
                      <div className="accordion-header">
                        <h6
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="false"
                        >
                          <span className="sn">01.</span> Why do you need my
                          documents while registration?
                        </h6>
                      </div>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionOne"
                      >
                        <div className="accordion-content">
                          <p className="fw-normal tw-text-lg text-dark-600 mb-2">
                            Does your screen look something like this?
                          </p>
                          <div className="row">
                            <div className="col-6 col-md-4 col-lg-2">
                              <div className="cardcss">
                                <img
                                  className="card-img-top"
                                  src="assets/images/photo/blankscreen1.png"
                                  alt="I'm getting a black blank screen. What should I do?"
                                />
                              </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2">
                              <div className="cardcss">
                                <img
                                  className="card-img-top"
                                  src="assets/images/photo/blankscreen2.png"
                                  alt="I'm getting a black blank screen. What should I do?"
                                />
                              </div>
                            </div>
                          </div>
                          <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-1">
                            This means the CAMERA access to your default BROWSER
                            is denied. Please follow the steps below to Allow
                            camera access.
                          </p>
                          <ul
                            className="nav nav-pills nav-justified flex-column flex-sm-row style1"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link active"
                                id="pills-cloud-tab"
                                data-bs-toggle="pill"
                                href="#iOS"
                                role="tab"
                                aria-controls="pills-cloud"
                                aria-selected="true"
                              >
                                <div className="text-center py-2">
                                  <h6 className="mb-0">iOS</h6>
                                </div>
                              </a>
                              {/*end nav link*/}
                            </li>
                            {/*end nav item*/}
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link"
                                id="pills-smart-tab"
                                data-bs-toggle="pill"
                                href="#android"
                                role="tab"
                                aria-controls="pills-smart"
                                aria-selected="false"
                                tabIndex={-1}
                              >
                                <div className="text-center py-2">
                                  <h6 className="mb-0">Android</h6>
                                </div>
                              </a>
                              {/*end nav link*/}
                            </li>
                            {/*end nav item*/}
                          </ul>
                          {/*end nav pills*/}
                          <div className="row">
                            <div className="col-12 mt-1 pt-1">
                              <div
                                className="tab-content"
                                id="pills-tabContent"
                              >
                                <div
                                  className="tab-pane fade show active"
                                  id="iOS"
                                  role="tabpanel"
                                  aria-labelledby="pills-cloud-tab"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-md-12 mt-1 mt-sm-0 pt-0 pt-sm-0">
                                      <div className="full mb-1">
                                        <div
                                          className="row wow fadeInUp animated animated animated"
                                          data-wow-delay="0.4s"
                                          style={{
                                            visibility: "visible",
                                            animationDelay: "0.4s",
                                            animationName: "fadeInUp",
                                          }}
                                        >
                                          <div className="col-12 col-md-12 col-xs-12">
                                            <p className="fw-normal tw-text-lg text-dark-600 mb-2">
                                              i. Go to Settings → Safari
                                            </p>
                                            <div className="row">
                                              <div className="col-12 col-md-5 col-lg-4">
                                                <div className="cardcss">
                                                  <img
                                                    className="card-img-top"
                                                    src="assets/images/photo/apple1.png"
                                                    alt="Step1"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                              ii. Scroll to find "Camera" under
                                              SETTINGS FOR WEBSITES section
                                            </p>
                                            <div className="row">
                                              <div className="col-12 col-md-5 col-lg-4">
                                                <div className="cardcss">
                                                  <img
                                                    className="card-img-top"
                                                    src="assets/images/photo/apple2.png"
                                                    alt="Step2"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                              iii. Tap on Camera option and you
                                              will be navigated to CAMERA ACCESS
                                              ON ALL WEBSITES. Tap on "Allow"
                                              option.
                                            </p>
                                            <div className="row">
                                              <div className="col-12 col-md-5 col-lg-4">
                                                <div className="cardcss">
                                                  <img
                                                    className="card-img-top"
                                                    src="assets/images/photo/apple3.png"
                                                    alt="Step1"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/*end col*/}
                                  </div>
                                  {/*end row*/}
                                </div>
                                {/*end teb pane*/}
                                <div
                                  className="tab-pane fade"
                                  id="android"
                                  role="tabpanel"
                                  aria-labelledby="pills-smart-tab"
                                >
                                  <div className="row align-items-center">
                                    <div className="col-md-12 mt-1 mt-sm-0 pt-0 pt-sm-0">
                                      <p className="fw-normal tw-text-lg text-dark-600 mb-2">
                                        i. Go to Settings and tap on Apps
                                      </p>
                                      <div className="row">
                                        <div className="col-12 col-md-5 col-lg-4">
                                          <div className="cardcss">
                                            <img
                                              className="card-img-top"
                                              src="assets/images/photo/ad1.png"
                                              alt="Step1"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                        ii. Scroll to find your default browser
                                        app. Mostly it is Google Chrome for
                                        Android device, unless explicitly
                                        changed.
                                      </p>
                                      <div className="row">
                                        <div className="col-12 col-md-5 col-lg-4">
                                          <div className="cardcss">
                                            <img
                                              className="card-img-top"
                                              src="assets/images/photo/ad2.png"
                                              alt="Step2"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                        iii. Chrome → Permissions will show you
                                        what is enabled. Camera permission need
                                        to be enabled here.{" "}
                                      </p>
                                      <div className="row">
                                        <div className="col-12 col-md-5 col-lg-4">
                                          <div className="cardcss">
                                            <img
                                              className="card-img-top"
                                              src="assets/images/photo/ad3.png"
                                              alt="Step3"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                        iv. App permissions will show what is
                                        allowed and what's denied.
                                      </p>
                                      <div className="row">
                                        <div className="col-12 col-md-5 col-lg-4">
                                          <div className="cardcss">
                                            <img
                                              className="card-img-top"
                                              src="assets/images/photo/ad4.png"
                                              alt="Step4"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <p className="fw-normal tw-text-lg text-dark-600 mb-2 mt-2">
                                        v. Tap on Camera to Allow camera
                                        permission to Chrome.
                                      </p>
                                      <div className="row">
                                        <div className="col-12 col-md-5 col-lg-4">
                                          <div className="cardcss">
                                            <img
                                              className="card-img-top"
                                              src="assets/images/photo/ad5.png"
                                              alt="Step5"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/*end col*/}
                                  </div>
                                  {/*end row*/}
                                </div>
                                {/*end teb pane*/}
                              </div>
                              {/*end tab content*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                        </div>
                      </div>
                    </div>
                    {/*====== Accordion Item  ======*/}
                    <div className="accordion-item mb-10">
                      <div className="accordion-header">
                        <h6
                          className="accordion-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                        >
                          <span className="sn">02.</span>How can I cancel my
                          transfer?
                        </h6>
                      </div>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionOne"
                      >
                        <div className="accordion-content">
                          <p className="fw-normal tw-text-lg text-dark-600 mb-2">
                            Does your screen look something like this?
                          </p>
                          <div className="row">
                            <div className="col-6 col-md-5 col-lg-4">
                              <div className="cardcss">
                                <img
                                  className="card-img-top"
                                  src="assets/images/photo/ID Upload failure.png"
                                  alt="Wrong ID document or something went wrong."
                                />
                              </div>
                            </div>
                          </div>
                          <p className="fw-normal tw-text-lg text-dark-600 mb-2">
                            This means the ID you uploaded is not supported or
                            was having glare or blur while uploading. This may
                            have resulted us in not been able to capture ID
                            details. Please give it another try or contact our
                            support team.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*======  End Faq Page Section  ======*/}
        </>
      )}
    </>
  );
}
export default OnboardingFAQ;

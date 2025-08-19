import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import Seo from '../../Components/Seo';
import { complaintPolicySeo } from "../../seo-configs";

function ComplaintPolicy() {
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
      <Seo {...complaintPolicySeo} />
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
                Complaint Policy
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
                  Complaint Policy
                </span>
              </div>
            </div>
          </div>
          {/* ==================== Breadcrumb End Here ==================== */}

          {/*====== Start Complaint Policy Section ======*/}
          <section className="py-80">
            <div className="container">
              <div className="d-flex tw-gap-10 w-100 flex-wrap">
                <div className="w-100">
                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Our complaints policy
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We are committed to providing a high-quality money
                      transfer service to all our clients. When something goes
                      wrong, we need you to tell us about it. This will help us
                      to improve our standards.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      If you have a complaint, please contact us with the
                      details.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Definitions
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      These cookies are essential in order to enable you to
                      navigate around the website and easily use its features,
                      such as accessing secure areas of the website. Without
                      these cookies, services you have asked for cannot be
                      provided. Because these cookies are strictly necessary, we
                      do not need to ask for your consent to use them.
                    </p>

                    <div>
                      <div
                        className="d-flex align-items-center tw-gap-2 tw-mb-4"
                        data-aos="fade-up"
                        data-aos-duration={600}
                      >
                        <span className="tw-text-xl text-base-two-600 ">
                          <i className="ph ph-check-circle" />
                        </span>
                        <span className="fw-normal tw-text-lg text-dark-600">
                          By Email:&nbsp;
                          <NavLink to="mailto:customercare@redeemtransfer.com">
                            customercare@redeemtransfer.com
                          </NavLink>
                        </span>
                      </div>
                      <div
                        className="d-flex align-items-center tw-gap-2 tw-mb-4"
                        data-aos="fade-up"
                        data-aos-duration={700}
                      >
                        <span className="tw-text-xl text-base-two-600 ">
                          <i className="ph ph-check-circle" />
                        </span>
                        <span className="fw-normal tw-text-lg text-dark-600">
                          By Phone:&nbsp;
                          <NavLink to="tel:41779873231">+41 779873231</NavLink>
                        </span>
                      </div>
                      <div
                        className="d-flex align-items-center tw-gap-2 tw-mb-4"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        <span className="tw-text-xl text-base-two-600 ">
                          <i className="ph ph-check-circle" />
                        </span>
                        <span className="fw-normal tw-text-lg text-dark-600">
                          By Post: Wartstr 22, 8400 Winterthur
                        </span>
                      </div>
                    </div>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We have eight weeks to consider your complaint. If we have
                      not resolved it within this time you may complain to the
                      Financial Ombudsman Service.
                    </p>

                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      1. What Personal Data is collected and why?
                    </h4>
                    <ul className="ul2 mb-1 mrl tw-text-lg" style={{ listStyle: "disc" }}>
                      <li>
                        We will send you a letter/email acknowledging receipt of
                        your complaint on the same day of receiving it,
                        enclosing a copy of this procedure. If you have
                        complained in person or on call, we will try to resolve
                        and reach the solution the same day.
                      </li>
                      <li>
                        If we are unable to resolve your complaint on the same
                        day then we will further investigate your complaint.
                        This will normally involve finding details of your
                        complaint, reviewing your matter by speaking to the
                        member of staff who acted for you.
                      </li>
                      <li>
                        We will respond to you within 7 days with our Final
                        Response which may be a remedial action.
                      </li>
                      <li>
                        If you are still not satisfied, you can then contact the
                        Financial Ombudsman Service, about your complaint.
                        Normally, you will need to bring a complaint to the
                        Financial Ombudsman Service within six months of
                        receiving a final written response from us about your
                        complaint. For further information, you should contact
                        the Financial Ombudsman Service on:
                        <ul
                          className="ul2 mb-1 mrl tw-text-lg"
                          style={{ listStyle: "circle" }}
                        >
                          <li>
                            Online:&nbsp;
                            <NavLink
                              to="https://www.financial-ombudsman.org.uk/"
                              target="_blank"
                            >
                              https://www.financial-ombudsman.org.uk/
                            </NavLink>
                          </li>
                          <li>
                            Email:&nbsp;
                            <NavLink to="mailto:complaint.info@financial-ombudsman.org.uk">
                              complaint.info@financial-ombudsman.org.uk
                            </NavLink>
                            ,
                          </li>
                          <li>
                            By post: The Financial Ombudsman Service Exchange
                            Tower, London, E14 9SR
                          </li>
                          <li>
                            Phone:&nbsp;
                            <NavLink to="tel:08000234567">
                              0800 023 4 567
                            </NavLink>
                            (free), &nbsp;
                            <NavLink to="tel:03001239123">
                              0300 123 9 123
                            </NavLink>
                            , weekdays from 8:00am - 8:00pm (GMT), and on
                            Saturday from 9:00 - 1:00pm (GMT).
                          </li>
                        </ul>
                      </li>
                      <li>
                        If you're not in the UK, call&nbsp;
                        <NavLink to="tel:08000568330">0800 056 8330</NavLink>
                        &nbsp; | &nbsp;
                        <NavLink to="tel:07728918745">0772 891 8745</NavLink>.
                      </li>
                    </ul>

                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      FOS will not charge you for making a complaint and if you
                      are not satisfied with the outcome you can still bring
                      legal proceedings. In addition, please note that disputes
                      may also be submitted for online resolution via the
                      European Online Dispute Resolution Platform accessible
                      at:&nbsp;
                      <NavLink to="http://ec.europa.eu/odr" target="_blank">
                        http://ec.europa.eu/odr
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== End Complaint Policy Section ======*/}
          <Footer />
        </>
      )}
    </>
  );
}

export default ComplaintPolicy;

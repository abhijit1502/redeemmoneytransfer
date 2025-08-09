import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import "../../css/steps.css";
import CookieConsent from "../../Components/CookieConsent";
import General_FAQ_Seo from "../../SEO/General_FAQ_Seo";

function GeneralFAQ() {
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
      <General_FAQ_Seo />
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
                General FAQs
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
                  General FAQs
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
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Is Redeem LLC Regulated?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Yes, Redeem LLC (RMT) is regulated by the SRO
                              PolyReg in Switzerland. We conform to the rules
                              and regulations in the countries we remit to
                              through our trusted and reliable distributors and
                              Payout Partners.
                            </p>
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
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Do you have a Physical location or is RMT an online
                            business?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              With the lockdowns and social distancing policies
                              in most countries, We are currently providing
                              online services with the partners in the countries
                              we service. However, in the future, we intend to
                              have a physical presence in some major locations.
                              Our current online business operational model
                              allows RMT users to send money from the comfort of
                              their homes with highly competitive rates using
                              our secure and fast interface.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Is your Money Safe with Us?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Yes, We hold customer money in a dedicated
                              business account, independent of our business
                              operational account. All Remit requests are
                              matched with a corresponding transaction id and
                              leaves our account shortly after the request is
                              initiated, thereby reducing financial risk or loss
                              to customer money.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            How much money can I transfer?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              We are providing transaction daily limits up to
                              CHF 1’000.00 and a Monthly limit up to 5’000.00
                              CHF. For amounts higher than the monthly limit,
                              please contact us. Irrespective of these
                              thresholds, RMT can at any time request further
                              documents from each customer in compliance with
                              the SRO AML policies.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={600}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How long does it take to deliver funds to the
                            receiver?
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              We aim to get the remittance to the receiver
                              within 1 working day; in exceptional cases where
                              we cannot get it to the receiver within 48hrs, we
                              will contact you to provide an explanation and
                              revised time of delivery.
                            </p>
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
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            How do I open a Redeem LLC account?
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Use the 'Sign-up' button on our website and follow
                              the instructions. On successful verification of
                              your details and documents by our registration
                              team, we will activate your account to make
                              remittances.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            Is my Data Safe with Redeem LLC?
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Redeem LLC is secured in line with the Switzerland
                              Data Protection, hence we ensure any data you
                              provide to us is confidential and held securely.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button border-bottom-dark-500 collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            Does Redeem LLC need my bank details for remittance
                            request?
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              <strong>Yes and No.</strong>
                            </p>
                            <p className="fw-normal tw-text-lg text-dark-600">
                              <strong>Yes</strong>
                              <br />
                              if during a transaction you use our{" "}
                              <strong>e-Check</strong> which is a recognized
                              payment processor/interface to make online
                              payments, We require customer bank details for
                              remittance request;{" "}
                              <strong>
                                the customer bank details must match the name(s)
                                used during opening of your Redeem LLC Account.
                              </strong>{" "}
                              The money will be booked directly from your bank
                              account. You (Customer) will be solely responsible
                              for any charges from using this payment processor.
                              The charges will be made clear to you and
                              separated from the amount RMT will send to your
                              receiver. Anyone with a savings account can pay by
                              eCheck.
                            </p>
                            <p className="fw-normal tw-text-lg text-dark-600 mt-3">
                              To make a payment with an e-Check, you simply
                              provide the following information:
                              <ul>
                                <li>Your IBAN number *</li>
                                <li>Your bank account number *</li>
                                <li>The name of your Bank *</li>
                                <li>The name on your bank account *</li>
                              </ul>
                              <em>
                                <strong>
                                  * This information is printed on your EC
                                  cards.
                                </strong>
                              </em>
                            </p>

                            <p className="fw-normal tw-text-lg text-dark-600 mt-3">
                              <strong>No</strong>
                              <br />
                              If you decide to manually transfer the money
                              directly to Our Bank account. <strong>The bank details
                              from which the transfer is initiated must match
                              the name(s) used during opening of your Redeem LLC
                              Account.</strong><br/>Our customers can choose either of both
                              options.
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
        </>
      )}
    </>
  );
}

export default GeneralFAQ;

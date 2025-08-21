import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import Seo from '../../Components/Seo';
import { privacyPolicySeo } from "../../seo-configs";

function PrivacyPolicy() {
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

    // Disable right-click & copy shortcuts
    useEffect(() => {
      const handleContextMenu = (e) => e.preventDefault();
      const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && ["c", "u", "x", "s", "a"].includes(e.key.toLowerCase())) {
          e.preventDefault();
        }
      };
  
      document.addEventListener("contextmenu", handleContextMenu);
      document.addEventListener("keydown", handleKeyDown);
  
      return () => {
        document.removeEventListener("contextmenu", handleContextMenu);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

  return (
    <>
      <Seo {...privacyPolicySeo} />
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
                Privacy Policy
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
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>
          {/* ==================== Breadcrumb End Here ==================== */}

          {/*====== Start Cookies Policy Section ======*/}
          <section className="py-80 no-copy">
            <div className="container">
              <div className="d-flex tw-gap-10 w-100 flex-wrap">
                <div className="mx-auto text-center align-items-center justify-content-center">
                  <h3
                    className="fw-normal tw-mb-3 cursor-big text-dark-600"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    Redeem GmbH Privacy Policy
                  </h3>
                </div>
                <div className="w-100">
                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Our Privacy Policy
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Redeem is committed to respecting and protecting your
                      privacy. We value your trust and want you to understand
                      how we collect, use, protect, disclose and otherwise
                      process information about you in accordance with the Data
                      Protection in Switzerland. You can be rest assured that
                      your Personal Information will only be used by Redeem GmbH
                      in accordance with this policy.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      This privacy statement applies to personal information we
                      collect about you, for example when you visit our websites
                      or mobile applications or contact us by phone, or online.
                      We want to ensure you are aware of our practices for
                      collecting, using, protecting disclosing, and otherwise
                      processing personal information, which is information
                      about a person that can be used to identify that person.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      What We Collect
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      The type(s) of personal information we collect depends on
                      the products or services you have requested from us.
                      Personal information we collect can include: (i)
                      government identifiers (such as ID, passport number, or
                      driver's license number); (ii) transaction information
                      (such as name and other information about you and the
                      party on the other side of your transaction, transaction
                      number, amount, date sent, and receive data), purchase
                      history, and Redeem account information (such as account
                      number, user name, and password); (iii) financial
                      information such as bank account or credit card account
                      information; (iv) contact information such as name,
                      address, telephone number, or email address; and (v) such
                      other personal information as we may collect with your
                      consent or as permitted or required by law.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We collect your personal information directly from you
                      and/or from the party on the other side of your
                      transaction, for example, when you tell us where to send
                      money or who should receive the money; give us your
                      contact information; or show your government issued ID.
                      Generally, personal information is collected from you on
                      transaction forms, by telephone, or at our websites or
                      mobile applications when you request our products or
                      services, manage your online account(s), or manage your
                      account(s) and preferences. We may also collect
                      information about you from third-party reference sources,
                      vendors, and clearinghouse services as part of our
                      verification processes or otherwise in connection with
                      your use of our products or services.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      How We Use It
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We use personal information in a number of ways, including
                      (i) for our everyday business purposes such as to process
                      your transactions, maintain your account(s), and manage
                      and administer our business and records, to undertake
                      market research, to prevent fraud, abuse, and other actual
                      and potential prohibited or illegal activities, to meet
                      legal, regulatory, insurance, security and processing
                      requirements, and to respond to court orders and legal
                      investigations, or report to credit bureaus; (ii) for our
                      marketing purposes such as to offer our or our agents'
                      products and services to you, and to tailor offers,
                      coupons, and incentives we believe may be of interest to
                      you; (iii) for joint marketing with other financial
                      companies; (iv) for our affiliates' everyday business
                      purposes; (v) for our affiliates to market to you; (vi)
                      for non-affiliates such as our agents to market to you;
                      and (vii) otherwise with consent or as permitted or
                      required by applicable law.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We may store personal information on databases in the EU
                      or Switzerland for these purposes. As permitted by
                      applicable law, we may merge personal information with
                      public information or other information received from
                      third-party sources to update contact information or to
                      enhance demographic profiles. Personal information will be
                      subject to the laws of the country in which it is located,
                      including lawful access requests by government
                      authorities. The laws of these countries (which may
                      include countries outside the European Economic Area) may
                      not have similar data protection laws to the European
                      Economic Area.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      How We Disclose It
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We may disclose personal information, as described above,
                      to our affiliates and/or our agents to assist us in our
                      business activities for the uses described in "How We Use
                      It", and for other purposes as permitted or required by
                      applicable law and international conventions and treaties.
                      Disclosures permitted or required by law and international
                      conventions and treaties may include cooperation with
                      criminal or government investigations, fraud prevention
                      and detection, and responses to a court order or subpoena.
                      We may be required to disclose your personal information
                      to relevant national, state and local law enforcement
                      authorities in Switzerland and other countries, which law
                      enforcement authorities may further, disclose the
                      information. If you are a receiver of a transaction, we
                      may also disclose your personal information to the sender.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We may disclose some or all of the personal information to
                      service providers for the purposes of processing requested
                      transactions or to perform business support functions on
                      our behalf, including marketing and similar services. Our
                      agreements with these service providers, who may be
                      located across the globe, contain confidentiality
                      provisions and restrictions on using this information for
                      any other purposes.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      If Redeem GmbH becomes involved in a proposed or actual
                      merger, acquisition or any form of sale of some or all its
                      assets, we may disclose personal information to third
                      parties in connection with the evaluation of the
                      transaction. The surviving company, or the acquiring
                      company in the case of a sale of assets, would have access
                      to personal information that would continue to be subject
                      to this privacy statement.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Choice and Consent
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We will not use, disclose or otherwise process personal
                      information about you in ways incompatible with the ones
                      described above without informing you and offering you a
                      choice as provided for by applicable law. You may choose
                      whether to receive direct marketing offers from us. To the
                      extent that applicable law requires express consent or
                      "opt-in" for the collection and use of certain types of
                      personal information, We will maintain processes and
                      procedures to ensure such information is collected with
                      express consent. In any event, each promotional email
                      message we send you will also contain instructions on how
                      to unsubscribe. When you provide us with personal
                      information about a third party, you warrant that you have
                      the consent of that individual to provide us that personal
                      information.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      You may withdraw your consent to our use and disclosure of
                      personal information at any time, subject to contractual
                      and legal restrictions. You may send an e-mail to{" "}
                      <NavLink
                        to="mailto:customercare@redeemtransfer.com"
                        target="_blank"
                      >
                        customercare@redeemtransfer.com
                      </NavLink>
                      , or logon to our websites and update your account(s).
                      Note that if you withdraw your consent to certain uses of
                      your personal information, we may no longer be able to
                      provide certain of our products or services. Note also
                      that where we have provided or are providing services to
                      you, your consent will be valid for so long as necessary
                      to fulfil the purposes described in this privacy statement
                      or otherwise at the time of collection, and you may not be
                      permitted to withdraw consent to certain necessary uses
                      and disclosures (for example, maintaining reasonable
                      business and transaction records).
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Accuracy and Access
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We are constantly striving to ensure that the information
                      we collect and use about you is accurate for its intended
                      purpose and therefore we have processes to help maintain
                      the accuracy of the personal information we collect. You
                      can request access to your personal information or help us
                      maintain accurate records by informing us of changes or
                      modifications to your personal information by email or
                      logging on to our website to review and correct
                      information about yourself.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We will take reasonable steps to verify your identity
                      before granting you access or enabling you to make
                      corrections. We will retain personal information only for
                      the time period needed for business purposes or as
                      required by law and will securely destroy such information
                      thereafter.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Data Security
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We use physical, technical, and administrative security
                      measures to protect against loss, misuse, and alteration
                      of personal information under our control. We apply high
                      quality, robust safety-oriented industry-standard
                      practices and security measures to safeguard such personal
                      information we collect.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Access to personal information is restricted to employees
                      and service providers who need to have access to that
                      information as described in this privacy statement, in
                      accordance with applicable laws. Our service providers are
                      required to observe standards for the security,
                      collection; use and sharing of personal information, and
                      to comply with applicable law.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Preventing Identity Theft
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Please do not send confidential personal information such
                      as passport numbers, government identification numbers, or
                      account numbers to us via an unsecured email message or
                      medium. You may send personal confidential information to
                      us via posted mail, phone, or using the "Contact Us" link
                      available on our website. Do not be misled by emails that
                      appear to be from us and ask for personal information. If
                      you receive a suspicious email requesting your personal
                      information, please forward the email immediately to{" "}
                      <NavLink
                        to="mailto:customercare@redeemtransfer.com"
                        target="_blank"
                      >
                        customercare@redeemtransfer.com
                      </NavLink>
                      .
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Browsing
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      When you use our websites, we automatically collect
                      certain standard technical information. Examples of this
                      standard type of information include the type of Internet
                      browser you use, the files you requested, the domain name
                      and country from which you request information. We use
                      this type of technical information to improve our website,
                      to make our website function correctly, and to better
                      understand how visitors use our website. As part of our
                      efforts to protect consumers from fraud, this information
                      is also used to authenticate users to the website, if
                      necessary.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Cookies
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Please see Redeem's Cookie Policy
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      External Websites
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Our websites may be linked to or from third-party
                      websites. We is not responsible for the content or privacy
                      practices of websites that are linked to or from our
                      websites.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Use by Children
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Our websites and App are not intended for use by minors.
                      We will not knowingly collect personal information from or
                      market to children without the consent of a parent or
                      legal guardian.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Change in Privacy Statement
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      At Redeem, your trust is one of our most important assets.
                      To improve your overall experience with us, the services
                      provided on our websites may change at any time without
                      prior notice. We will continually work to protect the
                      privacy of our consumers and regularly review our privacy
                      policies. As a result, this Privacy Statement may change
                      from time to time in the future. This website will always
                      contain the most current privacy statements. You agree to
                      revisit this page regularly and your continued use of our
                      website, app and services indicate your acceptance of the
                      changes.
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      Contacting Us
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Should you have further questions regarding our privacy
                      statement, about how your personal information is used, or
                      about how to exercise your right of access, rectification,
                      or objection as per applicable law, you can contact us
                      directly at the address below, and we will gladly handle
                      your request:
                    </p>
                    <ul
                      className="ul2 mb-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        Email:&nbsp;
                        <NavLink
                          to="mailto:customercare@redeemtransfer.com"
                          target="_blank"
                        >
                          customercare@redeemtransfer.com
                        </NavLink>
                      </li>
                      <li>
                        Tel/SMS/WhatsApp:&nbsp;
                        <NavLink to="tel:41779873231" target="_blank">
                          +41779873231
                        </NavLink>
                      </li>                     
                    </ul>
                     <div className="d-flex align-items-center fw-normal tw-text-lg text-dark-500 tw-mb-6 aos-init aos-animate" data-aos="fade-up"
                      data-aos-duration={1000}>
                        Social Media:&nbsp;
                        <NavLink to="#">
                          <i class="fa-brands fa-2x fa-square-facebook"></i>
                        </NavLink>
                        <NavLink to="#">
                          <i class="fa-brands fa-2x fa-square-x-twitter"></i>
                        </NavLink>
                        <NavLink to="#">
                          <i class="fa-brands fa-2x fa-square-instagram"></i>
                        </NavLink>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*====== End Cookies Policy Section ======*/}
          <Footer />
        </>
      )}
    </>
  );
}

export default PrivacyPolicy;

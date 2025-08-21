import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import Seo from "../../Components/Seo";
import { termsConditionsSeo } from "../../seo-configs";

function TermsandConditions() {
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
      <Seo {...termsConditionsSeo} />
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
                Terms and Conditions
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
                  Terms and Conditions
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
                  <h6
                    className="fw-normal tw-mb-3 cursor-big text-dark-600 line-height-105"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    PLEASE READ OUR TERMS AND CONDITIONS BEFORE YOU ACCEPT THEM.
                    THEY MAY CONTAIN LIMITATIONS ON THE SCOPE OF OUR OBLIGATIONS
                    TO YOU, AS WELL AS LIMITATIONS AND EXEMPTIONS FROM OUR
                    LIABILITY FOR DAMAGES THAT YOU MAY SUFFER AS THE RESULT OF
                    USING REDEEM GMBH TRANSFER SERVICES.
                  </h6>
                </div>
                <div className="w-100">
                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      1. About Us
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-700 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Redeem GmbH is a company registered under the laws of
                      Switzerland with company UID identification number
                      CHE-358.466.446. As a member of PolyReg (
                      <a href="https://www.polyreg.ch" target="_blank">
                        https://www.polyreg.ch
                      </a>
                      ), a Self-Regulatory Organisation (SRO) officially
                      recognised and approved by Switzerland's Federal Financial
                      Market Supervisory Authority (FINMA), we have been
                      approved to operate in Switzerland as a Financial
                      Intermediary (FI).
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-700 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      By using the Website, App, service, you confirm that you
                      have understood and accept Our Terms and Conditions (T&C)
                      including all legal information and terms of use as
                      presented here. If you do not accept any part of this T&C,
                      please refrain from using our Website, App, or services.
                    </p>
                    <ul
                      className="ul2 mb-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        <strong>Redeem GmbH</strong> refers to a registered
                        business entity providing cross border payment,
                        remittance, and money transfer from point a (source) to
                        point b (destination).
                      </li>
                      <li>
                        <strong>
                          Redeem GmbH Website, App, Website, or Application
                        </strong>{" "}
                        will refer to the Website, App or Application which We
                        operate to provide you the cross-border payment,
                        remittance, and money transfer services.
                      </li>
                      <li>
                        <strong>You/Yours/Your</strong> will refer to every and
                        any person using Redeem GmbH Website or App or
                        Application as a Customer.
                      </li>
                      <li>
                        <strong>We/Us/Our</strong> will refer to Redeem GmbH.
                      </li>
                      <li>
                        <strong>Receiver</strong> is any person named as the
                        beneficiary of the money transfer.
                      </li>
                      <li>
                        <strong>Customer</strong> the person who initiates a
                        money transfer using Our App, Website.
                      </li>
                      <li>
                        <strong>Business Time(s)</strong> is the approved
                        general business hours for any local office location we
                        operate from.
                      </li>
                      <li>
                        <strong>Transaction</strong> is any transaction that a
                        customer (You) initiates through our portal or OTC at
                        our physical office.
                      </li>
                      <li>
                        <strong>Payment Method</strong> refers to the options
                        available to the Customer, to initiate and fund a
                        cross-border payment, remittance, and money transfer
                        through us and includes bank account and other payment
                        methods.
                      </li>
                      <li>
                        <strong>Prohibited Purpose</strong> is the sending of
                        money for any unlawful purposes e.g., sending a payment
                        to yourself as the Receiver, creating more than one
                        profiles.
                      </li>
                    </ul>

                    <ul
                      className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        <span>1.1</span>{" "}
                        <h5>
                          We have our main physical office at Wartstr 22, 8400
                          Winterthur and offer our services.
                        </h5>
                      </li>
                    </ul>

                    <ul
                      className="ul2 mb-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        Online:&nbsp; Available 24/7 via our Website and App.
                      </li>
                      <li>
                        OTC:&nbsp; @ Our Physical office
                        <br />
                        Monday - Fridays: 10:00 - 18:00
                        <br />
                        Saturday: 10:00 - 16:00
                      </li>
                    </ul>

                    <p
                      className="fw-normal tw-text-lg text-dark-700 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Customers can contact Redeem GmbH using the following
                      medium,
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
                    <div
                      className="d-flex align-items-center fw-normal tw-text-lg text-dark-700 tw-mb-6 aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Social Media:&nbsp;
                      <NavLink
                        to="https://x.com/RedeemTransfer"
                        target="_blank"
                      >
                        <i class="fa-brands fa-2x fa-square-x-twitter"></i>
                      </NavLink>&nbsp;
                      <NavLink
                        to="https://www.facebook.com/RedeemTransfer"
                        target="_blank"
                      >
                        <i class="fa-brands fa-2x fa-square-facebook"></i>
                      </NavLink>&nbsp;
                      <NavLink
                        to="https://www.instagram.com/redeemtransfer/"
                        target="_blank"
                      >
                        <i class="fa-brands fa-2x fa-square-instagram"></i>
                      </NavLink>&nbsp;
                    </div>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      2. Our Services
                    </h4>
                    <ul
                      className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        2.0 Redeem GmbH offers cross border payment, remittance,
                        currency exchange, and international money transfer. You
                        must be at least 18 years old to use Our Service.
                      </li>

                      <li>
                        2.1 All transactions conducted with us will be assigned
                        an individual transaction reference number.
                      </li>

                      <li>
                        2.2 All customers have a 30-day cumulative limit of
                        CHF/EUR 5000. Where a customer wishes to send more,
                        he/she/they will be required to provide further
                        documents e.g., bank statement, utility bills, employer
                        work contract, latest salary payment slip, lottery win
                        certificate, certificate of inheritance/payment, etc.
                      </li>

                      <li>
                        2.3 By completing and consenting to the information
                        required to make a money transfer and by accepting our
                        Terms and Conditions (T&C), the customer approves Redeem
                        GmbH to execute a specific money transfer on their
                        behalf. Every individual transaction will constitute a
                        separate agreement between Redeem GmbH and the Customer
                        which is limited to the execution of ONLY a specific
                        transaction associated with a transaction reference
                        number. At no point in time is a framework agreement
                        concluded between Yourself and Us which obligates Us to
                        execute concurrent individual and subsequent money
                        transfers on Your behalf.
                      </li>

                      <li>
                        2.4 Regulatory requirements: We undertake to make the
                        agreed transfer funds available to the recipients via
                        either Bank, Mobile Wallet, Cash-Pick up at the latest
                        24 Hours following the Business Day on which the funds
                        were received on our Bank account ("Day of Receipt") or
                        paid over the counter (OTC) at our physical office. The
                        moment of receipt takes effect when We receive the funds
                        to be transferred along with all associated fees and the
                        transfer Identification Number / Reference. For
                        transaction whose settlement funds are sent to our Bank
                        account, all funds not received within 48 Hours of
                        initiating the transfer(s) will lead to cancellation of
                        the transaction(s).
                      </li>

                      <li>
                        2.5 Applicable Anti Money Laundering and Anti-Terrorist
                        Laws prohibits money transmitters from doing business
                        with certain individuals or countries; Redeem GmbH
                        screens all Transactions against lists of names provided
                        by the governments of the countries and territories in
                        which We do business, designated Nationals and Blocked
                        Persons list and other lists including the USA's -
                        Office of Foreign Assets Control (OFAC) and the European
                        Union. If a potential match is identified, we will
                        research the Transaction to determine if the name
                        matched is indeed the individual on the relevant list.
                        For this purpose, we are entitled to request from the
                        Customer or the designated customer and receiver
                        additional details and information which may cause the
                        transaction to be delayed. This is a legal requirement
                        for all transactions which Redeem GmbH will process.
                      </li>

                      <li>
                        2.6 Transfer Fees: Information about transfer fees for a
                        transaction will be indicated in our website or App
                        after the customer has entered all required fields. The
                        customer shall bear all fees (local taxes and service
                        charges) shown in the transaction details. The receiver
                        may incur additional fees for receiving the customer's
                        funds through an account-based money transfer to a bank
                        account. Money transfers are sent to a receiver's local
                        currency account. The receiving institution may reject
                        the money transfer. The Customer will be notified of the
                        transaction status via Phone call, Email or SMS.
                      </li>

                      <li>
                        2.7 We only provide the service of transferring fund at
                        our physical office, Website or App or through our
                        approved agents. Customer using our website or app must
                        during registration submit his or her identity in
                        addition to all other information we will require before
                        approving the customer to use our services. For every
                        transaction, all details required by Redeem GmbH
                        especially the name of the Receiver, relationship with
                        Receiver, Receiver's bank account information and
                        country, amount of money to be transferred, source of
                        fund, purpose of transfer and all other information and
                        requirements at the time the approval for transfer was
                        given to Redeem GmbH must be submitted.
                      </li>

                      <li>
                        2.8 Payments could be affected if the transaction
                        information provided by the Customer contains mistakes.
                        In the event of inconsistencies in the Information
                        provided by the customer (including accounts, receivers
                        name) etc., the transfer will be blocked for maximum 5
                        working days asking the Customer to provide all relevant
                        information before the transaction will be executed.
                        Such cases could be reported by Redeem GmbH to PolyReg
                        and Switzerland Financial Regulatory Body if any acts of
                        Money Laundering are suspected and perceived.
                      </li>

                      <li>
                        2.9 Transfer payments will be made only in the currency
                        chosen by the Customer during the transaction. If any
                        unsupported currency is exhibited on our platform and
                        the customer initiates the transfer, we will cancel this
                        transaction and inform the Customer.
                      </li>

                      <li>
                        2.10 We calculate the exchange based on best
                        commercially available interbank rates as provided by
                        our payout partners. The rates could change several
                        times each day in line with the closing rates of global
                        financial markets. The exchange rate for any transaction
                        is shown to you after selecting the destination country
                        in the required fields. The amount which the receiver
                        will receive in the local currency will also be
                        displayed.
                      </li>

                      <li>
                        2.11 SMS - If permitted by the Customer and according to
                        local laws, Redeem GmbH can offer SMS to be sent to the
                        Customer's mobile number provided at the time of
                        registration or during the transaction confirmation. We
                        may offer to send SMS notification to the Customer that
                        the transferred funds have been paid to the Receivers.
                        When We offer SMS notification and a customer chooses
                        this option, some additional charges may apply as this
                        service is offered through 3rd party APIs. The amount
                        charged will be shown to the Customer and he can select
                        or opt out of this option. We are not responsible for
                        any charges associated with receiving SMS messages. We
                        will send SMS messages to a gateway for forwarding;
                        however, forwarding is the responsibility of third
                        parties, and cannot be guaranteed. We are not
                        responsible for technical malfunctions that occur
                        outside of our proprietary systems.
                      </li>
                    </ul>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      3. Our Responsibilities
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-700 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We are willing to provide to our customers a fast, secure,
                      reliable, and easy money transfer service(s) in accordance
                      with the Terms and Conditions in the form of C2C or B2B,
                      B2C, payments and to exercise reasonable care.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-700 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We are not obliged to accept any instruction to execute
                      any Transaction and we will not be liable in any way for
                      declining any such instruction or for withdrawing,
                      terminating, or restricting our services to You in any
                      way.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-700 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Our Terms and Conditions shall apply to any instruction
                      which we choose to accept. Inspite of any prior agreement
                      to initiate a money transfer with us, we will not assume
                      any liability for:
                    </p>
                    <ul
                      className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        3.1 goods or services which You pay for using any of Our
                        Services, and here in particular their delivery.
                      </li>

                      <li>
                        3.2 malfunctions in communication facilities over which
                        We have no control.
                      </li>

                      <li>
                        3.3 the loss of data or the delay in transmissions
                        caused by using an Internet service provider or a
                        browser or other software over which We have no control.
                      </li>

                      <li>3.4 viruses originating from third parties.</li>

                      <li>
                        3.5 errors on Our Website resulting in incomplete or
                        wrong information that You or a third party provided.
                      </li>

                      <li>
                        3.6 any unauthorised use or interception of information
                        prior to reaching Our Website or App; or the
                        unauthorised use of or unauthorised access to data in
                        conjunction with Yourself or Your Transactions which We
                        process unless such use or such access is the result of
                        negligence on Our behalf.
                      </li>
                    </ul>

                    <h6
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      We are under no obligation towards You to initiate or
                      execute a money transfer if:
                    </h6>
                    <ul
                      className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        3.7 We are unable to obtain sufficient evidence of Your
                        identity.
                      </li>
                      <li>
                        3.8 We have reason to believe that the Transaction
                        information is incorrect, unauthorised, or forged or
                        related to Fraud, Money Laundering Activity, or any
                        means of Funding Terrorism, or You have provided Us with
                        wrong or incomplete information, or We do not receive
                        Your Transaction information in a timely manner to
                        guarantee the timely execution of the requested
                        transfer.
                      </li>
                      <li>
                        3.9 We do not assume any liability for damages caused
                        from the non-payment or late payment of a money transfer
                        to a Receiver or if Our Online Service fails to execute
                        a Transaction by reason of any of these matters.
                      </li>
                      <li>
                        3.10 We are entitled to either partially or fully cease
                        operating Our Website or App if circumstances that are
                        beyond Our control compel Us to take such action and
                        which We therefore consider appropriate (“Events Outside
                        Our Control”). If the services provided should be
                        interrupted for whatever reason (whether by Us, a
                        third-party provider or in any other manner), We shall
                        take adequate measures to keep the duration of this
                        interruption as short as possible and will Inform Our
                        Customers.
                        <ul
                          className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                          style={{ listStyle: "circle" }}
                          data-aos="fade-up"
                          data-aos-duration={900}
                        >
                          <li>
                            3.10.1 We have the right to refuse to provide Our
                            Service to You either partially or in full if such
                            use constitutes a violation (fraud, money laundering
                            or financing terrorism) against applicable law, a
                            court order, or requirements of a regulatory or
                            government authority or any other body having
                            jurisdiction over us or, if We consider such a step
                            necessary to protect Our own interests. In such
                            case, we will notify You accordingly if permitted by
                            Law unless We are prevented from doing so by the Law
                            or for legal reasons.
                          </li>
                          <li>
                            3.10.2 Our communication with You is conducted via
                            Phone, Internet (Email, etc.) and or SMS. However,
                            this has no effect on Your right to contact Us using
                            the email and or through the phone numbers on our
                            website or App if circumstances require this.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      4. Your Responsibilities
                    </h4>
                    <ul
                      className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        4.1. You declare that You will pay to Us Our fees for
                        every transaction which You initiate via Our platform
                        (Website, App) or at Our Physical office.
                      </li>
                      <li>
                        4.2. You consent to pay the amount of the transfer
                        including any fees for each specific Transaction prior
                        to Us executing the transfer or any other Transaction.
                        You will be informed ab-initio of the precise amount
                        which your recipient will receive, and you can decline
                        or accept.
                      </li>
                      <li>
                        4.3. You consent to and acknowledge the following:
                        <ul
                          className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                          style={{ listStyle: "circle" }}
                          data-aos="fade-up"
                          data-aos-duration={900}
                        >
                          <li>
                            4.3.1. The information provided to affect any
                            transaction is true, accurate, current, and
                            complete.
                          </li>
                          <li>
                            4.3.2. You transfer money only to beneficiaries that
                            You know personally.
                          </li>
                          <li>
                            4.3.3. You shall not use the Our Service for illegal
                            purposes.
                          </li>
                          <li>
                            4.3.4. You shall not use Our Service for Prohibited
                            purposes.
                          </li>
                          <li>
                            4.3.5. You will not initiate transaction requests
                            which violate Our Terms and Conditions.
                          </li>
                        </ul>
                      </li>
                      <li>
                        4.4. You consent to and acknowledge that We may forward
                        any particulars about You and the services that We
                        provided to You, if necessary, to regulatory or
                        government authorities or other related bodies if:
                        <ul
                          className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                          style={{ listStyle: "circle" }}
                          data-aos="fade-up"
                          data-aos-duration={900}
                        >
                          <li>4.4.1. We are obligated by law to do so; or</li>
                          <li>
                            4.4.2. We are of the opinion that such a disclosure
                            may assist in the prevention of fraud, money
                            laundering, terrorism, or other related crimes.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      5. Customer Service
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-700 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      If You detect errors or encounter problems, please contact
                      Us by
                      <br />
                      Email:{" "}
                      <a href="mailto:customercare@redeemtransfer.com">
                        customercare@redeemtransfer.com
                      </a>
                      ,{" "}
                      <a href="mailto:info@redeemtransfer.com">
                        info@redeemtransfer.com
                      </a>
                      <br />
                      Tel/SMS/WhatsApp:{" "}
                      <a href="tel:+41779873231">+41 77 9873 231</a>
                    </p>
                    <ul
                      className="ul4 mb-2 mt-1 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        5.1 Password and security
                        <ul
                          className="ul4 mb-2 mrl tw-text-lg aos-init aos-animate"
                          style={{ listStyle: "circle" }}
                          data-aos="fade-up"
                          data-aos-duration={900}
                        >
                          <li>
                            5.1.1. Prior to using Our Website and App, you will
                            be asked to provide a password and a valid e-mail
                            address and or Your name.
                          </li>
                          <li>
                            5.1.2. You are personally responsible for safe
                            keeping of Your Password, username, and other
                            relevant information.
                          </li>
                          <li>
                            5.1.3. The password and the username must not be
                            used by any other person than Yourself.
                          </li>
                          <li>
                            5.1.4. It is Your responsibility to keep Your
                            password and Your username safe as well as all
                            Transactions carried out using Your username. NEVER
                            SHARE YOUR PASSWORD WITH ANYBODY AND DO NOT WRITE IT
                            DOWN ANYWHERE.
                          </li>
                          <li>
                            5.1.5. You consent to notifying Us immediately of
                            any unauthorised use of Your password, username or
                            of any other breach of security.
                          </li>
                          <li>
                            5.1.6. In the event of loss, theft, copy, misuse, or
                            unauthorised use of the Transaction data where You
                            believe we may have performed a Transaction You did
                            not authorise Us to perform, or where You believe we
                            may have failed to perform or incorrectly perform a
                            Transaction, you must immediately inform Us (via
                            Phone) upon becoming aware of such events. Such will
                            immediately be investigated by Redeem GmbH.
                          </li>
                        </ul>
                      </li>
                      <li>
                        5.2 Unauthorised Usage and Information breach
                        <p>
                          Once You have informed Us of the unauthorised use of
                          Your password, Email or username,
                        </p>
                        <ul
                          className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                          style={{ listStyle: "circle" }}
                          data-aos="fade-up"
                          data-aos-duration={900}
                        >
                          <li>
                            5.2.1. We will immediate take all the necessary
                            steps to prevent any further use of your account.
                          </li>
                          <li>
                            5.2.2. We will inform You of such steps promptly
                            after having taken them and give the reasons for
                            such steps unless We are prevented from doing so for
                            legal reasons.
                          </li>
                          <li>
                            5.2.3. Prompting these steps does not make Us liable
                            for any loss or damage that are the result of Your
                            failure to comply with Your duty in accordance with
                            this paragraph/section and Our Terms and Conditions.
                          </li>
                        </ul>
                      </li>
                      <li>
                        5.3 Disclosing information to third parties
                        <ul
                          className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                          style={{ listStyle: "circle" }}
                          data-aos="fade-up"
                          data-aos-duration={900}
                        >
                          <li>
                            5.3.1 We will use and process your personal
                            information as described in Our Privacy Statement
                            and you explicitly consent thereto. Click here for
                            Our{" "}
                            <NavLink
                              to="https://www.redeemtransfer.com/privacy-policy.html"
                              target="_blank"
                            >
                              Privacy policy Statement
                            </NavLink>
                            .
                          </li>
                          <li>
                            5.3.2 We are entitled to amend Our Privacy Statement
                            at any time.
                          </li>
                          <li>
                            5.3.3 We reserve the right to verify the details
                            that You have provided.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      6. LIABILITY
                    </h4>
                    <ul
                      className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        6.1. Exclusion of liability
                        <ul
                          className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                          style={{ listStyle: "circle" }}
                          data-aos="fade-up"
                          data-aos-duration={900}
                        >
                          <li>
                            6.1.1. We will have no liability, if We fail to
                            perform or incorrectly perform the Transaction where
                            the reason for this was due to Events Outside Our
                            Control or Our statutory obligations.
                          </li>
                          <li>
                            6.1.2. We do not assume liability for damage that is
                            due to any unusual and unforeseeable events over
                            which We have no control and whose consequences, in
                            spite of exercising due care, We could not have
                            avoided (caused, for example by Events Outside Our
                            Control, failure of telecommunication lines, civil
                            unrest, COVID 19 or other related issues, Lockdowns,
                            Hospitalization, Quarantine, war or other events
                            such as industrial action or lockouts over which We
                            have no control). This applies equally to cases in
                            which We are bound by any orders under Community
                            legislation, national, court or administrative
                            orders stating otherwise.
                          </li>
                          <li>
                            6.1.3. We will not assume any liability if the
                            unauthorised or incorrectly executed transaction is
                            carried out by a third party or between third
                            parties You have instructed before We receive Your
                            payment for the transfer or any other Transaction.
                            You should contact the relevant third party promptly
                            and inform them of the circumstances of the
                            unauthorised or incorrectly executed transaction.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      7. INTELLECTUAL PROPERTY
                    </h4>
                    <ul
                      className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        7.1. The Redeem GmbH Website, App and their contents
                        pertaining thereto and contained therein (copyrights,
                        logos, database rights, patents, trademarks, and service
                        marks) are the properties of Redeem GmbH LLC (Redeem
                        GmbH GmbH).R
                      </li>
                    </ul>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      8. RIGHT TO RESCIND OR CANCEL A TRANSFER
                    </h4>
                    <ul
                      className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        8.1. You have the right to rescind a money transfer
                        within 2-Hours after sending or approving a transaction.
                        The rescission must be declared to Us in writing via
                        e-mail (
                        <NavLink to="mailto:customercare@redeemtransfer.com">
                          customercare@redeemtransfer.com
                        </NavLink>
                        ) and must contain your signature and reasons for the
                        rescission.
                      </li>
                      <li>
                        8.2. However, this right of rescission does not apply if
                        we have already paid out the funds to the receiver`s
                        Bank before we received your notice of rescission.
                      </li>
                      <li>
                        8.3. When exercising your right of rescission prior to
                        our having paid out the funds to the receiver, we will
                        refund the amount less a charge fee of 10 CHF as
                        administration fees and part of our bank charges.
                      </li>
                    </ul>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      9. SEVERABILITY CLAUSE
                    </h4>
                    <ul
                      className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        9.1. Where one or several of the provisions to these
                        Terms and Conditions are invalid, unlawful, or
                        unenforceable, then this does not affect the validity of
                        the remaining provisions.
                      </li>
                    </ul>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      10. COMPLAINTS, APPLICABLE LAW, JURISDICTION
                    </h4>
                    <ul
                      className="ul4 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>
                        10.1. Should you not be satisfied with Our services
                        under these Terms and conditions, You may make a
                        complaint in writing to Us via Email (
                        <NavLink to="mailto:customercare@redeemtransfer.com">
                          customercare@redeemtransfer.com
                        </NavLink>
                        ) or any of the contact details published on our
                        website.
                      </li>
                    </ul>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      11. Restricted Jurisdictions and Businesses
                    </h4>
                    <p className="fw-normal tw-text-lg text-dark-700 tw-mb-6">
                      We will not onboard clients who have any relation with
                      either the jurisdictions or business lines listed below.
                    </p>
                    <h5
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      RESTRICTED JURIDICTIONS
                    </h5>
                    <ul
                      className="ul2 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>Afghanistan</li>
                      <li>Belarus</li>
                      <li>Bosnia and Herzegovina</li>
                      <li>Burundi</li>
                      <li>Central African Republic</li>
                      <li>Congo (Democratic Republic of the)</li>
                      <li>Cuba</li>
                      <li>Eritrea</li>
                      <li>Haiti</li>
                      <li>Iran (Islamic Republic of)</li>
                      <li>Iraq</li>
                      <li>Korea (Democratic People's Republic of)</li>
                      <li>Lebanon</li>
                      <li>Libya</li>
                      <li>Montenegro</li>
                      <li>Myanmar</li>
                      <li>Nicaragua</li>
                      <li>Russian Federation</li>
                      <li>Somalia</li>
                      <li>South Sudan</li>
                      <li>Sudan</li>
                      <li>Syrian Arab Republic</li>
                      <li>Ukraine</li>
                      <li>Venezuela (Bolivarian Republic of)</li>
                      <li>Yemen</li>
                      <li>Zimbabwe</li>
                    </ul>

                    <h5
                      className="fw-normal mt-3 text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      RESTRICTED BUSINESS LINES
                    </h5>
                    <ul
                      className="ul2 mb-2 mt-2 mrl tw-text-lg aos-init aos-animate"
                      style={{ listStyle: "circle" }}
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      <li>Alternative medicines (e.g. homoeopathy)</li>
                      <li>
                        Smuggling of person, Illegal goods, smuggled goods, or
                        protected/cultural items & artefacts
                      </li>
                      <li>
                        Commercial activity which infringes on copyrighted
                        material
                      </li>
                      <li>
                        Concierge services (ad-Hoc services without a set
                        business model, e.g. fulfilling custom client requests)
                      </li>
                      <li>
                        Dating services (dating apps, matchmaking sites;
                        coaching/advice providers to increase dating success)
                      </li>
                      <li>
                        Digital games (Merchants distributing game keys; in-app
                        purchases within games (such as buying in-app game
                        currencies))
                      </li>
                      <li>
                        Electronic and surveillance equipment or software
                        (Illegal telecommunications equipment, jamming
                        equipment, spy software or equipment)
                      </li>
                      <li>
                        Cyberlocker services (file sharing, file hosting, etc.)
                      </li>
                      <li>Illegal/illicit drugs</li>
                      <li>
                        Medical services (including needling services e.g.
                        Botox, acupuncture, tattoos)
                      </li>
                      <li>
                        Nicotine/tobacco products (e.g. cigarettes, cigars,
                        e-cigarettes, vapes, liquid for vapes/e-cigarettes)
                      </li>
                      <li>Non-licensed resellers of aftermarket goods</li>
                      <li>Plants, plant seeds, fungi & fungal spores</li>
                      <li>
                        Multi-level marketing - Products not sold to the
                        customer by the manufacturer, but frequently sold to
                        consumers via social media channels, often using
                        recruitment and pressuring techniques
                      </li>
                      <li>
                        Professional/expertise services that come under the
                        following: pawn shops; bodyguards/private detectives;
                        bail bondsmen; adoption agencies
                      </li>
                      <li>
                        Sale of live animals (this includes, but is not limited
                        to, breeding e.g. dog breeding and the sale of puppies).
                        Includes the sale of insects, animal parts, blood,
                        fluids
                      </li>
                      <li>
                        Sexual services (anything which implies sex as a
                        service); sex products (sex toys, dolls, costumes etc.)
                      </li>
                      <li>
                        Supplements (fertility boosters, testosterone boosters,
                        diet supplements etc.)
                      </li>
                      <li>
                        Transaction activity which displays personal
                        information, where this violates applicable data
                        protection laws (e.g. GDPR)
                      </li>
                      <li>Vehicle tuning/modifications</li>
                      <li>Weapons, such as knives and guns</li>
                      <li>Alternative medicines (e.g. homoeopathy)</li>
                      <li>
                        Smuggling of person, Illegal goods, smuggled goods, or
                        protected/cultural items & artefacts
                      </li>
                      <li>
                        Commercial activity which infringes on copyrighted
                        material
                      </li>
                      <li>
                        Concierge services (ad-Hoc services without a set
                        business model, e.g. fulfilling custom client requests)
                      </li>
                      <li>
                        Dating services (dating apps, matchmaking sites;
                        coaching/advice providers to increase dating success)
                      </li>
                      <li>
                        Digital games (Merchants distributing game keys; in-app
                        purchases within games (such as buying in-app game
                        currencies))
                      </li>
                      <li>
                        Electronic and surveillance equipment or software
                        (Illegal telecommunications equipment, jamming
                        equipment, spy software or equipment)
                      </li>
                      <li>
                        Cyberlocker services (file sharing, file hosting, etc.)
                      </li>
                      <li>Illegal/illicit drugs</li>
                      <li>
                        Medical services (including needling services e.g.
                        Botox, acupuncture, tattoos)
                      </li>
                      <li>
                        Nicotine/tobacco products (e.g. cigarettes, cigars,
                        e-cigarettes, vapes, liquid for vapes/e-cigarettes)
                      </li>
                      <li>Non-licensed resellers of aftermarket goods</li>
                      <li>Plants, plant seeds, fungi & fungal spores</li>
                      <li>
                        Multi-level marketing - Products not sold to the
                        customer by the manufacturer, but frequently sold to
                        consumers via social media channels, often using
                        recruitment and pressuring techniques
                      </li>
                      <li>
                        Professional/expertise services that come under the
                        following: pawn shops; bodyguards/private detectives;
                        bail bondsmen; adoption agencies
                      </li>
                      <li>
                        Sale of live animals (this includes, but is not limited
                        to, breeding e.g. dog breeding and the sale of puppies).
                        Includes the sale of insects, animal parts, blood,
                        fluids
                      </li>
                      <li>
                        Sexual services (anything which implies sex as a
                        service); sex products (sex toys, dolls, costumes etc.)
                      </li>
                      <li>
                        Supplements (fertility boosters, testosterone boosters,
                        diet supplements etc.)
                      </li>
                      <li>
                        Transaction activity which displays personal
                        information, where this violates applicable data
                        protection laws (e.g. GDPR)
                      </li>
                      <li>Vehicle tuning/modifications</li>
                      <li>Weapons, such as knives and guns</li>
                    </ul>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      12. ESTABLISHMENT OF THE BENEFICIAL OWNER’S IDENTITY
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-700 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      In accordance with Article § 18 and § 19 Regulations SRO
                      PolyReg, the contracting partner (Customer) hereby
                      declares, that he/she/they is/are the beneficial owner(s)
                      of the assets involved under the above relationship. The
                      contracting party hereby undertakes to automatically
                      inform the financial intermediary of any changes.
                      He/she/they agree(s) that the financial intermediary can
                      disclose(s) the beneficial owner to financial institution
                      when cooperating with banks, EMIs, PIs, or other related
                      institutions. It is a criminal offence to deliberately
                      falsify this document or provide any false information
                      (Article 251 of the Swiss Criminal Code, document
                      forgery).
                    </p>
                  </div>

                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      13. ENTIRE AGREEMENT
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-700 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      These Terms and Conditions, jointly with all other
                      contractual items referred to in this Terms and
                      Conditions, constitute the entire agreement between
                      You/Customer/Customer/Customer and Us/Redeem GmbH and
                      supersedes any prior agreements which may exist between
                      You/Customer/Customer and Us/REDEEM GMBH/Redeem GmbH.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-700 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      These Terms and Conditions are governed by the laws of
                      Switzerland and any mandatory provisions of Swiss consumer
                      protection law.
                    </p>
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

export default TermsandConditions;

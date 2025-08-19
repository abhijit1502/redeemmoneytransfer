import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2"; // ✅ Added SweetAlert2
import Seo from '../../Components/Seo';
import { contactSeo } from "../../seo-configs";

function ContactUs() {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    msg: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      formErrors.name = "Name can only contain letters and spaces";
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }

    if (!formData.phoneno) {
      formErrors.phoneno = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phoneno)) {
      formErrors.phoneno = "Phone number is invalid";
    }

    if (!formData.msg) {
      formErrors.msg = "Message is required";
    }

    if (!captchaToken) {
      formErrors.captcha = "Captcha is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://redeemtransfer.net/prod/api/contactus/savecontactdetails",
          { ...formData, captchaToken }
        );
        console.log("Form submitted successfully:", response.data);

        // ✅ SweetAlert2 Success
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent successfully.",
          confirmButtonColor: "#3085d6",
        });

        setFormData({ name: "", email: "", phoneno: "", msg: "" });
        setCaptchaToken("");
        if (recaptchaRef.current) recaptchaRef.current.reset();
      } catch (error) {
        console.error("Error submitting form:", error);

        // ❌ SweetAlert2 Error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
          confirmButtonColor: "#d33",
        });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  return (
    <>
      <Seo {...contactSeo} />
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
                Contact Us
              </h1>
              <div
                className="d-flex align-items-center tw-gap-105 justify-content-center"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <NavLink
                  href="/"
                  className="fw-semibold tw-text-base text-dark-600 text-uppercase"
                >
                  HOME
                </NavLink>
                <span className="tw-text-6 text-main-600">
                  <i className="ph ph-caret-double-right" />
                </span>
                <span className="fw-semibold tw-text-base text-main-600 text-uppercase">
                  Contact Us
                </span>
              </div>
            </div>
          </div>
          {/* ==================== Breadcrumb End Here ==================== */}

          <section className="bg-neutral-10 py-80 ">
            <div className="container">
              <div className="row gy-4 tw-mb-15">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="group"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <div className="bg-white tw-py-10 tw-rounded-xl group-hover-bg-primary-400 tw-duration-500">
                      <span className="tw-w-72-px tw-h-72-px bg-primary-400 tw-text-8 text-white d-flex align-items-center justify-content-center tw-mb-6 rounded-circle mx-auto group-hover-bg-white tw-duration-500 group-hover-text-base-two-600">
                        <i className="ph ph-phone-call" />
                      </span>
                      <div className="text-center">
                        <h4 className="fw-normal text-dark-600 tw-mb-2 tw-duration-500 group-hover-text-white">
                          Phone Number
                        </h4>
                        <NavLink to="tel:+41779873231">
                          <span className="fw-normal tw-text-lg text-dark-500 tw-duration-500 group-hover-text-white ">
                            (+41) 779873231
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="group"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <div className="bg-white tw-py-10 tw-rounded-xl group-hover-bg-primary-400 tw-duration-500">
                      <span className="tw-w-72-px tw-h-72-px bg-primary-400 tw-text-8 text-white d-flex align-items-center justify-content-center tw-mb-6 rounded-circle mx-auto group-hover-bg-white tw-duration-500 group-hover-text-base-two-600">
                        <i className="ph ph-envelope-simple-open" />
                      </span>
                      <div className="text-center">
                        <h4 className="fw-normal text-dark-600 tw-mb-2 tw-duration-500 group-hover-text-white">
                          Email Id
                        </h4>
                        <NavLink to="mailto:customercare@redeemtransfer.com">
                          <span className="fw-normal tw-text-lg text-dark-500 tw-duration-500 group-hover-text-white ">
                            customercare@redeemtransfer.com
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="group"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <div className="bg-white tw-py-10 tw-rounded-xl group-hover-bg-primary-400 tw-duration-500">
                      <span className="tw-w-72-px tw-h-72-px bg-primary-400 tw-text-8 text-white d-flex align-items-center justify-content-center tw-mb-6 rounded-circle mx-auto group-hover-bg-white tw-duration-500 group-hover-text-base-two-600">
                        <i className="ph ph-map-pin" />
                      </span>
                      <div className="text-center">
                        <h4 className="fw-normal text-dark-600 tw-mb-2 tw-duration-500 group-hover-text-white">
                          Address
                        </h4>
                        <NavLink to="#">
                          <span className="fw-normal tw-text-lg text-dark-500 tw-duration-500 group-hover-text-white ">
                            Wartstr 22, 8400 Winterthur
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-white tw-px-10 tw-py-10 tw-rounded-xl"
                data-aos="zoom-in"
                data-aos-duration={1500}
              >
                <div className="tw-mb-12 text-center">
                  <div className="d-flex align-items-center tw-gap-1 tw-mb-3 justify-content-center">
                    <img src="assets/images/icon/star-icon2.png" alt="Image" />
                    <h5 className="fw-normal text-primary-600">Get In Touch</h5>
                  </div>
                  <h3 className="fw-normal text-dark-600 cursor-big mb-3">
                    Send Message Us
                  </h3>
                  <p>
                    If you need information or support, feel free to contact us.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row gy-4 tw-mb-12">
                    <div className="col-lg-12">
                      <label
                        htmlFor="name"
                        className="fw-normal tw-text-lg tw-mb-3 text-dark-600"
                      >
                        Your Name*
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600"
                      />
                      {errors.name && (
                        <small className="error-text">{errors.name}</small>
                      )}
                    </div>

                    <div className="col-lg-6">
                      <label
                        htmlFor="email"
                        className="fw-normal tw-text-lg tw-mb-3 text-dark-600"
                      >
                        Email ID*
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600"
                      />
                      {errors.email && (
                        <small className="error-text">{errors.email}</small>
                      )}
                    </div>

                    <div className="col-lg-6">
                      <label
                        htmlFor="phoneno"
                        className="fw-normal tw-text-lg tw-mb-3 text-dark-600"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="text"
                        id="phoneno"
                        name="phoneno"
                        value={formData.phoneno}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600"
                      />
                      {errors.phoneno && (
                        <small className="error-text">{errors.phoneno}</small>
                      )}
                    </div>

                    <div className="col-12">
                      <label
                        htmlFor="msg"
                        className="fw-normal tw-text-lg tw-mb-3 text-dark-600"
                      >
                        Describe your message*
                      </label>
                      <textarea
                        id="msg"
                        name="msg"
                        value={formData.msg}
                        onChange={handleInputChange}
                        placeholder="Message"
                        className="fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 tw-rounded-md tw-h-156-px w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600"
                      />
                      {errors.msg && (
                        <small className="error-text">{errors.msg}</small>
                      )}
                    </div>

                    <div className="col-12">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Leu3qQrAAAAAHOqy1dWoUiRF4x4qeNGXnz59oZX"
                        onChange={handleCaptchaChange}
                      />
                      {errors.captcha && (
                        <small className="error-text">{errors.captcha}</small>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-link w-100 tw-py-3 text-white rounded-3 fw-semibold mt-3"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}

export default ContactUs;

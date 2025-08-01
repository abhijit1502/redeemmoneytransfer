import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import CookieConsent from "../../Components/CookieConsent";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Contact_Us_Seo from "../../SEO/Contact_Us_Seo";

function ContactUs() {
 const location = useLocation();
   const [isLoading, setIsLoading] = useState(true);
   const smootherRef = useRef(null);
 
   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 300);
   }, []);
 
useEffect(() => {
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const ScrollSmoother = window.ScrollSmoother;
  const SplitText = window.SplitText;

  let smoother;

  const initializeSmoother = () => {
    // Register plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    // Kill existing instance
    if (ScrollSmoother.get()) {
      ScrollSmoother.get().kill();
    }

    // Check if wrapper and content exist
    const wrapper = document.getElementById("smooth-wrapper");
    const content = document.getElementById("smooth-content");

    if (!wrapper || !content) return;

    // Recreate smoother
    smoother = ScrollSmoother.create({
      wrapper: wrapper,
      content: content,
      smooth: 1.2,
      effects: true,
    });

    // SplitText animation
    const split = new SplitText(".headline", { type: "words,chars" });
    gsap.from(split.chars, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "power2.out",
    });

    // Scroll animation
    gsap.to(".line_item_one", {
      scrollTrigger: {
        trigger: ".line_item_one",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
      x: 200,
    });
  };

  if (!isLoading) {
    // Wait for DOM + React hydration
    requestAnimationFrame(() => {
      setTimeout(() => {
        initializeSmoother();
      }, 100); // delay ensures DOM is ready
    });
  }

  // Clean up on unmount/route change
  return () => {
    if (ScrollSmoother.get()) {
      ScrollSmoother.get().kill();
    }
  };
}, [isLoading, location.pathname]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    msg: "",
  });
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");

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
          "https://qfremit.com/prod/api/contactus/savecontactdetails",
          { ...formData, captchaToken }
        );
        console.log("Form submitted successfully:", response.data);
        setFormData({ name: "", email: "", phoneno: "", msg: "" });
        setCaptchaToken("");
      } catch (error) {
        console.error("Error submitting form:", error);
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
      <Contact_Us_Seo />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <div className="line_wrap">
                <div className="line_item_one" />
                <div className="line_item" />
                <div className="line_item" />
                <div className="line_item" />
                <div className="line_item" />
              </div>
              <main>
                {/*======  Start Page Hero Section  ======*/}
                <section className="page-hero-ss">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="page-content text-center">
                          <h1 className="page-title">Contact Us</h1>
                          <ul className="breadcrumb-link">
                            <li>
                              <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="active">Contact Us</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*======  End Page Hero Section  ======*/}

                {/*====== Start Contact Section ======*/}
                <section className="contact-ss pb-80">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        {/*=== Iconic Box ===*/}
                        <div
                          className="sasly-iconic-box style-twelve mb-30 text-center"
                          data-aos="fade-up"
                          data-aos-delay={20}
                          data-aos-duration={1900}
                        >
                          <div className="icon">
                            <i className="flaticon-telephone" />
                          </div>
                          <div className="content">
                            <h5>Phone Number</h5>
                            <p>
                              <NavLink to="tel:14379861192">
                                +1 437 986 1192
                              </NavLink>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        {/*=== Iconic Box ===*/}
                        <div
                          className="sasly-iconic-box style-twelve mb-30 text-center"
                          data-aos="fade-up"
                          data-aos-delay={10}
                          data-aos-duration={1300}
                        >
                          <div className="icon">
                            <i className="flaticon-route" />
                          </div>
                          <div className="content">
                            <h5>Address</h5>
                            <p>
                              23-1771 Robson Street, Vancouver, Bc, V6g 3b7, Canada
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        {/*=== Iconic Box ===*/}
                        <div
                          className="sasly-iconic-box style-twelve mb-30 text-center"
                          data-aos="fade-up"
                          data-aos-delay={15}
                          data-aos-duration={1600}
                        >
                          <div className="icon">
                            <i className="flaticon-mailbox" />
                          </div>
                          <div className="content">
                            <h5>Email</h5>
                            <p>
                              <NavLink to="mailto:operations@pelmax.solutions">
                                operations@pelmax.solutions
                              </NavLink>
                            </p>
                            <p></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*====== End Contact Section ======*/}

                {/*====== Start Contact Form Section ======*/}
                <section className="contact-form-ss pb-80">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4">
                        {/*=== Section Content Box ===*/}
                        <div
                          className="section-content-box mb-50"
                          data-aos="fade-right"
                          data-aos-duration={1200}
                        >
                          <div className="section-title mb-30">
                            <span className="sub-heading">Get In Touch With</span>
                            <h2 className="text-anm">Redeem Money Transfer</h2>
                          </div>
                          <p data-aos="fade-up" data-aos-duration={1000}>
                           Looking for secure and efficient money transfer services? Reach out to Redeem Money Transfer today! Whether you need assistance with international remittance, transaction tracking, or payment solutions, our team is here to help.
                          </p>
                          <div
                            className="sasly-img"
                            data-aos="fade-up"
                            data-aos-duration={1200}
                          >
                            <img
                              src="assets/images/contact/contact1.png"
                              alt="Contact Image"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        {/*=== Contact Wrapper ===*/}
                        <div
                          className="contact-wrapper mb-50"
                          data-aos="fade-left"
                          data-aos-duration={1400}
                        >
                          <h3>Send Message Us</h3>
                          <p>
                            If you need information or support, feel free to
                            contact us.
                          </p>
                          <form
                            className="contact-form"
                            noValidate="novalidate"
                            onSubmit={handleSubmit}
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="form_control"
                                  />
                                  {errors.name && (
                                    <span className="error">{errors.name}</span>
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Email Id"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                  />
                                  {errors.email && (
                                    <span className="error">
                                      {errors.email}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Phone Number"
                                    name="phoneno"
                                    value={formData.phoneno}
                                    onChange={handleInputChange}
                                    required
                                  />
                                  {errors.phoneno && (
                                    <span className="error">
                                      {errors.phoneno}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <textarea
                                    className="form_control"
                                    placeholder="Message"
                                    name="msg"
                                    value={formData.msg}
                                    onChange={handleInputChange}
                                    id="message"
                                    cols={5}
                                    rows={2}
                                    defaultValue={""}
                                  />
                                  {errors.msg && (
                                    <span className="error">{errors.msg}</span>
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <ReCAPTCHA
                                    sitekey="6LeTrf8qAAAAALJvNyOIvPRAPVuDjSQb4koonjvO"
                                    onChange={handleCaptchaChange}
                                  />
                                  {errors.captcha && (
                                    <span className="error">
                                      {errors.captcha}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group mt-4">
                                  <button type="submit" className="theme-btn style-one">
                                    Send Message
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*====== End Contact Form Section ======*/}

                {/*====== Start CTA Section ======*/}
                <section
                  className="cta-sb bg_cover p-r z-1 pt-90 pb-40"
                  style={{
                    backgroundImage: "url(assets/images/bg/cta-bg1.jpg)",
                  }}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-12">
                        {/*=== Section Content Box ===*/}
                        <div className="section-content-box mb-50 text-center">
                          <div className="section-title text-white mb-55">
                            <h2 className="text-anm">
                              <span className="font-200">Download</span> Our
                              Mobile App
                            </h2>
                          </div>
                        </div>
                        <div className="section-content-box mb-40 text-center">
                          <div className="row justify-content-center">
                            <div className="col-xl-2 col-md-6">
                              {/*=== Iconic Box ===*/}
                              <NavLink to="#" target="_blank" className="mb-3">
                                <img src="assets/images/icons/Play-store.png" />
                              </NavLink>
                            </div>
                            <div className="col-xl-2 col-md-6">
                              {/*=== Iconic Box ===*/}
                              <NavLink to="#" target="_blank" className="mb-3">
                                <img src="assets/images/icons/Appstore.png" />
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*====== End CTA Section ======*/}
              </main>
              <Footer />
            </div>
          </div>
          <CookieConsent />
        </>
      )}
    </>
  );
}

export default ContactUs;

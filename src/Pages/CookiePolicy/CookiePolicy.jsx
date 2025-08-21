import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import Seo from '../../Components/Seo';
import { cookiePolicySeo } from "../../seo-configs";

function CookiePolicy() {
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
      <Seo {...cookiePolicySeo} />
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
                Cookie Policy
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
                  Cookie Policy
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
                      Redeem GMBH/LLC Transfer Cookies Policy
                    </h3>
                  </div>
                <div className="w-100">
                  <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                      What Are Cookies?
                    </h4>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      Some of our web pages may contain "Cookies", which are text data files or other data objects (such as "Flash Cookies" or "pixel tags") sent to your web browser and stored on your computer. Cookies allow our servers to anonymously compile usage information (including IP Addresses) to generate statistical information about the general operation and use of our websites. Cookies may also be used to recognize you as a returning website visitor or Redeem Money Transfer (RMT) consumer and allow us to provide information that may benefit you or best match your defined preferences.
                    </p>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      We also use Cookies to identify you as a valid user who has logged into our website, so that you will not be forced to re-enter your password multiple times while using our websites. The term cookies include similar technologies for collecting and storing information, such as Local Shared Objects (commonly referred to as "flash cookies") and web beacons or web bugs (including transparent or clear gifs).
                    </p>                    
                  </div>

                   <div className="tw-mb-10">
                    <h4
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                     What Cookies Does Redeem Money Transfer Use?
                    </h4>
                    <h5
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                     1. Essential Cookies
                    </h5>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      These cookies are essential in order to enable you to navigate around the website and easily use its features, such as accessing secure areas of the website. Without these cookies, services you have asked for cannot be provided. Because these cookies are strictly necessary, we do not need to ask for your consent to use them.
                    </p>

                     <h5
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                     2. Performance Cookies
                    </h5>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      These cookies collect information about how visitors use a website, for instance which pages visitors go to most often, and if they get error messages from web pages. Some of these are analytics cookies, set using third party web analytics software, which allow us to understand more about how our website is used. For example, like many companies we use Google Analytics to help us monitor our website traffic. These cookies don't collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous and does not affect your privacy. It is only used to improve how a website works. We might also use these cookies to highlight Redeem Money Transfer (RMT)'s products or services that we think will be of interest to you based on your use of our websites. By using Redeem Money Transfer (RMT)'s products or services that we think will be of interest to you based on your use of our websites. By using Redeem Money Transfer (RMT)'s website you agree we may place these types of cookies on your device.
                    </p>         

                    <h5
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                     3. Functionality Cookies
                    </h5>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      These cookies allow the website to remember choices you make (such as your username, language or the region you are in) and provide enhanced, more personal features. For instance, these cookies can be used to remember changes you have made to text size, fonts and other parts of web pages that you can customize. They may also be used to provide services you have requested. The information these cookies collect may be anonymous and they cannot track your browsing activity on other websites. By using Redeem Money Transfer (RMT)'s website you agree we may place these types of cookies on your device.
                    </p>     

                    <h5
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                     4.Targeting or Advertising Cookies
                    </h5>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with the website operator's permission. They remember that you have visited a website and this information is shared with other organizations such as advertisers. Quite often targeting or advertising cookies will be linked to site functionality provided by the other organization. By using Redeem Money Transfer (RMT)'s website you agree we may place these types of cookies on your device.
                    </p>      

                    <h5
                      className="fw-normal text-dark-600 cursor-big tw-mb-3"
                      data-aos="fade-up"
                      data-aos-duration={900}
                    >
                     5. Third Party Cookies?
                    </h5>
                    <p
                      className="fw-normal tw-text-lg text-dark-500 tw-mb-6"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      If you click on a hyperlink from Redeem Money Transfer (RMT)'s website to any third-party websites (e.g., if you 'share' content from Redeem Money Transfer (RMT)'s website with friends or colleagues through social networks), you may be sent cookies from these third-party websites. Third party websites will have their own privacy and cookie policies, which Redeem Money Transfer (RMT) cannot control.
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

export default CookiePolicy;

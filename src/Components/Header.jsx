import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/*==================== Overlay Start ====================*/}
      <div className="overlay" />
      {/*==================== Overlay End ====================*/}

      {/*==================== Sidebar Overlay End ====================*/}
      <div className="side-overlay" />
      {/*==================== Sidebar Overlay End ====================*/}
      {/* Custom Toast Message start */}
      <div id="toast-container" />
      {/* Custom Toast Message End */}
      {/* ==================== Scroll to Top End Here ==================== */}
      <div className="progress-wrap cursor-big">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* ==================== Scroll to Top End Here ==================== */}
      {/* Custom Cursor Start */}
      <div className="cursor" />
      <span className="dot" />
      {/* Custom Cursor End */}
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div className="mobile-menu d-lg-none d-block scroll-sm position-fixed bg-dark-600 tw-w-300-px tw-h-screen overflow-y-auto tw-p-6 tw-z-999 tw--translate-x-full tw-pb-68 ">
        <button
          type="button"
          className="close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 tw-w-605 tw-h-605 rounded-circle d-flex justify-content-center align-items-center bg-warning-400 hover-bg-neutral-900 hover-text-dark-900"
        >
          <i className="ph ph-x" />
        </button>
        <div className="mobile-menu__inner">
          <NavLink to="/" className="mobile-menu__logo">
            <img src="assets/images/logo/footer-logo.png" alt="Logo" />
          </NavLink>
          <div className="mobile-menu__menu">
            {/* Nav menu Start */}
            <ul className="nav-menu d-lg-flex align-items-center nav-menu--mobile d-block tw-mt-8">
              <li className="nav-menu__item">
                <NavLink
                  to="/aboutus"
                  className="nav-menu__link text-heading tw-py-9 fw-semibold w-100 text-white"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-menu__item">
                <NavLink
                  to="/money-transfer"
                  className="nav-menu__link text-heading tw-py-9 fw-semibold w-100 text-white"
                >
                  Money Transfer
                </NavLink>
              </li>
              <li className="nav-menu__item">
                <NavLink
                  to="/help"
                  className="nav-menu__link text-heading tw-py-9 fw-semibold w-100 text-white"
                >
                  Help
                </NavLink>
              </li>
              <li className="nav-menu__item">
                <NavLink
                  to="/contactus"
                  className="nav-menu__link text-heading tw-py-9 fw-semibold w-100 text-white"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            {/* Nav menu End  */}
          </div>
        </div>
      </div>
      {/* ==================== Mobile Menu End Here ==================== */}
      {/* ============ Top Header Section Start ================== */}
      <div className="bg-dark-800 py-3 z-1 ">
        <div className="container max-w-1640">
          <div className="d-flex align-items-center tw-gap-3 justify-content-between flex-wrap">
            <div className="d-md-block d-none">
              <div className="d-flex align-items-center tw-gap-6 flex-wrap ">
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="tw-text-xl text--white fw-medium">
                    <i className="ph-bold ph-headset" />
                  </span>
                  <span className="text--white fw-semibold tw-text-base">
                    24/7 hours support
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <span className="tw-text-xl text--white fw-medium d-flex">
                    <i className="ph-bold ph-envelope-simple" />
                  </span>
                  <span className="text--white fw-semibold">
                    <NavLink
                      to="mailto:customercare@redeemtransfer.com"
                      className="tw-text-base text--white"
                    >
                      customercare@redeemtransfer.com{" "}
                    </NavLink>
                  </span>
                </div>
              </div>
            </div>
            <div className="top-header-item d-flex align-items-center tw-gap-15 flex-wrap">
              <div>
                <ul className="d-flex align-items-center tw-gap-5 flex-wrap">
                  <li>
                    <NavLink to="https://x.com/RedeemTransfer" className="tw-text-xl text--white" target="_blank">
                      <i class="fa-brands fa-x-twitter"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.facebook.com/RedeemTransfer" className="tw-text-xl text--white" target="_blank">
                      <i class="fa-brands fa-facebook-f"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="tw-text-xl text--white" target="_blank">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.instagram.com/redeemtransfer/" className="tw-text-xl text--white" target="_blank">
                      <i class="fa-brands fa-instagram"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ Top Header Section End ================== */}
      {/* ==================== Header Start Here ==================== */}
      <header className="header transition-all header-three position-absolute tw-mt-1 tw-start-0 w-100 tw-z-9">
        <div className="container  max-w-1640">
          <nav className="d-flex align-items-center justify-content-between">
            {/* Logo Start */}
            <div className="logo">
              <NavLink to="/" className="link">
                <img
                  src="assets/images/logo/logo.png"
                  alt="img"
                  className="tw-h-80-px"
                />
              </NavLink>
            </div>
            {/* Logo End  */}
            {/* Menu Start  */}
            <div className="header-menu">
              {/* Nav menu Start */}
              <ul className="nav-menu d-lg-flex align-items-center tw-gap-6 d-none">
                <li className="nav-menu__item">
                  <NavLink
                    to="/aboutus"
                    className="nav-menu__link text-heading tw-py-9 fw-semibold w-100 text-dark-600"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-menu__item">
                  <NavLink
                    to="/money-transfer"
                    className="nav-menu__link text-heading tw-py-9 fw-semibold w-100 text-dark-600"
                  >
                    Money Transfer
                  </NavLink>
                </li>
                <li className="nav-menu__item">
                  <NavLink
                    to="/help"
                    className="nav-menu__link text-heading tw-py-9 fw-semibold w-100 text-dark-600"
                  >
                    Help
                  </NavLink>
                </li>
                <li className="nav-menu__item">
                  <NavLink
                    to="/contactus"
                    className="nav-menu__link text-heading tw-py-9 fw-semibold w-100 text-dark-600"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <div className="d-sm-block d-none">
                    <div className="d-flex align-items-center tw-gap-605 flex-wrap ">
                      <NavLink
                        to="#"
                        className="text-dark-600 fw-semibold tw-text-lg hover-text hover-text-main-600 tw-duration-500"
                      >
                        Sign In
                      </NavLink>
                      <div className="position-relative z-1">
                        <NavLink
                          to="#"
                          className="header-three-item-link text-white hover-text-dark-900 fw-semibold tw-text-lg tw-px-4 tw-py-2 bg-main-600 border-two-px-solid rounded-2"
                        >
                          Login
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* Nav menu End  */}
              <ul className="nav-menu align-items-center tw-gap-6">
                <li>
                  <div className="d-flex align-items-center tw-gap-3">
                    <button
                      type="button"
                      className="toggle-mobileMenu leading-none d-lg-none ms-3 text-dark-600 tw-text-9"
                    >
                      <i className="ph ph-list" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            {/* Menu End  */}
          </nav>
        </div>
      </header>
      {/* ==================== Header End Here ==================== */}

      <Outlet />
    </>
  );
};

export default Header;

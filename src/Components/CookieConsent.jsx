import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CookieConsent = () => {
  const [showCookiesConsent, setShowCookiesConsent] = useState(true);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookiesConsent(false);
  };

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted === "true") {
      setShowCookiesConsent(false);
    }
  }, []);

  if (!showCookiesConsent) return null;

  return (
    <div className="wrapper-cookie">
      <div className="d-flex gap-2" style={{ alignItems: 'center' }}>
        <img src="assets/images/cookies.png" alt="cookies consent" />
        <h5 className="text-dark-500 mb-0">Cookies Consent</h5>
      </div>
      <div className="content mt-3">
        <p className="mb-3 text-dark-500">
          We use cookies to improve your browsing experience and for marketing purposes.
        </p>
        <div>
          <button className="bg-main-600 text-white fw-normal tw-text-lg tw-px-3 tw-py-3 rounded-3 hover-text-neutral-20" onClick={acceptCookies}>
            <span className="txt">I understand</span>
          </button>
          <NavLink to="/privacy-policy" className="item ms-3 fw-normal tw-text-lg" style={{ textDecoration: 'underline' }}>
            Privacy Policy
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

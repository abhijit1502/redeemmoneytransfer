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
        <h5 className="text-white mb-0">Cookies Consent</h5>
      </div>
      <div className="content mt-3">
        <p className="mb-3 text-light">
          We use cookies to improve your browsing experience and for marketing purposes.
        </p>
        <div>
          <button className="theme-btn style-sign" onClick={acceptCookies}>
            <span className="txt">I understand</span>
          </button>
          <NavLink to="/privacy-policy" className="item ms-3" style={{ textDecoration: 'underline' }}>
            Privacy Policy
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

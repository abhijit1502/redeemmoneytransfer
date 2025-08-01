import React, { useState } from 'react';

const CookiesMessage = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    // Store user's consent in cookies or local storage
    localStorage.setItem('cookiesAccepted', 'true'); // Using local storage for example
  };

  const declineCookies = () => {
    setAcceptedCookies(false);
    // Handle declining cookies (optional)
  };

  if (acceptedCookies) {
    return null; // Cookies accepted, no need to show the message
  }

  return (
    <div className="cookies-message">
      <p>We use cookies to improve your experience on our site. By continuing to use our site, you accept our use of cookies.</p>
      <div className="cookies-buttons">
        <button onClick={acceptCookies}>Accept</button>
        <button onClick={declineCookies}>Decline</button>
      </div>
    </div>
  );
};

export default CookiesMessage;

import React from 'react';
import { Helmet } from "react-helmet-async";

function Onboarding_Seo() {
  return (
      <Helmet>
                <title>Redeem Money Transfer Onboarding - Easy & Secure Money Transfers Worldwide</title>
                <meta name="description" content="Sign up with Redeem Money Transfer for fast, secure international money transfers. Send money to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & more with real-time tracking and seamless transactions." />
                <meta property="og:title" content="Redeem Money Transfer Onboarding - Easy & Secure Money Transfers Worldwide" />
                <meta property="og:description" content="Sign up with Redeem Money Transfer for fast, secure international money transfers. Send money to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & more with real-time tracking and seamless transactions." />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
  )
}

export default Onboarding_Seo

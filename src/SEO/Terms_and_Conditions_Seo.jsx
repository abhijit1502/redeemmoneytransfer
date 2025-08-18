import React from 'react';
import { Helmet } from "react-helmet-async";

function Terms_and_Conditions_Seo() {
  return (
      <Helmet>
                <title>Terms and Conditions | Redeem Money Transfer</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Terms and Conditions | Redeem Money Transfer" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
  )
}

export default Terms_and_Conditions_Seo

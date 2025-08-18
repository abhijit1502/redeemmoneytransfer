import React from "react";
import { Helmet } from "react-helmet-async";

function About_Seo() {
  return (
    <Helmet>
      <title>About Redeem Money Transfer - Trusted Global Money Transfer Services</title>
      <meta name="description" content="Redeem Money Transfer is a licensed Money Services Business (MSB) providing secure, fast, and cost-effective money transfers from Canada & UK to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & more." />
      <meta property="og:title" content="About Redeem Money Transfer - Trusted Global Money Transfer Services" />
      <meta property="og:description" content="Redeem Money Transfer is a licensed Money Services Business (MSB) providing secure, fast, and cost-effective money transfers from Canada & UK to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & more." />
      <meta property="og:image" content="URL to your image" />{" "}
      {/* Replace with actual image URL */}
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default About_Seo;

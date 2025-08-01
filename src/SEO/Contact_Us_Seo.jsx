import React from 'react';
import { Helmet } from "react-helmet-async";


function Contact_Us_Seo() {
    return (
            <Helmet>
                <title>Contact Redeem Money Transfer - Secure Worldwide Money Transfers</title>
                <meta name="description" content="Get in touch with Redeem Money Transfer for secure money transfers from Canada & UK to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong, and more. Reach us via phone or email." />
                <meta property="og:title" content="Contact Redeem Money Transfer - Secure Worldwide Money Transfers" />
                <meta property="og:description" content="Get in touch with Redeem Money Transfer for secure money transfers from Canada & UK to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong, and more. Reach us via phone or email." />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    )
}

export default Contact_Us_Seo

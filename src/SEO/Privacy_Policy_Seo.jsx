import React from 'react';
import { Helmet } from "react-helmet-async";

function Privacy_Policy_Seo() {
    return (
            <Helmet>
                <title>Redeem Money Transfer Privacy Policy - Secure & Transparent Money Transfers</title>
                <meta name="description" content="Learn how Redeem Money Transfer protects your data with secure encryption and privacy safeguards. We ensure safe and transparent money transfers to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & beyond." />
                <meta property="og:title" content="Redeem Money Transfer Privacy Policy - Secure & Transparent Money Transfers" />
                <meta property="og:description" content="Learn how Redeem Money Transfer protects your data with secure encryption and privacy safeguards. We ensure safe and transparent money transfers to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & beyond." />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    )
}

export default Privacy_Policy_Seo

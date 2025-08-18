import React from 'react';
import { Helmet } from "react-helmet-async";

function General_FAQ_Seo() {
    return (
            <Helmet>
                <title>Redeem Money Transfer FAQ - Answers to Secure Money Transfers Worldwide</title>
                <meta name="description" content="Find answers to common questions about sending money securely with Redeem Money Transfer. Learn about exchange rates, transaction security, transfer timelines, fees, and remittance services for UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & beyond." />
                <meta property="og:title" content="Redeem Money Transfer FAQ - Answers to Secure Money Transfers Worldwide" />
                <meta property="og:description" content="Find answers to common questions about sending money securely with Redeem Money Transfer. Learn about exchange rates, transaction security, transfer timelines, fees, and remittance services for UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & beyond." />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    )
}

export default General_FAQ_Seo

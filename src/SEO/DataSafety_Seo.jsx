import React from 'react';
import { Helmet } from "react-helmet-async";

function DataSafety_Seo() {
    return (
            <Helmet>
                <title>Redeem Money Transfer Data Safety - Secure & Encrypted Money Transfers</title>
                <meta name="description" content="Redeem Money Transfer prioritizes data security with encrypted transactions for safe and transparent money transfers. Send funds securely to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & beyond." />
                <meta property="og:title" content="Redeem Money Transfer Data Safety - Secure & Encrypted Money Transfers" />
                <meta property="og:description" content="Redeem Money Transfer prioritizes data security with encrypted transactions for safe and transparent money transfers. Send funds securely to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & beyond." />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    )
}

export default DataSafety_Seo

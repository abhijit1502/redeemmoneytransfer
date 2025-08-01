import React from 'react';
import { Helmet } from "react-helmet-async";

function Help_Seo() {
    return (
            <Helmet>
                <title>Redeem Money Transfer Help - Secure Money Transfer Assistance Worldwide</title>
                <meta name="description" content="Need help with your international money transfer? Redeem Money Transfer offers support for secure, fast, and affordable transactions. Get assistance with sending money to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong, and more." />
                <meta property="og:title" content="Redeem Money Transfer Help - Secure Money Transfer Assistance Worldwide" />
                <meta property="og:description" content="Need help with your international money transfer? Redeem Money Transfer offers support for secure, fast, and affordable transactions. Get assistance with sending money to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong, and more." />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    )
}

export default Help_Seo

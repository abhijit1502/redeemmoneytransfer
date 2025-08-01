import React from 'react';
import { Helmet } from "react-helmet-async";

function Onboarding_FAQ_Seo() {
    return (
            <Helmet>
                <title>Onboarding FAQs | Redeem Money Transfer</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Onboarding FAQs | Redeem Money Transfer" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    )
}

export default Onboarding_FAQ_Seo

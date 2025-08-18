import React from 'react';
import { Helmet } from "react-helmet-async";

function Cookie_Policy_Seo() {
    return (
            <Helmet>
                <title>Cookie Policy | Redeem Money Transfer</title>
                <meta name="description" content="" />
                <meta property="og:title" content="Cookie Policy | Redeem Money Transfer" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    )
}

export default Cookie_Policy_Seo

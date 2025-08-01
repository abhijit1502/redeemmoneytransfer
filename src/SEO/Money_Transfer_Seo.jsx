import React from 'react';
import { Helmet } from "react-helmet-async";

function Money_Transfer_Seo() {
    return (
            <Helmet>
                <title>Redeem Money Transfer - Fast & Secure Global Money Transfers</title>
                <meta name="description" content="Send money worldwide securely with Redeem Money Transfer. Enjoy fast transactions, competitive rates, and real-time tracking when transferring funds to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & beyond." />
                <meta property="og:title" content="Redeem Money Transfer - Fast & Secure Global Money Transfers" />
                <meta property="og:description" content="Send money worldwide securely with Redeem Money Transfer. Enjoy fast transactions, competitive rates, and real-time tracking when transferring funds to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & beyond." />
                <meta property="og:image" content="URL to your image" /> {/* Replace with actual image URL */}
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />
            </Helmet>
    )
}

export default Money_Transfer_Seo

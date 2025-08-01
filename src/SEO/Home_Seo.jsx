import React from 'react';
import { Helmet } from 'react-helmet-async';

function Home_Seo() {
    return (
        <Helmet>
            <title>Redeem Money Transfer - Secure Worldwide Money Transfers | Send Money Online</title>
            <meta name="description" content="Redeem Money Transfer offers fast, secure, and affordable money transfers worldwide. Send money to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & more with real-time tracking and encrypted transactions." />
            <meta property="og:title" content="Redeem Money Transfer - Secure Worldwide Money Transfers | Send Money Online" />
            <meta property="og:description" content="Redeem Money Transfer offers fast, secure, and affordable money transfers worldwide. Send money to UAE, UK, Australia, Japan, Switzerland, Singapore, Hong Kong & more with real-time tracking and encrypted transactions." />
            <meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg" />
            <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ''} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
}

export default Home_Seo;

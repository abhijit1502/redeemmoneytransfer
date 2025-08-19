import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Seo = ({ 
  title = "Redeem Money Transfer", 
  description = "Secure global money transfer services",
  image = "https://redeemtransfer.net/assets/images/logo/logo.png",
  type = "website",
  canonicalUrl
}) => {
  const { pathname } = useLocation();
  const baseUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
  const url = canonicalUrl || `${baseUrl}${pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Redeem Money Transfer" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@redeemtransfer" />
      
      {/* WhatsApp Specific */}
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      
      {/* Additional Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
    </Helmet>
  );
};

export default Seo;
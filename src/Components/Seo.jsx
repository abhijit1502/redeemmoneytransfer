import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Seo = ({ 
  title = "Redeem Money Transfer", 
  description = "Secure global money transfer services",
  image,
  type = "website",
  canonicalUrl
}) => {
  const { pathname } = useLocation();
  const baseUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
  const url = canonicalUrl || `${baseUrl}${pathname}`;
  const fullImageUrl = image 
    ? (image.startsWith('http') ? image : `${baseUrl}${image}`)
    : `${baseUrl}/assets/images/social-share-default.jpg`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Redeem Money Transfer" />
      
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@redeemtransfer" /> */}
    </Helmet>
  );
};

export default Seo;
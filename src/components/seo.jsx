import React from 'react';
import useSiteMetadata from 'hooks/use-site-metadata';

const SEO = ({ title, description, pathname, children, zet }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata();

  const seo = {
    title: title ? `${title} - ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={image} />

      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="author" content={defaultTitle} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={defaultTitle} />

      {/* <link rel="canonical" href={seo.url} /> */}
      {/* <meta property="og:url" content={seo.url} /> */}
      <meta property="og:type" content="website" />
      {/* Chrome, Firefox OS and Opera */}
      <meta name="theme-color" content="#1d1d27" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {children}
    </>
  );
};

export default SEO;

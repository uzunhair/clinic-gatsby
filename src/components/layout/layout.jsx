import React from 'react';
import Header from 'components/header';
import Footer from 'components/Footer';
import PageHeader from 'components/header/pageHeader';

export const Layout = ({ title, breadcrumbActive, children }) => {
  return (
    <>
      <Header />
      <PageHeader title={title} breadcrumbActive={breadcrumbActive} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

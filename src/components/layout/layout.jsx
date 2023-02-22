import React from 'react';
import Header from 'components/header';
import Footer from 'components/Footer';
import PageHeader from 'components/header/pageHeader';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <PageHeader title="Прайс лист" breadcrumbActive="Прайс лист" />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

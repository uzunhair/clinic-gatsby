import React from 'react';
import Header from 'components/header';
import Footer from 'components/Footer';
import PageHeader from 'components/header/pageHeader';

export const LayoutWidthContainer = ({ title, breadcrumbActive, children }) => {
  return (
    <>
      <Header />
      <PageHeader title={title} breadcrumbActive={breadcrumbActive} />
      <div className="section__content">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutWidthContainer;

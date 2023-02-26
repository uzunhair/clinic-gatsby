import * as React from 'react';
import Header from 'components/header';
import Services from 'components/Services';
import MainSilder from 'components/slider';
import SEO from 'components/seo';
import RegulatoryAuthorities from '../components/RegulatoryAuthorities';
import Teams from '../components/Teams';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <>
      <Header />
      <MainSilder />
      <Teams />
      <Services />
      <RegulatoryAuthorities />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO />;

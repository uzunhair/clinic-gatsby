import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Header from 'components/header';
import RegulatoryAuthorities from '../components/RegulatoryAuthorities';
import Teams from '../components/Teams';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <>
      <Header />
      <StaticImage src="../images/img.png" alt="A dinosaur" />
      <Teams />
      <RegulatoryAuthorities />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

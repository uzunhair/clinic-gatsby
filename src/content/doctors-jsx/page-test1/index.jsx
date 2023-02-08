import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import NavBar from '../../../components/NavBar';
import RegulatoryAuthorities from '../../../components/RegulatoryAuthorities';
import Teams from '../../../components/Teams';
import Footer from '../../../components/Footer';

const TestPage = () => {
  return (
    <>
      <NavBar />
      <StaticImage src="../../../images/img.png" alt="A dinosaur" />
      <Teams />
      <RegulatoryAuthorities />
      <Footer />
    </>
  );
};

export default TestPage;

export const Head = () => <title>Home Page</title>;
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <StaticImage src="../images/img.png" alt="A dinosaur" />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

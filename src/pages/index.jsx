import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HomeFourNavBar from '../components/Shared/HomeFourFiveNavBar/HomeFourFiveNavBar';

const IndexPage = () => {
  return (
    <>
      <HomeFourNavBar />
      <StaticImage src="../images/img.png" alt="A dinosaur" />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

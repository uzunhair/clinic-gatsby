import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import SEO from 'components/seo';
import LayoutWidthContainer from 'components/layout/layout-with-container';

const Regulation = () => {
  return (
    <LayoutWidthContainer title="Устав" breadcrumbActive="Устав">
      <div className="row">
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_14485402.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_14500811.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_14520971.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_14533110.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_14544597.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_14555864.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_14570767.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_14581014.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_15080023.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_14592847.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_15002788.jpg" alt="Устав" />
        </div>
        <div className="col-lg-6">
          <StaticImage src="../images/regulation/img20210519_15020627.jpg" alt="Устав" />
        </div>
      </div>
    </LayoutWidthContainer>
  );
};

export const Head = () => <SEO title="Устав" description="Устав" />;

export default Regulation;

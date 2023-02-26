import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import SEO from 'components/seo';
import LayoutWidthContainer from 'components/layout/layout-with-container';
import GalleryItem from 'components/gallery-item';

const Licenses = () => {
  return (
    <LayoutWidthContainer title="Лицензии" breadcrumbActive="Лицензии">
      <div id="portfolio-grid" className="row row-portfolio">
        <GalleryItem title="Осуществление фармацевтической деятельности">
          <StaticImage src="../images/licenses/license-farm.jpg" alt="Осуществление фармацевтической деятельности" />
        </GalleryItem>
        <GalleryItem title="Осуществление медицинской деятельности">
          <StaticImage src="../images/licenses/license-med.jpg" alt="Осуществление медицинской деятельности" />
        </GalleryItem>
        <GalleryItem title="Осуществление медицинской деятельности">
          <StaticImage src="../images/licenses/license-med-san.jpg" alt="Осуществление медицинской деятельности" />
        </GalleryItem>
        <GalleryItem title="Место нахождения и места осуществления лицензируемого вида деятельности">
          <StaticImage
            src="../images/licenses/license-mesto.jpg"
            alt="Место нахождения и места осуществления лицензируемого вида деятельности"
          />
        </GalleryItem>
        <GalleryItem title="Санитарно-эпидемиологическое заключение">
          <StaticImage src="../images/licenses/license-sanitar.jpg" alt="Санитарно-эпидемиологическое заключение" />
        </GalleryItem>
      </div>
    </LayoutWidthContainer>
  );
};

export const Head = () => <SEO title="Лицензии" description="Лицензии Клиника Амирханова" />;

export default Licenses;

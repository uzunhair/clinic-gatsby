import React from 'react';

const GalleryItem = ({ title, children }) => {
  return (
    <div className="col-lg-4 col-md-6 grid-item">
      <div className="portfolio-item mb-30">
        <div className="portfolio-wrapper">
          <div className="portfolio-image">{children}</div>
          <div className="portfolio-caption">
            <h4>{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;

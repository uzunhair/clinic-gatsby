import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import icon from 'images/service-icon.svg';

const Image = styled(Link)`
  background: url('${icon}') no-repeat;
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .gatsby-image-wrapper {
    position: absolute;
  }
`;

const ServicesItem = ({ data: { fields: { slug }, frontmatter: { title, desc } }}) => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="service-box text-center mb-30">
        <Image className="service-thumb" to={slug}>
          <StaticImage src="../../images/services/health.svg" alt="" />
        </Image>
        <div className="service-content">
          <h3>
            <Link to={slug}>{title}</Link>
          </h3>
          <p>{desc}</p>
          <Link className="service-link" to={slug}>
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;

import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const SingleTeam = ({ name, title, number, arr }) => {
  const featuredImage = {
    image: arr.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: arr.featuredImage?.node?.altText || ``,
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="team-box text-center mb-60">
        <div className="team-thumb h4team-thumb mb-25 pos-rel">
          <div className="team-thumb__img">
            {/* if we have a featured image for this post let's display it */}
            {featuredImage?.image && <GatsbyImage alt={featuredImage.alt} image={featuredImage.image} />}
            <Link className="team-link" to="/doctorDetails">
              {number}
            </Link>
          </div>
        </div>
        <div className="team-content h4team-content mb-15">
          <h3>{name}</h3>
          <h6>{title}</h6>
        </div>
        <div className="h4team-social">
          <ul className="list-inline">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-behance" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;
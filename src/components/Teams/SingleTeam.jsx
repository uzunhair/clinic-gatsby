import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

const SingleTeam = ({ number, data }) => {
  const {
    frontmatter: { title, profession },
  } = data;
  const featuredImage = getImage(data.frontmatter.photo?.childImageSharp?.gatsbyImageData);
  const slug = data.frontmatter.slug || data.fields.slug;

  const titleArray = title.split(' ');
  titleArray.pop();
  const titleNew = titleArray.join(' ');

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="team-box text-center mb-60">
        <div className="team-thumb h4team-thumb mb-25 pos-rel">
          <Link className="team-thumb__img" to={slug}>
            {featuredImage ? (
              <GatsbyImage alt={titleNew} image={featuredImage} />
            ) : (
              <StaticImage src="../../images/empty-doctor.svg" alt="Врач" />
            )}
            <div className="team-link">{number}</div>
          </Link>
        </div>
        <div className="team-content h4team-content mb-15">
          <Link className="h3 team-content__title" to={slug}>
            {titleNew}
          </Link>
          <div className="h6 team-content__subtitle">{profession}</div>
        </div>
        <div className="h4team-social">
          <ul className="list-inline">
            <li>
              <a href="#1">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#1">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#1">
                <i className="fab fa-behance" />
              </a>
            </li>
            <li>
              <a href="#1">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#1">
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

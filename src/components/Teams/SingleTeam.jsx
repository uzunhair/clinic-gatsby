import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { UilInstagramAlt } from '@iconscout/react-unicons';

const SingleTeam = ({ number, data }) => {
  const {
    frontmatter: { title, profession, instagram },
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
          {instagram && (
            <a href={instagram} title="Instagram Врача" className="d-inline-flex align-items-center">
              <UilInstagramAlt size={18} style={{ marginRight: 6 }} color="#e12454" />
              {instagram}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;

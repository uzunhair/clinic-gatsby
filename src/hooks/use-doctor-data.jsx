import { graphql, useStaticQuery } from 'gatsby';

export const useDoctorData = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { order: ASC } }, limit: 8) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              profession
              photo {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return data.allMdx.edges;
};

export default useDoctorData;

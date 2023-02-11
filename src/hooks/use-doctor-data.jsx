import { graphql, useStaticQuery } from 'gatsby';

export const useDoctorData = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
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
          }
        }
      }
    }
  `);

  return data.allMdx.edges;
};

export default useDoctorData;

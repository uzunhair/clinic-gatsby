import { graphql, useStaticQuery } from 'gatsby';

export const useDoctorData = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { frontmatter: { order: ASC } }
        limit: 8
        filter: { fields: { sourceInstanceName: { eq: "doctors-mdx" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              profession
              instagram
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

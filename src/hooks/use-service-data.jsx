import { graphql, useStaticQuery } from 'gatsby';

export const useServiceData = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { order: ASC } }, filter: { fields: { sourceInstanceName: { eq: "service" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              profession
              desc
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

export default useServiceData;

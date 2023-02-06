import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpBdevsMember {
        edges {
          node {
            id
            title
            memberDesignation
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1000, quality: 90)
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allWpBdevsMember.edges;
};

export default useSiteMetadata;

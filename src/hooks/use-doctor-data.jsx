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
            }
          }
        }
      }
    }
  `);

  return data.allMdx.edges;
};

export default useDoctorData;

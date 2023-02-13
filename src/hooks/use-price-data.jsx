import { graphql, useStaticQuery } from 'gatsby';

export const usePriceData = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrice20Csv {
        edges {
          node {
            Name
            id
          }
        }
      }
    }
  `);

  return data.allPrice20Csv.edges;
};

export default usePriceData;

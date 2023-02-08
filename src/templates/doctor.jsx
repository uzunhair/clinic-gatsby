import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data, children }) {
  const featuredImg = getImage(data.mdx.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData);

  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <GatsbyImage image={featuredImg} />
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;

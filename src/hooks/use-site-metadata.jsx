import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          contact {
            phone
            email
            address
            instagram
            whatsapp
            telegram
          }
          menu {
            key
            title
            path
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;

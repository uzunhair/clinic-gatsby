import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/seo';
import Layout from 'components/layout/layout';
import SingleTeam from 'components/Teams/SingleTeam';
import SectionHeader from 'components/section/sectionHeader';

function DoctorsPage({ data }) {
  const doctors = data.allMdx.edges;

  return (
    <Layout title="Врачи" breadcrumbActive="Врачи">
      <section className="team-area pt-115 pb-55">
        <div className="container">
          <SectionHeader title="Профессионалы в медицине" subtitle="Наша команда" icon alignCenter />
          <div className="row">
            {doctors.map(({ node }, index) => {
              return <SingleTeam key={node.id} number={index + 1} data={node} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const Head = () => {
  return <SEO title="Врачи" description="Список врачей Клиника Амирханова в Махачкале" />;
};

export const query = graphql`
  query {
    allMdx(filter: { fields: { sourceInstanceName: { eq: "doctors-mdx" } } }, sort: { frontmatter: { order: ASC } }) {
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
`;

export default DoctorsPage;

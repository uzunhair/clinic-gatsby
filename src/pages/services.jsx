import React from 'react';

import Layout from 'components/layout/layout';
import SEO from 'components/seo';
import SectionHeader from 'components/section/sectionHeader';
import ServicesItem from 'components/Services/services-item';
import useServiceData from 'hooks/use-service-data';

const ServicesPage = () => {
  const data = useServiceData();

  return (
    <Layout title="Услуги" breadcrumbActive="Услуги">
      <section className="servcies-area pt-115 pb-90">
        <div className="container">
          <SectionHeader title="Список наших медицинских услуг" subtitle="Услуги" icon alignCenter />
          <div className="row">
            {data.map(({ node }) => {
              return <ServicesItem key={node.id} data={node} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => {
  return <SEO title="Услуги" description="Список услуг Клиника Амирханова в Махачкале" />;
};

export default ServicesPage;

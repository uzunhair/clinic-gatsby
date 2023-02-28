import React from 'react';
import useServiceData from 'hooks/use-service-data';
import SectionHeader from 'components/section/sectionHeader';
import ServicesItem from './services-item';

const Services = () => {
  const data = useServiceData();

  return (
    <section className="servcies-area gray-bg pt-115 pb-90">
      <div className="container">
        <SectionHeader title="Список наших медицинских услуг" subtitle="Услуги" icon alignCenter />
        <div className="row">
          {data.map(({ node }) => (
            <ServicesItem key={node.id} data={node} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

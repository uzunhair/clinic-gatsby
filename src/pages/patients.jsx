import React from 'react';
import { Link } from 'gatsby';

import SEO from 'components/seo';
import LayoutWidthContainer from 'components/layout/layout-with-container';

const PatientsPage = () => {
  return (
    <LayoutWidthContainer title="Пациентам" breadcrumbActive="Информация для пациентов">
      <p>
        <Link to="/regulation/">Устав</Link>
      </p>
      <p>
        <Link to="/oms-informatiom/">Информация по ОМС</Link>
      </p>
      <p>
        <Link to="/perechen-uslug-okazyvaemyh-oms/">Перечень услуг оказываемых бесплатно по ОМС</Link>
      </p>
    </LayoutWidthContainer>
  );
};

export const Head = () => <SEO title="Пациентам" description="Информация для пациентов" />;

export default PatientsPage;

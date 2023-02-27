import React from 'react';

import SEO from 'components/seo';
import LayoutWidthContainer from 'components/layout/layout-with-container';

const PerechenUslugokazyvaemyhoms = () => {
  return (
    <LayoutWidthContainer title="Перечень услуг оказываемых бесплатно по ОМС" breadcrumbActive="Перечень услуг оказываемых бесплатно по ОМС">
      <div className="post-text mb-20">
        <p>Бесплатное лечение в рамках ОМС по следующим направлениям:</p>
        <p>Кардиология</p>
        <p>Стоматология</p>
        <p>Неврология</p>
        <p>
          Объем оказываемых медицинских услуг в рамках ОМС ограничен, за дополнительной информацией можно обратиться к
          администратору клиники, позвонив по номеру <a href="tel:+7%20(8722)%2077‒70‒07">+7 (8722) 77‒70‒07 </a>
        </p>
      </div>
    </LayoutWidthContainer>
  );
};

export const Head = () => (
  <SEO title="Перечень услуг оказываемых бесплатно по ОМС" description="Перечень услуг оказываемых бесплатно по ОМС" />
);

export default PerechenUslugokazyvaemyhoms;

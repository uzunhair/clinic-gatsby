import React from 'react';
import { UilEnvelopeAlt, UilMapMarker, UilPhone } from '@iconscout/react-unicons';

import Layout from 'components/layout/layout';
import SEO from 'components/seo';
import useSiteMetadata from 'hooks/use-site-metadata';
import SectionHeader from 'components/section/sectionHeader';

const ServicesPage = () => {
  const {
    contact: { phone, email, address },
  } = useSiteMetadata();

  return (
    <Layout title="Контакты" breadcrumbActive="Контакты">
      <section className="contact-area section__content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 ">
              <div className="contact text-center">
                <div className="contact__icon">
                  <UilPhone size={48} color="#e12454" />
                </div>
                <h3>Телефон</h3>
                <p>
                  <a href={`tel:${phone}`}>{phone}</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact text-center">
                <div className="contact__icon">
                  <UilMapMarker size={48} color="#e12454" />
                </div>
                <h3>Наш Адрес</h3>
                <p>{address}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact text-center">
                <div className="contact__icon">
                  <UilEnvelopeAlt size={48} color="#e12454" />
                </div>
                <h3>Наш Email</h3>
                <p>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-area gray-bg pt-115 pb-90">
        <div className="container">
          <SectionHeader title="Контролирующие органы" subtitle="Адреса и контакты органов в сфере охраны здоровья" />
          <div className="h3">Министерство здравоохранения Республики Дагестан</div>
          <ul className="mb-25">
            <li>367000, Республика Дагестан, г.Махачкала, ул.Абубакарова, 10</li>
            <li>Официальный сайт: http://minzdravrd.ru/</li>
            <li>Горячая линия: +7 (8722) 78-03-03</li>
            <li>Телефон: +7 (8722) 68-28-03, +7 (8722) 68-31-54, 67-90-73</li>
            <li>Факс: +7 (8722) 67-90-70</li>
            <li>E-mail: minzdrav@e-dag.ru</li>
          </ul>

          <div className="h3">Территориальный фонд обязательного медицинского страхования Республики Дагестан</div>
          <ul>
            <li>367008, Республика Дагестан, г.Махачкала, ул.Ляхова, 47а</li>
            <li>Официальный сайт: http://minzdravrd.ru/</li>
            <li>Горячая линия: 8-800-2222-905</li>
            <li>Телефон: +7 (8722) 68-03-04</li>
            <li>Факс: +7 (8722) 67-03-41</li>
            <li>E-mail: direct@fomsrd.ru</li>
          </ul>
        </div>
      </section>

      <div className="gis-map">
        <iframe
          title="2gis"
          frameBorder="no"
          style={{ border: '1px solid #a3a3a3', boxSizing: 'border-box' }}
          width="640"
          height="600"
          src="https://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A42.972635037322625%2C%22lon%22%3A47.490677833557136%2C%22zoom%22%3A17%7D%2C%22opt%22%3A%7B%22city%22%3A%22makhachkala%22%7D%2C%22org%22%3A%2270000001039175676%22%7D"
        />
      </div>
    </Layout>
  );
};

export const Head = () => {
  return <SEO title="Услуги" description="Список услуг Клиника Амирханова в Махачкале" />;
};

export default ServicesPage;

import React, { memo, useState, useCallback } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from 'components/seo';
import useSiteMetadata from 'hooks/use-site-metadata';
import Header from 'components/header';
import PageHeader from 'components/header/pageHeader';
import Footer from 'components/Footer';
import { UilInstagramAlt, UilPhone, UilSearch } from '@iconscout/react-unicons';

const Category = styled.div`
  margin-bottom: 2.5rem;
`;

const CategoryTitle = styled.div`
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: #e12454;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  + div {
    border-top: 1px solid #eaeaea;
  }
`;

const Count = styled.div`
  white-space: nowrap;
  display: flex;
  margin-left: 1rem;
  justify-content: flex-end;
  text-align: right;
  font-size: 14px;

  @media (min-width: 768px) {
    min-width: 150px;
    right: 0;
  }
`;

const CountDefis = styled.span`
  flex: 1 0 auto;
  text-align: center;
`;

const Input = memo(
  ({ onChange }) =>
    console.log('render button') || <input type="text" name="price-filter" onChange={onChange} placeholder="Поиск" />,
);

const PricesPage = ({ data }) => {
  const list = data.allPrice20Csv.group;
  const {
    contact: { phone, instagram },
  } = useSiteMetadata();

  const [value, setValue] = useState('');
  const [price, setPrice] = useState(list);
  const onChange = useCallback(({ target }) => setValue(target.value), []);
  const filterPrice = price.map(element => {
    return {
      ...element,
      edges: element.edges.filter(edges => edges.node.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1),
    };
  });

  return (
    <>
      <Header />
      <PageHeader title="Прайс лист" breadcrumbActive="Прайс лист" />
      <div className="doctor-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="search-form mb-40">
                <Input onChange={onChange} />
                <button type="submit">
                  <UilSearch />
                </button>
              </div>
              <article className="doctor-details-box">
                {filterPrice.map(({ fieldValue, edges }) => {
                  return (
                    <Category key={fieldValue} className={edges.length ? '' : 'd-none'}>
                      <CategoryTitle className="h3">{fieldValue}</CategoryTitle>
                      {edges.map(({ node: { id, Name: name, Price_Min: priceMin, Price_Max: priceMax } }) => {
                        return (
                          <Body key={id}>
                            <div>{name}</div>
                            {priceMin > 1 && (
                              <Count>
                                <span>{`${priceMin}  ₽`}</span>
                                {priceMax && (
                                  <>
                                    <CountDefis>-</CountDefis>
                                    <span>{`${priceMax}  ₽`}</span>
                                  </>
                                )}
                              </Count>
                            )}
                          </Body>
                        );
                      })}
                    </Category>
                  );
                })}
              </article>
            </div>
            <div className="col-xl-5 col-lg-4">
              <div className="service-widget mb-50">
                <div className="widget-title-box mb-30">
                  <h3 className="widget-title">Контакты</h3>
                </div>
                <div className="more-service-list">
                  <ul>
                    <li>
                      <a href={`tel:${phone}`}>
                        <div className="more-service-icon">
                          <UilPhone size={40} color="#e12454" />
                        </div>
                        <div className="more-service-title doctor-details-title">
                          <span>Телефон</span>
                          {phone}
                        </div>
                      </a>
                    </li>
                    {instagram && (
                      <li>
                        <a href={`https://instagram.com/${instagram}`}>
                          <div className="more-service-icon">
                            <UilInstagramAlt size={40} color="#e12454" />
                          </div>
                          <div className="more-service-title doctor-details-title">
                            <span>Instagram</span>
                            {instagram}
                          </div>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="service-widget mb-100">
                <div className="widget-title-box mb-30">
                  <h3 className="widget-title">Рабочие дни</h3>
                </div>
                <div className="doctor-detials-lan">
                  <ul>
                    <li>
                      <span className="item">ПН</span>
                    </li>
                    <li>
                      <span className="item">ВТ</span>
                    </li>
                    <li>
                      <span className="item">СР</span>
                    </li>
                    <li>
                      <span className="item">ЧТ</span>
                    </li>
                    <li>
                      <span className="item">СБ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const query = graphql`
  query Prices {
    allPrice20Csv(sort: { Name: ASC }) {
      group(field: { Category: SELECT }) {
        edges {
          node {
            id
            Category
            Name
            Price_Max
            Price_Min
          }
        }
        fieldValue
        totalCount
      }
    }
  }
`;

export const Head = () => {
  return <SEO title="Прайс лист" description="Список цен на услуги" />;
};

export default PricesPage;

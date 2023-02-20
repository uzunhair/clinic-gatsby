import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from 'components/seo';
import useSiteMetadata from 'hooks/use-site-metadata';
import Header from 'components/header';
import PageHeader from 'components/header/pageHeader';
import Footer from 'components/Footer';
import { UilInstagramAlt, UilPhone } from '@iconscout/react-unicons';

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
    border-top: 1px solid rgb(200 183 255 / 20%);
  }
`;

const Count = styled.div`
  white-space: nowrap;
  display: flex;
  min-width: 150px;
  justify-content: flex-end;
  text-align: right;
  font-size: 14px;
`;

const CountDefis = styled.span`
  flex: 1 0 auto;
  text-align: center;
`;

const PricesPage = ({ data }) => {
  const list = data.allPrice20Csv.group;
  const {
    contact: { phone, instagram },
  } = useSiteMetadata();

  return (
    <>
      <Header />
      <PageHeader title="Прайс лист" breadcrumbActive="Прайс лист" />
      <div className="doctor-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 order-2 order-lg-0">
              <article className="doctor-details-box">
                {list.map(({ fieldValue, edges }) => {
                  return (
                    <Category key={fieldValue}>
                      <CategoryTitle className="h3">{fieldValue}</CategoryTitle>
                      {edges.map(({ node }) => {
                        return (
                          <Body key={node.id}>
                            <div>{node.Name}</div>
                            <Count>
                              <span>{`${node.Price_Min}  ₽`}</span>
                              {node.Price_Max && (
                                <>
                                  <CountDefis>-</CountDefis>
                                  <span>{`${node.Price_Max}  ₽`}</span>
                                </>
                              )}
                            </Count>
                          </Body>
                        );
                      })}
                    </Category>
                  );
                })}
              </article>
            </div>
            <div className="col-xl-5 col-lg-4 order-1">
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

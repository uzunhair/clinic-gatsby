import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

import Header from 'components/header';
import PageHeader from 'components/header/pageHeader';
import Footer from 'components/Footer';
import SectionHeader from 'components/section/sectionHeader';
import PriceList from 'components/priceList';
import TimeLines from 'components/timelines';
import SEO from 'components/seo';
import { UilInstagramAlt, UilPhone } from '@iconscout/react-unicons';

const shortcodes = { Link, SectionHeader, PriceList, TimeLines };

export default function ServicePageTemplate({ data, children }) {
  const { title, profession, instagram } = data.mdx.frontmatter;
  const featuredImg = getImage(data.mdx.frontmatter.photo?.childImageSharp?.gatsbyImageData);

  return (
    <>
      <Header />
      <PageHeader title={title} subtitle={profession} />
      <div className="doctor-details-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 order-2 order-lg-0">
              <article className="doctor-details-box">
                <MDXProvider components={shortcodes}>{children}</MDXProvider>
              </article>
            </div>
            <div className="col-xl-5 col-lg-4 order-1">
              <div className="service-widget mb-50">
                <div className="widget-title-box mb-30">
                  <h3 className="widget-title">More Services</h3>
                </div>
                <div className="more-service-list">
                  <ul>
                    <li>
                      <Link to="/services">
                        <div className="more-service-icon">
                          <img src="../health.svg" alt="" />
                        </div>
                        <div className="more-service-title">Body Surgery</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <div className="more-service-icon">
                          <img src="../health.svg" alt="" />
                        </div>
                        <div className="more-service-title">Dental Care</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <div className="more-service-icon">
                          <img src="../health.svg" alt="" />
                        </div>
                        <div className="more-service-title">Eye Care</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <div className="more-service-icon">
                          <img src="../health.svg" alt="" />
                        </div>
                        <div className="more-service-title">Blood cancer</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <div className="more-service-icon">
                          <img src="../health.svg" alt="" />
                        </div>
                        <div className="more-service-title">Neurology Sargery</div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services">
                        <div className="more-service-icon">
                          <img src="../health.svg" alt="" />
                        </div>
                        <div className="more-service-title">Allergic Issue</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="service-widget mb-50">
                <div className="widget-title-box mb-30">
                  <h3 className="widget-title">Get Some Advice?</h3>
                </div>
                <form className="service-contact-form" action="">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contact-input contact-icon contact-user mb-20">
                        <input type="text" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-input contact-icon contact-mail mb-20">
                        <input type="text" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="contact-input contact-icon contact-hourglass">
                        <select className="form-select select_style" aria-label="Default select example">
                          <option defaultValue="Select type of care">Select type of care</option>
                          <option defaultValue="1">Select type of care</option>
                          <option defaultValue="2">Select type of care</option>
                          <option defaultValue="2">Select type of care</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="ser-form-btn text-center mt-40">
                  <a href="#" className="primary_btn btn-icon ml-0" style={{ animationDelay: '0.6s' }} tabIndex="0">
                    <span>+</span>
                    Request for call
                  </a>
                </div>
              </div>
              <div className="service-widget mb-50 border-0 p-0">
                <div className="banner-widget">
                  <Link to="/contact">
                    <img src="img/services/services-banner.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="service-widget mb-50">
                <div className="team-wrapper team-box-2 team-box-3 text-center">
                  <div className="team-thumb">
                    {featuredImg ? (
                      <GatsbyImage alt={title} image={featuredImg} />
                    ) : (
                      <StaticImage src="../images/empty-doctor.svg" alt="Врач" />
                    )}
                  </div>
                  <div className="team-member-info mt-35">
                    <h3>{title}</h3>
                    <div className="f-500 text-up-case letter-spacing pink-color h6">{profession}</div>
                  </div>
                </div>
              </div>
              <div className="service-widget mb-50">
                <div className="widget-title-box mb-30">
                  <h3 className="widget-title">Контакты</h3>
                </div>
                <div className="more-service-list">
                  <ul>
                    <li>
                      <a href="tel:+79654887700">
                        <div className="more-service-icon">
                          <UilPhone size={40} color="#e12454" />
                        </div>
                        <div className="more-service-title doctor-details-title">
                          <span>Телефон</span>
                          +7‒965‒488‒77‒00
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
}

export const Head = ({ data }) => {
  return <SEO title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.desc} />;
};

export const query = graphql`
  query ($id: String!, $category: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        profession
        instagram
        desc
        photo {
          childImageSharp {
            gatsbyImageData(width: 600, quality: 100)
          }
        }
      }
    }
    allPrice20Csv(filter: { Category: { eq: $category } }, sort: { Name: ASC }) {
      edges {
        node {
          id
          Name
          Price_Min
          Price_Max
          Category
        }
      }
    }
  }
`;

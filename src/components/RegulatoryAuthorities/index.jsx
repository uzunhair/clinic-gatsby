import React from 'react';
import Slider from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const Item = styled.div`
  padding: 0 20px;
`;

const RegulatoryAuthorities = () => {
  const settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="brand-area pos-rel pt-115 pb-110">
      <div className="container">
        <div className="about-title text-center mb-70 position-relative">
          <div className="green-color h5">Для пациентов</div>
          <h3 className="h1">Контролирующие органы</h3>
        </div>
        <div className="row">
          <Slider className="brand-active" {...settings}>
            <Item>
              <StaticImage src="../../images/banner-1.jpg" alt="A dinosaur" />
            </Item>
            <Item>
              <StaticImage src="../../images/banner-5.jpg" alt="A dinosaur" />
            </Item>
            <Item>
              <StaticImage src="../../images/banner-6.jpg" alt="A dinosaur" />
            </Item>
            <Item>
              <StaticImage src="../../images/banner-7.jpg" alt="A dinosaur" />
            </Item>
            <Item>
              <StaticImage src="../../images/banner-8.jpg" alt="A dinosaur" />
            </Item>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryAuthorities;

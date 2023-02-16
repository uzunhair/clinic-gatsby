import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation } from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import MainSliderItem1 from './main-slider-item-1';
import MainSliderItem from './main-slider-item';

const MainSilder = () => {
  return (
    <section className="hero-area">
      <div className="hero-slider">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}>
          <SwiperSlide>
            <MainSliderItem1 bgClassName="1" />
          </SwiperSlide>
          <SwiperSlide>
            <MainSliderItem bgClassName="2" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MainSilder;

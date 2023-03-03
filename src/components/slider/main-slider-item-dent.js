import React from 'react';

const MainSliderItemDent = ({ bgClassName, image }) => {
  return (
    <div className={`single-slider slider-height d-flex align-items-center slider_bg_${bgClassName}`}>
      {image}
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="hero-tex white-color">
              <div className="hero-slider-caption ">
                <div className="d-flex align-items-center hero-slider-top">
                  <div className="primary_btn hero-slider-action">Акция</div>
                  <div className="hero-slider-discont">
                    3000 ₽ вместо <span>4500 ₽</span>
                  </div>
                </div>
                <div className="white-color h1">При лечении кариеса Профессиональная чистка зубов бесплатно.</div>
                <p className="white-color">
                  Удаление зубного камня ультразвуком, обучение правильного ухода за ротовой полостью, шлифовка и
                  полировка зубов
                </p>
              </div>
              <div className="hero-slider-btn">
                <a href="https://wa.me/79382010902" className="primary_btn btn-icon ml-0 mr-20">
                  <span>+</span>
                  Связяться с врачом
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSliderItemDent;

import React from 'react';
import { Link } from 'gatsby';
// import { UilPlay } from '@iconscout/react-unicons';

const MainSliderItem = ({ bgClassName }) => {
  return (
    <div className={`single-slider slider-height d-flex align-items-center slider_bg_${bgClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="hero-tex white-color">
              <div className="hero-slider-caption ">
                <div className="white-color">Мы заботимся о Вашем здоровье</div>
                <div className="white-color h1">Лучшие врачи и современное оборудование.</div>
                <p className="white-color">
                  С первых дней работы Клиники Амирханова наша команда сосредоточена на создании высококачественного обслуживания
                </p>
              </div>
              <div className="hero-slider-btn">
                <Link to="/contact" className="primary_btn btn-icon ml-0 mr-20">
                  <span>+</span>
                  Записаться
                </Link>

                {/* <button className="play-btn popup-video"> */}
                {/*  <UilPlay /> */}
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSliderItem;

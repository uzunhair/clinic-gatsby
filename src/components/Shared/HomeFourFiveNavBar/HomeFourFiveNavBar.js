import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import {
  UilTelegram,
  UilWhatsappAlt,
  UilInstagramAlt,
  UilEnvelope,
  UilPhone,
  UilClock,
  UilPhoneVolume,
} from '@iconscout/react-unicons';
import { StaticImage } from 'gatsby-plugin-image';
// import Sidebar from '../Sidebar/Sidebar';

const HomeFourFiveNavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [stickyMenu, setStickyMenu] = useState(false);
  useEffect(() => {
    const stickyMenuBar = () => {
      return window.scrollY > 80 ? setStickyMenu(true) : setStickyMenu(false);
    };
    window.addEventListener('scroll', stickyMenuBar);
  }, []);

  return (
    <>
      <header>
        <div className="top-bar4 white-bg top-border d-none d-md-block pl-55 pr-55 pt-25 pb-25">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className="col-lg">
                <div className="header-info header-info4 p-0">
                  <span>
                    <Link to="mailto:amirkhanov.clinique@gmail.com">
                      <UilEnvelope size={18} color="#e12454" style={{ marginRight: 8 }} />
                      amirkhanov.clinique@gmail.com
                    </Link>
                  </span>
                  <span>
                    <Link to="tel:+79654887700">
                      <UilPhone size={18} color="#e12454" style={{ marginRight: 8 }} />
                      +7‒965‒488‒77‒00
                    </Link>
                  </span>
                  <span>
                    <Link to="https://yandex.ru/maps/?from=api-maps&ll=47.516468%2C42.984490&mode=routes&origin=jsapi21&rtext=~42.972454%2C47.490812&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNjk1MjAyNzI0EnLQoNC%2B0YHRgdC40Y8sINCg0LXRgdC%2F0YPQsdC70LjQutCwINCU0LDQs9C10YHRgtCw0L0sINCc0LDRhdCw0YfQutCw0LvQsCwg0YPQu9C40YbQsCDQptC40L7Qu9C60L7QstGB0LrQvtCz0L4sIDEy0JIiCg2X9j1CFczjK0I%3D&z=13.16">
                      <UilClock size={18} color="#e12454" style={{ marginRight: 8 }} />
                      г. Махачкала, ул. Циолковского 12в
                    </Link>
                  </span>
                </div>
              </div>
              <div className="col col-lg-auto">
                <div className="top4-right d-flex justify-content-end">
                  <div className="top4-menu">
                    <ul className="list-inline">
                      <li>
                        <a className="need-help" href="#">
                          Нужна помощь?
                        </a>
                      </li>
                      <li>
                        <a href="#">Прайс лист</a>
                      </li>
                      <li>
                        <a href="#">Медиа</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-social-icons top4-social d-none d-xl-block">
                    <ul>
                      <li>
                        <a href="#">
                          <UilTelegram size={24} color="#b2bfcf" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <UilWhatsappAlt size={24} color="#b2bfcf" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <UilInstagramAlt size={24} color="#b2bfcf" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- menu-area --> */}
        <div
          className={
            stickyMenu
              ? 'sticky_menu header-menu-area menu-area4 pl-55 pr-55'
              : 'header-menu-area menu-area4 pl-55 pr-55'
          }>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-7 col-lg-12 col-md-12 d-flex align-items-center navbar__wrapper">
                <div className="logo pos-rel">
                  <Link to="/">
                    <StaticImage src="../../../images/logo/logo.svg" alt="A dinosaur" quality={100} />
                  </Link>
                </div>
                <div className="header__menu header__menu4 pl-60">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link to="/">Главная +</Link>
                      </li>
                      <li>
                        <Link to="/services">Врачи +</Link>
                      </li>
                      <li>
                        <Link to="/doctors">Услуги +</Link>
                      </li>
                      <li>
                        <Link to="/doctors">Контакты +</Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div onClick={handleShow} className="side-menu-icon d-lg-none text-end">
                  <button className="side-toggle border-0 bg-transparent">
                    <i className="fas fa-bars" />{' '}
                  </button>
                </div>
              </div>
              <div className="col-xl-5 col-lg-9 col-md-9 d-none d-xl-flex d-flex align-items-center justify-content-end">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="header-lang pos-rel d-none d-lg-block">
                    <div className="lang-icon">
                      <UilPhoneVolume />
                      <span>
                        Администраторы
                      </span>
                    </div>
                    <ul className="header-lang-list">
                      <li>
                        <a href="#">USA</a>
                      </li>
                      <li>
                        <a href="#">UK</a>
                      </li>
                      <li>
                        <a href="#">CA</a>
                      </li>
                      <li>
                        <a href="#">AU</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-button pl-50">
                    <Link
                      to="/contact"
                      className="primary_btn btn-icon ml-0"
                      style={{ animationDelay: '0.6s' }}
                      tabIndex="0">
                      <span>+</span>
                      Позвонить в клинику
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <Sidebar show={show} handleClose={handleClose} /> */}
    </>
  );
};

export default HomeFourFiveNavBar;

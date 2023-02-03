import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  UilTelegram,
  UilWhatsappAlt,
  UilInstagramAlt,
  UilEnvelope,
  UilPhone,
  UilClock,
  UilPhoneVolume,
  UilBars,
} from '@iconscout/react-unicons';
import Sidebar from '../Sidebar';

import logoImg from '../../images/logo/logo.svg';

const NavBtn = styled.button`
  background-color: transparent;
  border-width: 0;
`;

const Logo = styled(Link)`
  max-width: 160px;

  @media (min-width: 768px) {
    max-width: 230px;
  }
`;

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = useCallback(() => setShow(false), []);
  const handleShow = useCallback(() => setShow(true), []);

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
                    <a href="mailto:amirkhanov.clinique@gmail.com">
                      <UilEnvelope size={18} color="#e12454" style={{ marginRight: 8 }} />
                      amirkhanov.clinique@gmail.com
                    </a>
                  </span>
                  <span>
                    <a href="tel:+79654887700">
                      <UilPhone size={18} color="#e12454" style={{ marginRight: 8 }} />
                      +7‒965‒488‒77‒00
                    </a>
                  </span>
                  <span>
                    <a href="https://yandex.ru/maps/?from=api-maps&ll=47.516468%2C42.984490&mode=routes&origin=jsapi21&rtext=~42.972454%2C47.490812&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNjk1MjAyNzI0EnLQoNC%2B0YHRgdC40Y8sINCg0LXRgdC%2F0YPQsdC70LjQutCwINCU0LDQs9C10YHRgtCw0L0sINCc0LDRhdCw0YfQutCw0LvQsCwg0YPQu9C40YbQsCDQptC40L7Qu9C60L7QstGB0LrQvtCz0L4sIDEy0JIiCg2X9j1CFczjK0I%3D&z=13.16">
                      <UilClock size={18} color="#e12454" style={{ marginRight: 8 }} />
                      г. Махачкала, ул. Циолковского 12в
                    </a>
                  </span>
                </div>
              </div>
              <div className="col col-lg-auto">
                <div className="top4-right d-flex justify-content-end">
                  <div className="top4-menu">
                    <ul className="list-inline">
                      <li>
                        <a className="need-help" href="#1">
                          Нужна помощь?
                        </a>
                      </li>
                      <li>
                        <a href="#1">Прайс лист</a>
                      </li>
                      <li>
                        <a href="#1">Медиа</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-social-icons top4-social d-none d-xl-block">
                    <ul>
                      <li>
                        <a href="#1">
                          <UilTelegram size={24} color="#b2bfcf" />
                        </a>
                      </li>
                      <li>
                        <a href="#1">
                          <UilWhatsappAlt size={24} color="#b2bfcf" />
                        </a>
                      </li>
                      <li>
                        <a href="#1">
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
        <div
          className={
            stickyMenu
              ? 'sticky_menu header-menu-area menu-area4 pl-55 pr-55'
              : 'header-menu-area menu-area4 pl-55 pr-55'
          }>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl col-lg-12 col-md-12 d-flex align-items-center navbar__wrapper">
                <Logo to="/">
                  <img src={logoImg} alt="Клиника Амирханова" />
                </Logo>
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

                <NavBtn className="side-toggle d-lg-none" onClick={handleShow}>
                  <UilBars size={28} color="#10111e" />
                </NavBtn>
              </div>
              <div className="col-xl-auto col-lg-9 col-md-9 d-none d-xl-flex d-flex align-items-center justify-content-end">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="header-lang pos-rel d-none d-xxl-block">
                    <div className="lang-icon">
                      <UilPhoneVolume />
                      <span>Администраторы</span>
                    </div>
                    <ul className="header-lang-list">
                      <li>
                        <a href="#1">USA</a>
                      </li>
                      <li>
                        <a href="#1">UK</a>
                      </li>
                      <li>
                        <a href="#1">CA</a>
                      </li>
                      <li>
                        <a href="#1">AU</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-button pl-50">
                    <Link
                      to="/contact"
                      className="primary_btn btn-icon ml-0 d-flex"
                      style={{ animationDelay: '0.6s' }}
                      tabIndex="0">
                      <span>+</span>
                      <div>Позвонить</div>
                      <div className="d-none d-xl-block pl-5"> в клинику</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default NavBar;

import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { UilMapMarker, UilEnvelope, UilPhone, UilClockEight } from '@iconscout/react-unicons';

const ContactItem = styled.div`
  border-top: 1px solid #eaeaea;
  padding: 10px 0;
`;

const Sidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" className="side__bar">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Навигация</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <nav>
          <ul className="sidebar-nav">
            <li className="sidebar-nav__item">
              <Link to="/">Главная +</Link>
            </li>
            <li className="sidebar-nav__item">
              <Link to="/services">Врачи +</Link>
            </li>
            <li className="sidebar-nav__item">
              <Link to="/doctors">Услуги +</Link>
            </li>
            <li className="sidebar-nav__item">
              <Link to="/doctors">Контакты +</Link>
            </li>
          </ul>
        </nav>
        <ContactItem>
          <a href="tel:+79654887700">
            <UilPhone size={18} color="#e12454" style={{ marginRight: 8 }} />
            +7‒965‒488‒77‒00
          </a>
        </ContactItem>
        <ContactItem>
          <a href="mailto:amirkhanov.clinique@gmail.com">
            <UilEnvelope size={18} color="#e12454" style={{ marginRight: 8 }} />
            amirkhanov.clinique@gmail.com
          </a>
        </ContactItem>
        <ContactItem>
          <a href="https://yandex.ru/maps/?from=api-maps&ll=47.516468%2C42.984490&mode=routes&origin=jsapi21&rtext=~42.972454%2C47.490812&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNjk1MjAyNzI0EnLQoNC%2B0YHRgdC40Y8sINCg0LXRgdC%2F0YPQsdC70LjQutCwINCU0LDQs9C10YHRgtCw0L0sINCc0LDRhdCw0YfQutCw0LvQsCwg0YPQu9C40YbQsCDQptC40L7Qu9C60L7QstGB0LrQvtCz0L4sIDEy0JIiCg2X9j1CFczjK0I%3D&z=13.16">
            <UilMapMarker size={18} color="#e12454" style={{ marginRight: 8 }} />
            г. Махачкала, ул. Циолковского 12в
          </a>
        </ContactItem>
        <ContactItem>
          <UilClockEight size={18} color="#e12454" style={{ marginRight: 8 }} />
          Понедельник-Суббота 9:00-18:00
        </ContactItem>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;

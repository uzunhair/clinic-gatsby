import React from 'react';
import styled from 'styled-components';

import doctorIcon from '../../images/section-back-icon.svg';

const Title = styled.h3`
  margin-bottom: 18px;
  line-height: 1.2;
  letter-spacing: -0.3px;
  font-family: 'Poppins', sans-serif;
  color: #223645;
  font-weight: 600;
  font-size: calc(1.375rem + 1.5vw);
  position: relative;
  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 992px) {
    font-size: 60px;
  }
`;

const SectionLine = styled.div`
  position: relative;
  height: 3px;
  width: 80px;
  background-color: #e12454;
  margin-left: auto;
  margin-right: auto;

  &:after,
  &:before {
    content: '';
    height: 3px;
    background-color: #e12454;
    width: 20px;
    position: absolute;
    left: -30px;
  }
  &:after {
    left: auto;
    right: -30px;
  }
`;

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-10">
        <div className="section-title text-center pos-rel mb-75">
          <img className="section-back-icon" src={doctorIcon} alt="" />
          <h5 className="pos-rel">{subtitle}</h5>
          <Title>{title}</Title>
          <SectionLine />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;

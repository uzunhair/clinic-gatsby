import React from 'react';
import styled, { css } from 'styled-components';

import doctorIcon from '../../images/section-back-icon.svg';

const Container = styled.div`
  position: relative;
  margin-bottom: 30px;
  ${props =>
    props.alignCenter &&
    css`
      margin: 0 auto;
      text-align: center;
      margin-bottom: 75px;
      @media (min-width: 992px) {
        width: 80%;
      }
      @media (min-width: 1200px) {
        width: 50%;
      }
    `}
  ~ .section-title {
    margin-top: 40px;
  }
`;

const Title = styled.h3`
  margin-bottom: 18px;
  line-height: 1.2;
  letter-spacing: -0.3px;
  font-family: 'Inter', sans-serif;
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

const SubTitle = styled.div`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: #647589;
  margin-bottom: 28px;
`;

const Icon = styled.img`
  position: absolute;
  left: 0;
  margin: auto;
  top: -50px;
  ${props => (props.alignCenter ? 'right: 0' : '')};
`;

const SectionLine = styled.div`
  position: relative;
  height: 3px;
  width: 80px;
  background-color: #e12454;
  ${props => (props.alignCenter ? 'margin: 0 auto' : 'margin-left: 30px')};

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

const SectionHeader = ({ title, subtitle, icon, alignCenter, test }) => {
  console.log('rest', test);

  return (
    <Container className="section-title" alignCenter={alignCenter}>
      {icon && <Icon src={doctorIcon} alignCenter={alignCenter} alt="" />}
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      <Title>{title}</Title>
      <SectionLine alignCenter={alignCenter} />
    </Container>
  );
};

export default SectionHeader;

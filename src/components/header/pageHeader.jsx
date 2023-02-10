import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { mediaBreakpointUpMd } from 'components/styled';

const Section = styled.section`
  background-color: #f4f9fc;
  padding: 100px 0;

  // @media (min-width: 768px) {
  //   background-color: blue;
  // }
  //
  // ${mediaBreakpointUpMd`
  //   background-color: red;
  // `}
`;

const Title = styled.h1`
  font-size: 44px;
  margin-bottom: 15px;
`;

const SubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Breadcrumb = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
`;

const BreadcrumbItem = styled.li`
  list-style: none;
  position: relative;
  padding-right: 10px;
  margin-right: 6px;

  &:after {
    content: '›';
    display: block;
    line-height: 1;
    position: absolute;
    right: 0;
    bottom: 3px;
  }

  &:last-child:after {
    content: '';
  }

  &.active {
    color: #95a3b3;
  }

  a {
    color: #95a3b3;
  }
`;

const PageHeader = ({ title, subtitle }) => {
  return (
    <Section>
      <div className="container">
        <SubTitle>Стоматолог</SubTitle>
        <Title>{title}</Title>
        <nav aria-label="breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Главная</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/">Врачи</Link>
            </BreadcrumbItem>
            <BreadcrumbItem aria-current="page" className="active">
              {subtitle}
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
      </div>
    </Section>
  );
};

export default PageHeader;

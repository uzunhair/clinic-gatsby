import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { mediaBreakpointUpMd, mediaBreakpointUpLg } from 'components/styled';

const Section = styled.section`
  background-color: #f4f9fc;
  padding: 36px 0;

  ${mediaBreakpointUpMd`
    padding: 80px 0;
  `}
  ${mediaBreakpointUpLg`
    padding: 100px 0;
  `}
`;

const Title = styled.h1`
  font-size: 28px;
  margin-top: 0;

  ${mediaBreakpointUpMd`
    font-size: 36px;
    margin-bottom: 15px;
  `}
  ${mediaBreakpointUpLg`
    font-size: 44px;
  `}
`;

const SubTitle = styled.div`
  font-size: 16px;
  margin-bottom: 10px;

  ${mediaBreakpointUpMd`
    font-size: 18px;
  `}
  ${mediaBreakpointUpLg`
    font-size: 20px;
  `}
`;

const Breadcrumb = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  flex-wrap: wrap;
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

const PageHeader = ({ title, breadcrumbActive, showSubtitle, breadcrumb }) => {
  return (
    <Section>
      <div className="container">
        {showSubtitle && <SubTitle>{breadcrumbActive}</SubTitle>}
        <Title>{title}</Title>
        <nav aria-label="breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Главная</Link>
            </BreadcrumbItem>
            {breadcrumb && (
              <BreadcrumbItem>
                <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
              </BreadcrumbItem>
            )}
            <BreadcrumbItem aria-current="page" className="active">
              {breadcrumbActive}
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
      </div>
    </Section>
  );
};

export default PageHeader;

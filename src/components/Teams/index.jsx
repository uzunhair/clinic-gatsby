import React from 'react';
import styled from 'styled-components';

import useSiteMetadata from '../../hooks/use-site-metadata';
import SingleTeam from './SingleTeam';
import doctorIcon from '../../images/section-back-icon.svg';

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
    border-top: 3px solid #e12454;
    width: 20px;
    position: absolute;
    left: -30px;
  }
  &:after {
    content: '';
    border-top: 3px solid #e12454;
    left: auto;
    right: -30px;
  }
`;

const Teams = () => {
  const data = useSiteMetadata();
  console.log(data);

  return (
    <section className="team-area pt-180 pb-65 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title text-center pos-rel mb-75">
              <div className="section-icon">
                <img className="section-back-icon" src={doctorIcon} alt="" />
              </div>
              <div className="section-text pos-rel">
                <h5>Our Team</h5>
                <h1>A Professional & Care Provider</h1>
              </div>
              <SectionLine />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map(({ node }, index) => (
            <SingleTeam
              key={node.id}
              number={index + 1}
              image="1"
              name={node.title}
              title={node.memberDesignation}
              arr={node}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;

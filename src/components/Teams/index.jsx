import React from 'react';

import useSiteMetadata from '../../hooks/use-site-metadata';
import SingleTeam from './SingleTeam';
import SectionHeader from '../section/sectionHeader';

const Teams = () => {
  const data = useSiteMetadata();
  console.log(data);

  return (
    <section className="team-area pt-180 pb-65 gray-bg">
      <div className="container">
        <SectionHeader title="Профессионалы в медицине" subtitle="Наша команда" />
        <div className="row">
          {data.map(({ node }, index) => (
            <SingleTeam key={node.id} number={index + 1} data={node} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;

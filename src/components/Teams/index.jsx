import React from 'react';

import useDoctorData from 'hooks/use-doctor-data';
import SingleTeam from './SingleTeam';
import SectionHeader from '../section/sectionHeader';

const Teams = () => {
  const data = useDoctorData();
  console.log(data);

  return (
    <section className="team-area pt-180 pb-65 gray-bg">
      <div className="container">
        <SectionHeader title="Профессионалы в медицине" subtitle="Наша команда" icon alignCenter />
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

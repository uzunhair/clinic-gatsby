import React from 'react';
import { Link } from 'gatsby';

import useDoctorData from 'hooks/use-doctor-data';
import SingleTeam from './SingleTeam';
import SectionHeader from '../section/sectionHeader';

const Teams = () => {
  const data = useDoctorData();

  return (
    <section className="team-area pt-180 pb-65">
      <div className="container">
        <SectionHeader title="Профессионалы в медицине" subtitle="Наша команда" icon alignCenter />
        <div className="row">
          {data.map(({ node }, index) => (
            <SingleTeam key={node.id} number={index + 1} data={node} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/doctors" className="primary_btn btn-icon btn-icon-blue ml-0">
            <span>+</span>
            Все врачи
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Teams;

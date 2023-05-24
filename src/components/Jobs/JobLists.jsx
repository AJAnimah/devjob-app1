import React from 'react';
import jobs from '../../data/data.json';
import { Link } from 'react-router-dom';

const JobLists = () => {
  return (
    <div className='jobs__wrapper'>
      {jobs.map((item) => (
        <div className="job__item" key={item.id}>
          <img src={item.logo} alt="" />
          <div className="job__content">
            <h5>{item.postedAt} - {item.contract}</h5>
            <h2><Link to={`/jobs/${item.position}`}>{item.position}</Link></h2>
            <p>{item.company}</p>
            <div className="location">
              <p> <span>{item.location}</span> </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobLists;



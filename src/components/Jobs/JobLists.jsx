import React from 'react';
import jobs from '../../data/data.json';
import { Link } from 'react-router-dom';

const JobLists = () => {
  return (
    <div className='jobs__wrapper'>
      {jobs.map((item) => (
        <div className="job__item" key={item.id}>
          <Link to={`/jobs/${item.position}`}>
            <div className="card">
              <div className="company-logo" style={{ backgroundColor: item.logoBackground }}>
                <img
                  className="company-logo-img"
                  src={`/${item.logo}`}
                  alt={`${item.company} company logo`}
                />
              </div>
              <p className="job__content">{item.postedAt} - {item.contract}</p>
              <p className="card-title">{item.position}</p>
              <p>{item.company}</p>
              <h5 className="card-location">{item.location}</h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobLists;
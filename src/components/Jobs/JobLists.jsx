import React from 'react'
import jobs from '../../data/data.json'
import { Link } from 'react-router-dom'



const JobLists = () => {
  return (
    <div className='jobs__wrapper'>
      {jobs.map((item) => (
        <div className="job__item" key={item.id}>
          <img src={item.logo} alt="" />
          <div className="job__content">
            <h6>{item.postedAt} - {item.contract}</h6>
            <h1><Link to={'/jobs/${item.position}'}>{item.position}</Link></h1>
            <p>{item.company}</p>
            <div className="location">
              <p>Location: <span>{item.Location}</span> </p>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default JobLists


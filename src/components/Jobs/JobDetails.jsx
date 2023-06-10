import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../../data/data.json';

const JobDetails = () => {
  const { position } = useParams();

  const selectedJob = jobs.find((item) => item.position === position);

  if (!selectedJob) {
    return <div>Job not found</div>;
  }

  function generateListItems(arr) {
    return arr.map((item) => <li key={item}>{item}</li>);
  }

  return (
    <div className="job-details width-small">
      <section className="section-hero">
        <div className="hero-title-container">
          <div className="hero-text-container">
            <p>
              {selectedJob.postedAt}&nbsp;&nbsp;
              <span className="dot">&#8228;</span>
              &nbsp;&nbsp;{selectedJob.contract}
            </p>
            <h1 className="hero-title">{selectedJob.position}</h1>
            <h5 className="hero-location">{selectedJob.location}</h5>
          </div>
          <a href={selectedJob.apply} className="btn btn-primary btn-modal">
            Apply Now
          </a>
        </div>
        <p className="description">{selectedJob.description}</p>
      </section>
      <section className="section-info">
        <h2 className="section-title">Requirements</h2>
        <p>{selectedJob.requirements.content}</p>
        <ul>{generateListItems(selectedJob.requirements.items)}</ul>
      </section>
      <section className="section-info">
        <h2 className="section-title">What You Will Do</h2>
        <p>{selectedJob.role.content}</p>
        <ol>{generateListItems(selectedJob.role.items)}</ol>
      </section>
    </div>
  );
};

export default JobDetails;


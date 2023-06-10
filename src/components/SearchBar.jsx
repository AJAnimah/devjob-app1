import React, { useState } from 'react';
import jobData from '../data/data.json';

const SearchBar = () => {
  const [titleFilter, setTitleFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  const handleTitleFilterChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleCompanyFilterChange = (e) => {
    setCompanyFilter(e.target.value);
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleFullTimeOnlyChange = (e) => {
    setFullTimeOnly(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform search/filtering logic here
    const filteredJobs = jobData.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(titleFilter.toLowerCase());
      const companyMatch = job.company.toLowerCase().includes(companyFilter.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(locationFilter.toLowerCase());

      if (fullTimeOnly) {
        return titleMatch && companyMatch && locationMatch && job.fullTime;
      } else {
        return titleMatch && companyMatch && locationMatch;
      }
    });

    // Use the filteredJobs array for further processing (e.g., display results)
    console.log('Filtered Jobs:', filteredJobs);
  };

  return (
    <div className="searchbar_list width-default">
      <div className="search-input-container search-job">
        <img src="src/assets/icon-search.svg" alt="search icon" />
        <input
          className="input"
          type="text"
          placeholder="Filter by title, companies"
          value={titleFilter}
          onChange={handleTitleFilterChange}
        />
        <span></span>
      </div>

      <div className="search-input-container search-location">
        <img src="src/assets/icon-location.svg" alt="location icon" />
        <input
          className="input"
          type="text"
          placeholder="Filter by location"
          value={locationFilter}
          onChange={handleLocationFilterChange}
        />
      </div>

      <div className="search-controls-container">
        <label className="container">
          Full Time Only
          <input
            type="checkbox"
            checked={fullTimeOnly}
            onChange={handleFullTimeOnlyChange}
          />
          <span className="checkmark"></span>
        </label>
        <button className="btn btn-primary btn-search" onClick={e => handleSubmit(e)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

import React from 'react'

const JobLists = () => {
  return (
    <section className="job__list">
      <div className="container">
        <div className="job__list__wrapper">
          <div className="search__panel">
            <div className="search__panel-01">
              <span>
                <i class="ri-search-line"></i>
              </span>
              <input
                type="text" placeholder="Filter by title, companies" />
            </div>

            <div className="search__panel-02">
              <span>
                <i class="ri-map-pin-line"></i>
              </span>
              <input type="text" placeholder="Filter by location" />

            </div>

            <div className="search__panel-03">
              <select>
                <option>Filter job by</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="freelance">Freelance</option>
                <option value="contract">Contract</option>
              </select>
              <button className="btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobLists


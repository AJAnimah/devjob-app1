import React from 'react';

const SearchBar = () => {
    return (
        <div className="searchbar_list width-default">
            <div className="search-input-container search-job">
                <span><img src="src\assets\icon-search.svg" alt="search icon" /></span>
                <input className="input" type="text" placeholder="Filter by title, companies" />
                <span></span>
            </div>

            <div className="search-input-container search-location">
                <span><img src="src\assets\icon-location.svg" alt="location icon" /></span>
                <input className="input" type="text" placeholder="Filter by location" />
            </div>

            <div className="search-controls-container">
                <label class="container">
                    Full Time
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <button className="btn btn-search">
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;


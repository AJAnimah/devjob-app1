import React from 'react';
import SearchBar from './SearchBar';
import JobLists from './Jobs/JobLists';


function Home() {
    return (
        <div>
            <SearchBar />
            <JobLists />
        </div>
    );
}

export default Home;

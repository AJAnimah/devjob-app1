import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import JobDetails from './components/Jobs/JobDetails';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:position" element={<JobDetails />} />
      </Routes>
    </div>
  );
};

export default App;




// import './App.css'
// import Header from './components/Header'
// import JobLists from './components/Jobs/JobLists'
// import JobDetails from './components/Jobs/JobDetails'
// import SearchBar from './components/SearchBar'


// function App() {


//   return (
//     <div>
//       <Header />
//       <SearchBar />
//       <JobLists />
//       <JobDetails />
//     </div>

//   )
// }

// export default App

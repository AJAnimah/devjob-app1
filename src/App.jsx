import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import DetailPage from './components/DetailPage';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:position" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;





// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Home from './components/Home';
// import DetailPage from './components/DetailPage';


// function App() {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/jobs/:position" element={<DetailPage />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;





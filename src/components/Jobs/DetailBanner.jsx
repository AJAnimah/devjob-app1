// DetailBanner.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DetailBanner = (props) => {
  return (
    <section className="detail-banner width-small">
      <div className="banner-logo" style={{ backgroundColor: props.data.logoBackground }}>
        <img
          className="company-logo-img"
          src={`/${props.data.logo}`}
          alt={`${props.data.company} company logo`}
        />
      </div>
      <div className="banner-items-container">
        <div className="banner-text-container">
          <h2 className="banner-title">{props.data.company}</h2>
        </div>
        <button>
          <Link to={props.data.companySite}>Company Site</Link>
        </button>
        <a
          href={props.data.website}
          target="_blank"
          className="btn btn-secondary"
        >
          Company Site
        </a>
      </div>
    </section>
  );
};

export default DetailBanner;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const DetailBanner = () => {
 
//   return (
//     <section className="detail-banner width-small">
//       <div className="banner-logo" style={{ backgroundColor: job.logoBackground }}>
//         <img
//           className="company-logo-img"
//           src={`/${job.logo}`}
//           alt={`${job.company} company logo`}
//         />
//       </div>
//       <div className="banner-items-container">
//         <div className="banner-text-container">
//           <h2 className="banner-title">{job.company}</h2>
//         </div>
//         <button>
//           <Link to={job.companySite}>Company Site</Link>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default DetailBanner;

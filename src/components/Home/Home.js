import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <>
      <div className="section-parallax">
        <div className="parallax">
          <Link to="/therapist" type="button" className="btn btn-primary rounded-0 home-btn m-3">
            Book an Appointment
          </Link>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Our Background</h1>
          <p>
            <strong>PHYSIO NEXT</strong> is a group of young physiotherapists in Delhi and Amritsar
            area, we attribute our reputation to the lasting patient's relationships we’ve developed
            throughout the years. We believe that all our patients deserve the highest level of
            services, and we are committed to provide the same. Explore our website to know more
            about us. Should you have any questions in mind, please feel free to get in touch with
            us and shall be happy to serve you !!!
          </p>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Our Background</h1>
          <p>
            <strong>PHYSIO NEXT</strong> is a group of young physiotherapists in Delhi and Amritsar
            area, we attribute our reputation to the lasting patient's relationships we’ve developed
            throughout the years. We believe that all our patients deserve the highest level of
            services, and we are committed to provide the same. Explore our website to know more
            about us. Should you have any questions in mind, please feel free to get in touch with
            us and shall be happy to serve you !!!
          </p>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Our Background</h1>
          <p>
            <strong>PHYSIO NEXT</strong> is a group of young physiotherapists in Delhi and Amritsar
            area, we attribute our reputation to the lasting patient's relationships we’ve developed
            throughout the years. We believe that all our patients deserve the highest level of
            services, and we are committed to provide the same. Explore our website to know more
            about us. Should you have any questions in mind, please feel free to get in touch with
            us and shall be happy to serve you !!!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

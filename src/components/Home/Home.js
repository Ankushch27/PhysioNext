import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './home.css';
import icon1 from '../../assets/1.svg';
import icon2 from '../../assets/2.svg';
import icon3 from '../../assets/3.svg';
import icon4 from '../../assets/4.svg';

const Home = () => {
  return (
    <>
      <div className="section-parallax">
        <div className="parallax">
          <Link to="/therapist" type="button" className="home-booking-btn">
            Book a Visit
          </Link>
        </div>
        <Carousel>
          <Carousel.Item>
            <p>
              Physiotherapy benefits individuals with diabetes, cancer, muscle sprains and
              strains, sports-related injuries, all types of bodily pain, arthritis, and
              respiratory problems. This list is not exhaustive.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Physiotherapy benefits individuals with diabetes, cancer, muscle sprains and
              strains, sports-related injuries, all types of bodily pain, arthritis, and
              respiratory problems. This list is not exhaustive.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Physiotherapy benefits individuals with diabetes, cancer, muscle sprains and
              strains, sports-related injuries, all types of bodily pain, arthritis, and
              respiratory problems. This list is not exhaustive.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Physiotherapy benefits individuals with diabetes, cancer, muscle sprains and
              strains, sports-related injuries, all types of bodily pain, arthritis, and
              respiratory problems. This list is not exhaustive.
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="working-info">
        <h2>How it works</h2>
        <div className="icons">
          <div className="icon icon1">
            <img src={icon1} alt="" />
            <h5 className="working-info__heading">Request</h5>
            <p className="working-info__detail">
              Book an online appointment; Request a call back on website; Simply dial
              +91-8447860086.
            </p>
          </div>
          <div className="icon">
            <img src={icon2} alt="" />
            <h5 className="working-info__heading">Response</h5>
            <p className="working-info__detail">
              Our executive gets in touch with you and schedules an appointment.
            </p>
          </div>
          <div className="icon">
            <img src={icon3} alt="" />
            <h5 className="working-info__heading">Therapy</h5>
            <p className="working-info__detail">
              Our qualified expert visits your home for an assessment and initiates the
              therapy.
            </p>
          </div>
          <div className="icon">
            <img src={icon4} alt="" />
            <h5 className="working-info__heading">Monitoring</h5>
            <p className="working-info__detail">
              Measures improvement over time and recommends next steps if any.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="jumbotron jumbotron-fluid">
        <h2>Our Background</h2>
        <p>
          <strong>PHYSIO NEXT</strong> is a group of young physiotherapists in Delhi and
          Amritsar area, we attribute our reputation to the lasting patient's
          relationships we’ve developed throughout the years. We believe that all our
          patients deserve the highest level of services, and we are committed to provide
          the same. Explore our website to know more about us. Should you have any
          questions in mind, please feel free to get in touch with us and shall be happy
          to serve you !!!
        </p>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <h2>Home Visit</h2>
        <p>
          AVAILABLE ALL SEVEN DAYS FROM 9 am - 8 pm ​ Before starting the treatment
          assessment will be at your place!!! ​ Send us your chief complaint and problem,
          phone number and address on our mail. We will get in touch with you.
        </p>
      </div> */}
    </>
  );
};

export default Home;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-12 social">
            <a href="https://www.facebook.com/physionextofficial/" target="blank">
              <FontAwesomeIcon icon={['fab', 'facebook-square']} color="#3b5998" />
            </a>
            <a href="https://twitter.com/HelpPhysio" target="blank">
              <FontAwesomeIcon icon={['fab', 'twitter']} color="#00aced" />
            </a>
            <a href="https://www.instagram.com/physionext/" target="blank">
              <FontAwesomeIcon icon={['fab', 'instagram']} color="#517fa4" />
            </a>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <p>Physio Next</p>
            <hr className="light" />
            <p>physionext@gmail.com</p>
          </div>
          <div className="col-md-4"></div>
          <div className="col-12">
            <hr className="light" />
            <h5>&copy; 2020 physionext.com </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

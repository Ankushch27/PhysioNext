import React from 'react';
import vCard from '../../assets/PN_Card_0001.jpg';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="section-white">
      <div className="container">
        <h3>Contact</h3>
        <h5>Get in Touch for Home Visit</h5>
        <p>
          Physio Help and Care is committed to content your needs. For free assessment of
          the problem, questions, comments or special requests? We’d love to hear from
          you, so don’t hesitate to reach out today. Delhi, India
          physiohelpandcare@gmail.com +919818775951
        </p>
        <div className="vCardImg">
          <img src={vCard} className="img-fluid" alt="visiting-card" />
          <Link className="vCard-bookBtn" to="/therapist" />
          <a href="https://www.instagram.com/physionext/" target="blank">
            <div className="vCard-social insta"></div>
          </a>
          <a href="https://www.facebook.com/physionextofficial/" target="blank">
            <div className="vCard-social fb"></div>
          </a>
          <a href="https://api.whatsapp.com/send?phone=918447860086" target="blank">
            <div className="vCard-social wapp"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logoLight from '../../../assets/Physio-logo-light.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="about-us">
        <img src={logoLight} alt="PhysioNext Logo" className="footer-logo" />
        <p>
          A collaboration of young physiotherapists and we attribute our reputation to the
          lasting patient's relationships we’ve developed throughout the years. We believe
          that all our patients deserve the highest level of services, and we are
          committed to provide the same. Explore our website to know more about us. Should
          you have any questions in mind, please feel free to get in touch with us and
          shall be happy to serve you !!!
        </p>
      </div>
      <div className="our-services">
        <h5>Our Services</h5>
        <li>Neurological Physiotherapist</li>
        <li>Orthopedic Physiotherapist</li>
        <li>Paediatric Physiotherapist</li>
        <li>Cardio Thoracic Physiotherapist</li>
        <li>Gynaecological Physiotherapist</li>
        <li>Sports Physiotherapist</li>
      </div>
      <div className="working-hours">
        <h5>Working Hours</h5>9 AM to 8 PM
      </div>
      <div className="contact-us">
        <h5>Contact Us</h5>
        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
        <span>+91-8447860086</span>
        <div className="footer-phone"><span><p>+91-8447860086</p><p>+91-7428954275</p></span></div>
        <div className="footer-email"><span>info@physionext.com</span></div>
      </div>
      <div className="follow-us">
        <h5>Follow Us</h5>
        <div className="social">
          <a href="https://www.facebook.com/physionextofficial/" target="blank">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
          <a href="https://www.linkedin.com/company/physionext" target="blank">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
          <a href="https://www.twitter.com/physio_next" target="blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a href="https://www.instagram.com/physionext/" target="blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=918447860086" target="blank">
            <FontAwesomeIcon icon={['fab', 'whatsapp']} />
          </a>
        </div>
      </div>
      <div className="copy-terms">
        <p>Terms and conditions | Privacy Policy</p>
        <p>&copy; 2020 physionext.com </p>
      </div>
    </footer>
  );
};

export default Footer;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import logoDark from '../../../assets/Physio-logo-dark.png';
import { logout } from '../../../store/actions/authActions';
import './header.css';

class Header extends Component {
  closeNav = () => {
    document.getElementById("nav--toggle").checked = false;
  }

  render() {
    const { auth, profile } = this.props;

    const links = auth.uid ? (
      <div className="dropdown">
        <div className="btn-profile">{profile.initials}</div>
        <FontAwesomeIcon icon="caret-down" className="caret" />
        <div className="dropdown-content">
          <p>
            {profile.firstName} {profile.lastName}
          </p>
          <p>
            <small>{profile.email}</small>
          </p>
          <div className="dropdown-divider"></div>
          <p onClick={this.props.logout}>Logout</p>
        </div>
      </div>
    ) : (
      <li className="nav--item">
        <NavLink onClick={this.closeNav} to="/login" className="login-btn">
          <FontAwesomeIcon icon="user" className="login-icon" />
          <span className="login-text">Login</span>
        </NavLink>
      </li>
    );
    return (
      <header id="nav-header">
        <NavLink to="/" className="logo">
          <img src={logoDark} alt="" className="logo-img" />
        </NavLink>
        <input type="checkbox" id="nav--toggle" className="nav--toggle" />
        <nav>
          <ul className="nav--list">
            <li className="nav--item">
              <NavLink onClick={this.closeNav} exact to="/" className="nav--link">
                Home
                <FontAwesomeIcon icon="home" className="fa-icon" />
              </NavLink>
            </li>
            <li className="nav--item">
              <NavLink onClick={this.closeNav} to="/about" className="nav--link">
                About
                <FontAwesomeIcon icon="info" className="fa-icon" />
              </NavLink>
            </li>
            <li className="nav--item">
              <NavLink onClick={this.closeNav} to="/contact" className="nav--link">
                Contact
                <FontAwesomeIcon icon="phone" className="fa-icon" />
              </NavLink>
            </li>
            <li className="nav--item">
              <NavLink onClick={this.closeNav} to="/faqs" className="nav--link">
                FAQ
                <FontAwesomeIcon icon="question" className="fa-icon" />
              </NavLink>
            </li>
            <li className="nav--item">
              <Link onClick={this.closeNav} to="/therapist" className="booking-btn">
                Book a Visit
              </Link>
            </li>
            {links}
          </ul>
        </nav>
        <label htmlFor="nav--toggle" className="nav--toggle__label">
          <span className="ham-btn"></span>
        </label>
      </header>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Header);

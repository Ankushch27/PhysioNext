import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import logoLight from '../../../assets/Physio-logo-light.png';
import logoDark from '../../../assets/Physio-logo-dark.png';
import { logout } from '../../../store/actions/authActions';
import './header.css';

class Header extends Component {
  state = {
    showCollapsedMenu: false,
    logo: logoLight
  };

  toggleMenu = () => {
    this.setState({
      showCollapsedMenu: !this.state.showCollapsedMenu
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const header = document.querySelector('header');
    const isTop = window.scrollY < 350;
    if (this.props.location.pathname === '/') {
      if (!isTop) {
        header.classList.add('nav-scrolled');
        this.setState({ logo: logoDark });
      } else {
        header.classList.remove('nav-scrolled');
        this.setState({ logo: logoLight });
      }
    } else {
      header.classList.remove('nav-scrolled');
      this.setState({ logo: logoLight });
    }
  };

  render() {
    const { auth, profile } = this.props;
    const show = this.state.showCollapsedMenu ? 'show' : '';

    const links = auth.uid ? (
      <div className="dropdown">
        <div className="btn-profile m-3">{profile.initials}</div>
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
      <NavLink to="/login" className="nav--link text-white">
        <FontAwesomeIcon icon="user-circle" className="nav-icon" size="2x" />
        <span className="login-btn">Login</span>
      </NavLink>
    );
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark py-3">
          <NavLink to="/" className="navbar-brand">
            <img src={this.state.logo} alt="" className="img-fluid" style={{ width: 220 + 'px' }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleMenu}
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={'collapse navbar-collapse ' + show} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" exact className="nav--link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav--link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/faqs" className="nav--link">
                  FAQs
                </NavLink>
              </li>
            </ul>
            <form className="form-inline">
              <Link to="/therapist" className="booking-btn">
                Book an Appointment
              </Link>
              {links}
            </form>
          </div>
        </nav>
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

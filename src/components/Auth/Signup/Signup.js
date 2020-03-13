import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createUser } from '../../../store/actions/authActions';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signup = e => {
    e.preventDefault();
    this.props.createUser(this.state);
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="section-white col-md-6 m-auto">
        <form className="bg-white shadow p-4">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              value={this.state.firstName}
              onChange={this.handleChange}
              type="text"
              name="firstName"
              className="form-control"
              id="firstName"
              aria-describedby="first-name"
              placeholder="Enter First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              value={this.state.lastName}
              onChange={this.handleChange}
              type="text"
              name="lastName"
              className="form-control"
              id="lastName"
              aria-describedby="last-name"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button onClick={this.signup} className="btn btn-success">
            Signup
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: newUser => dispatch(createUser(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

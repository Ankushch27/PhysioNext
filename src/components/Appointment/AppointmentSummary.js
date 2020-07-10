import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { submit } from 'redux-form';
import { setTherapist } from '../../store/actions/therapistActions';
import * as strings from '../../data/strings';
import './AppointmentSummary.css';

const AppointmentSummary = props => {
  let button;
  switch (props.buttonName) {
    case strings.BOOK_NOW:
      button = (
        <button
          className="app-summary-btn"
          onClick={() => {
            props.history.push('/therapist/' + props.therapistId + '/book/date');
            props.setTherapist(props.title);
          }}>
          {props.buttonName}
        </button>
      );
      break;
    case strings.NEXT:
      button = (
        <button
          className="app-summary-btn"
          onClick={() =>
            props.history.push('/therapist/' + props.therapistId + '/book/contact-form')
          }
          disabled={props.disabled}>
          {props.buttonName}
        </button>
      );
      break;
    case strings.PROCEED:
      button = (
        <button
          className="app-summary-btn"
          onClick={props.submit}
          disabled={props.disabled}>
          {props.buttonName}
        </button>
      );
      break;
    case strings.CONFIRM_BOOKING:
      button = (
        <button
          className="app-summary-btn"
          onClick={() => props.history.replace('appointment-confirm')}
          disabled={props.disabled}>
          {props.buttonName}
        </button>
      );
      break;
    default:
      break;
  }
  return (
    <div className="app-summary">
      <div className="card">
        <div className="app-summary-body">
          <h5 className="app-summary-title">{props.title}</h5>
          <div className="app-summary-text">
            <p className="app-summary-time">{props.duration}</p>
            <p className="app-vertical-line"></p>
            <p className="app-summary-price">&#8377; {props.price}</p>
          </div>
          <p className="app-summary-date">{props.date}</p>
          {/* <p className="">{props.time}</p> */}
          {button}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setTherapist: therapist => dispatch(setTherapist(therapist)),
    submit: () => dispatch(submit('PatientContact'))
  };
};

export default compose(withRouter, connect(null, mapDispatchToProps))(AppointmentSummary);

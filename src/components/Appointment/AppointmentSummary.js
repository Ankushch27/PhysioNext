import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { submit } from 'redux-form';
import { setTherapist } from '../../store/actions/therapistActions';
import * as strings from '../../data/strings';

const AppointmentSummary = props => {
  let button;
  switch (props.buttonName) {
    case strings.HOME_VISIT:
      button = (
        <button
          className="btn btn-primary py-2 mt-4 btn-block"
          onClick={() => {
            props.history.push('/therapist/' + props.title + '/book/date');
            props.setTherapist(props.title);
          }}>
          {props.buttonName}
        </button>
      );
      break;
    case strings.NEXT:
      button = (
        <button
          className="btn btn-primary py-2 mt-4 btn-block"
          onClick={() => props.history.push('/therapist/' + props.title + '/book/contact-form')}
          disabled={props.disabled}>
          {props.buttonName}
        </button>
      );
      break;
    case strings.PROCEED:
      button = (
        <button
          className="btn btn-primary py-2 mt-4 btn-block"
          onClick={props.submit}
          disabled={props.disabled}>
          {props.buttonName}
        </button>
      );
      break;
    case strings.CONFIRM_BOOKING:
      button = (
        <button
          className="btn btn-primary py-2 mt-4 btn-block"
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
    <div className="bg-white shadow">
      <div className="card-body text-center">
        <h4 className="card-title mb-4 pb-4 border-bottom">{props.title}</h4>
        <p className="card-text">&#8377;150 | 45 min</p>
        <p className="card-text">{props.date}</p>
        <p className="card-text">{props.time}</p>
        {button}
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

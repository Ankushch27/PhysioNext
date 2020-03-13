import React from 'react';
import { connect } from 'react-redux';
import AppointmentSummary from '../Appointment/AppointmentSummary';
import * as strings from '../../data/strings';

const PaymentOptions = props => {
  console.log(props);
  if (!props.formData) {
    props.history.goBack();
    return null;
  }
  return (
    <div className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            PaymentOptions
            <p>Name: {props.formData.name}</p>
            <p>Email: {props.formData.email}</p>
            <p>Phone: {props.formData.phone}</p>
            <p>
              Address: {props.formData.houseNo} {props.formData.street} {props.formData.locality}{' '}
              {props.formData.city} {props.formData.state}{' '}
            </p>
          </div>
          <div className="col-md-4">
            <AppointmentSummary
              date={props.appointmentDate}
              time={props.appointmentTime}
              title={props.therapistTitle}
              buttonName={strings.CONFIRM_BOOKING}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    therapistTitle: state.therapist.selectedTherapist,
    appointmentDate: state.appointment.selectedDate,
    appointmentTime: state.appointment.selectedTimeSlot,
    formData: state.form.PatientContact.values
  };
};

export default connect(mapStateToProps)(PaymentOptions);

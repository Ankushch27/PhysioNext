import React from 'react';
import { connect } from 'react-redux';
import * as strings from '../../data/strings';
import './PaymentOptions.css';
import {showPayment} from '../../store/actions/contactFormActions'


const PaymentOptions = ({
  therapistTitle,
  appointmentDate,
  appointmentTime,
  formData,
  history,
  openGateway
}) => {
  // if (!formData) {
  //   history.goBack();
  //   return null;
  // }
  const confirmBooking = () => {
    console.log("confirm")
    // openGateway("Confirm clicked")
    // history.push('/paytm')
  }
  
  return (
    <div className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="payment-container">
              PaymentOptions
              <p>March 28, 2020</p>
              <p>5:00 pm</p>
              <p>Sports Physiotherapist</p>
              <p>Name: Ankush</p>
              <p>Email: abcd@gmail.com</p>
              <p>Phone: 8451451515</p>
              <p>Address: eefdgfgfddddd fdgfedg hv</p>
              {/* <p>{appointmentDate}</p>
            <p>{appointmentTime}</p>
            <p>{therapistTitle}</p>
            <p>Name: {formData.values.name}</p>
            <p>Email: {formData.values.email}</p>
            <p>Phone: {formData.values.phone}</p>
            <p>
              Address: {formData.values.houseNo} {formData.values.street}{' '}
              {formData.values.locality} {formData.values.city} {formData.values.state}{' '}
            </p> */}
            <button className="confirm-btn" onClick={confirmBooking}>{strings.CONFIRM_BOOKING}</button>
            </div>
          </div>
          <div className="col-md-4"></div>
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
    formData: state.form.PatientContact
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openGateway: params => dispatch(showPayment(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentOptions);

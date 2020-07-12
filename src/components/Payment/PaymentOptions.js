import React from 'react';
import { connect } from 'react-redux';
import * as strings from '../../data/strings';
import './PaymentOptions.css';
import { showPayment } from '../../store/actions/contactFormActions';

const PaymentOptions = ({
  therapist,
  appointmentDate,
  formData,
  history,
  openGateway,
}) => {
  if (therapist) console.log(therapist);
  console.log(formData);
  const dateArr = appointmentDate.split(/ |,/);
  const month = dateArr[0]
  const date = dateArr[1]

  // if (!formData) {
  //   history.goBack();
  //   return null;
  // }
  const confirmBooking = () => {
    console.log('confirm');
    // openGateway("Confirm clicked")
    history.push('/appointment-confirm')
  };

  return (
    <div className="section-white">
      <div className="container">
        <div className="row">
          <div className="payment-container">
            <div
              className="app-date"
              style={{
                background: `url(${therapist.imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
              <h1>{date}</h1>
              <h3>{month}</h3>
            </div>
            <div className="p-4">
              <h3>
                <strong>{therapist.title}</strong>
              </h3>
              <p>{therapist.time} | &#8377; {therapist.price}</p>
              <div className="py-3">
                <p>{formData.values.name}</p>
                <p>{formData.values.email}</p>
                <p>{formData.values.phone}</p>
                <p>{formData.values.address}</p>
              </div>
              <button className="confirm-btn" onClick={confirmBooking}>
                {strings.CONFIRM_BOOKING}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const id = state.therapist.selectedTherapistId;
  const therapists = state.firestore.data.therapists;
  const therapist = therapists ? therapists[id] : null;
  return {
    therapist,
    appointmentDate: state.appointment.selectedDate,
    formData: state.form.PatientContact,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openGateway: (params) => dispatch(showPayment(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentOptions);

import React from 'react';
import { connect } from 'react-redux';
import * as strings from '../../data/strings';
import CustomCalendar from '../CustomCalendar/CustomCalendar';
import './Appointment.css';
import AppointmentSummary from './AppointmentSummary';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Appointment = (props) => {
  // console.log(props);

  const { therapist } = props;
  const therapistId = props.match.params.id;
  const isDateSelected = props.selectedDay === null ? false : true;

  if (!therapist) return null;
  return (
    <div className="booking grid">
      <CustomCalendar />
      <AppointmentSummary
        therapistId={therapistId}
        date={props.appointmentDate}
        title={therapist.title}
        duration={therapist.time}
        price={therapist.price}
        buttonName={strings.NEXT}
        disabled={!isDateSelected}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const therapists = state.firestore.data.therapists;
  const therapist = therapists ? therapists[id] : null;
  return {
    therapist,
    appointmentDate: state.appointment.selectedDate,
    selectedDay: state.appointment.selectedDay,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'therapists' }])
)(Appointment);

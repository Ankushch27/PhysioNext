import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as strings from '../../data/strings';
import CustomCalendar from '../CustomCalendar/CustomCalendar';
import './Appointment.css';
import AppointmentSummary from './AppointmentSummary';

class Appointment extends Component {
  render() {
    const title = this.props.therapistTitle;
    const isDateSelected = this.props.selectedDay === null ? false : true;
    // const isTimeSelected = this.props.appointmentTime === null ? false : true;

    // if (!title) {
    //   this.props.history.goBack();
    //   return null;
    // }
    return (
      <div className="booking grid">
        <CustomCalendar />
        <AppointmentSummary
          date={this.props.appointmentDate}
          title={title}
          duration={this.props.duration}
          price={this.props.price}
          buttonName={strings.NEXT}
          disabled={!isDateSelected}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    therapistTitle: state.therapist.selectedTherapist,
    duration: state.therapist.selectedTime,
    price: state.therapist.selectedPrice,
    appointmentDate: state.appointment.selectedDate,
    // appointmentTime: state.appointment.selectedTimeSlot,
    selectedDay: state.appointment.selectedDay
  };
};

export default connect(mapStateToProps)(Appointment);

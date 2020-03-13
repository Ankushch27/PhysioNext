import React, { Component } from 'react';
import { connect } from 'react-redux';
import RPCalendar from '../CustomCalendar/RPCalendar';
// import CustomCalendar from '../CustomCalendar/CustomCalendar';
import AppointmentSummary from './AppointmentSummary';
import * as strings from '../../data/strings';
import TimeSlot from './TimeSlot';
import './Appointment.css'

class Appointment extends Component {
  render() {
    const title = this.props.therapistTitle;
    const isDateSelected = this.props.selectedDay === null ? false : true;
    const isTimeSelected = this.props.appointmentTime === null ? false : true;

    // if (!title) {
    //   this.props.history.goBack();
    //   return null;
    // }
    return (
      <div className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <RPCalendar />
              {/* <CustomCalendar /> */}
              <br />
              <TimeSlot />
            </div>
            <div className="col-md-4">
              <AppointmentSummary
                date={this.props.appointmentDate}
                time={this.props.appointmentTime}
                title={title}
                buttonName={strings.NEXT}
                disabled={!isDateSelected || !isTimeSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    therapistTitle: state.therapist.selectedTherapist,
    appointmentDate: state.appointment.selectedDate,
    appointmentTime: state.appointment.selectedTimeSlot,
    selectedDay: state.appointment.selectedDay
  };
};

export default connect(mapStateToProps)(Appointment);

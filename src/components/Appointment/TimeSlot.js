import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTimeSlot } from '../../store/actions/appointmentActions';
import './TimeSlot.css';

export class TimeSlot extends Component {
  onTimeSlotCLick = timeSlot => {
    this.props.setTimeSlot(timeSlot);
  };

  render() {
    const data = [
      '9:00 am',
      '10:00 am',
      '11:00 am',
      '12:00 pm',
      '1:00 pm',
      '2:00 pm',
      '3:00 pm',
      '4:00 pm',
      '5:00 pm',
      '6:00 pm',
      '7:00 pm'
    ];

    let blank = [];
    blank.push(
      <div className="blank" key={'blank'}>
        {''}
      </div>
    );

    let timeSlotData = [];
    for (let i = 0; i < data.length; i++) {
      let selectedTimeSlotClass =
        data[i] === this.props.selectedTimeSlot ? ' selected-timeSlot' : '';
      timeSlotData.push(
        <div
          key={i}
          className={'timeSlot' + selectedTimeSlotClass}
          onClick={() => this.onTimeSlotCLick(data[i])}>
          {data[i]}
        </div>
      );
    }

    let totalTimeSlots = [...timeSlotData, ...blank];
    let rows = [];
    let cells = [];

    totalTimeSlots.forEach((row, i) => {
      if (i % 3 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalTimeSlots.length - 1) {
        rows.push(cells);
      }
    });

    let timeSlots = rows.map((d, i) => {
      return (
        <div className="row justify-content-around" key={i}>
          {d}
        </div>
      );
    });

    return <div className="timeslot-container">{timeSlots}</div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedTimeSlot: state.appointment.selectedTimeSlot
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTimeSlot: timeSlot => dispatch(setTimeSlot(timeSlot))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlot);

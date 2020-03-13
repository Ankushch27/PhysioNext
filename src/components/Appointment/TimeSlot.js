import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTimeSlot } from '../../store/actions/appointmentActions';
import './TimeSlot.css'

export class TimeSlot extends Component {
  onTimeSlotCLick = timeSlot => {
    this.props.setTimeSlot(timeSlot);
  };

  render() {
    const data = [
      '9:00am - 10:00am',
      '12:00pm - 1:00pm',
      '4:00pm - 5:00pm',
      '10:00am - 11:00pm',
      '1:00pm - 2:00pm',
      '5:00pm - 6:00pm',
      '11:00am - 12:00pm',
      '2:00pm - 3:00pm',
      '6:00pm - 7:00pm',
      '',
      '3:00pm - 4:00pm',
      '7:00pm - 8:00pm'
    ];

    let timeSlotData = [];
    for (let i = 0; i < data.length; i++) {
      let selectedTimeSlotClass =
        data[i] === this.props.selectedTimeSlot ? ' selected-timeSlot' : '';
      timeSlotData.push(
        <td
          key={i}
          className={'timeSlot border border-primary' + selectedTimeSlotClass}
          onClick={() => this.onTimeSlotCLick(data[i])}>
          {data[i]}
        </td>
      );
    }

    let rows = [];
    let cells = [];

    timeSlotData.forEach((row, i) => {
      if (i % 3 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === timeSlotData.length - 1) {
        rows.push(cells);
      }
    });

    let timeSlots = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
      <div>
        <table className="time-table">
          <thead>
            <tr>
              <th>Morning</th>
              <th>Afternoon</th>
              <th>Evening</th>
            </tr>
          </thead>
          <tbody>{timeSlots}</tbody>
        </table>
      </div>
    );
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

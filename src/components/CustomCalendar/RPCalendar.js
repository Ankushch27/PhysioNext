import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onNext, onPrev, setDate, setDay } from '../../store/actions/appointmentActions';
import './RPCalendar.css';

class RPCalendar extends Component {
  state = {
    dateContext: moment(),
    today: moment()
  };

  weekdaysShort = moment.weekdaysShort();

  year = () => this.state.dateContext.year();
  currentYear = () => this.state.today.year();
  month = () => this.state.dateContext.month();
  currentMonth = () => this.state.today.month();
  monthName = () => this.state.dateContext.format('MMMM');
  daysInMonth = () => this.state.dateContext.daysInMonth();
  currentDate = () => Number(this.state.dateContext.get('date'));
  currentDay = () => Number(this.state.dateContext.format('DD'));
  firstDayOfMonth = () =>
    moment(this.state.dateContext)
      .startOf('month')
      .format('d');

  onPrev = () => {
    this.setState(
      {
        dateContext: this.state.dateContext.subtract(1, 'month')
      },
      () => this.props.onPrev()
    );
  };

  onNext = () => {
    this.setState(
      {
        dateContext: this.state.dateContext.add(1, 'month')
      },
      () => this.props.onNext()
    );
  };

  onDayClick = (e, d) => {
    let selectedDay = d < 10 ? '0' + d : d;
    let selectedDate = `${this.monthName()} ${selectedDay}, ${this.year()}`;
    this.props.setDay(selectedDay);
    this.props.setDate(selectedDate);
  };

  render() {
    let weekdaysShortName = this.weekdaysShort.map(day => (
      <th key={day} className="week-day">
        {day}
      </th>
    ));

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i * 9} className="calendar-day empty">
          {''}
        </td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let calendarDayClass =
        d === this.currentDay() &&
        this.month() === this.currentMonth() &&
        this.year() === this.currentYear()
          ? ' today'
          : '';
      let selectedDayClass = d === +this.props.selectedDay ? ' selected-day' : '';

      let dateClickable = true;
      if (this.year() < this.currentYear()) {
        calendarDayClass = ' disabled'
        dateClickable = false;
      } else if (this.year() === this.currentYear()) {
        if (this.month() < this.currentMonth()) {
          calendarDayClass = ' disabled'
          dateClickable = false;
        } else if (this.month() === this.currentMonth()) {
          if (d < this.currentDay()) {
            calendarDayClass = ' disabled'
            dateClickable = false;
          } else dateClickable = true;
        }
      }

      daysInMonth.push(
        <td
          key={d}
          className={'calendar-day' + calendarDayClass + selectedDayClass}
          onClick={e => (dateClickable ? this.onDayClick(e, d) : e.preventDefault())}>
          {d}
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let monthDays = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return (
      <div className="calender-container">
        <table className="calendar-table">
          <thead>
            <tr>
              <th className="arrow" onClick={e => this.onPrev()}>
                <FontAwesomeIcon icon="chevron-left" />
              </th>
              <th colSpan="5">
                {this.monthName()} {this.year()}
              </th>
              <th className="arrow" onClick={e => this.onNext()}>
                <FontAwesomeIcon icon="chevron-right" />
              </th>
            </tr>
            <tr className="">{weekdaysShortName}</tr>
          </thead>
          <tbody className="">{monthDays}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedDay: state.appointment.selectedDay
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDate: date => dispatch(setDate(date)),
    setDay: day => dispatch(setDay(day)),
    onNext: () => dispatch(onNext()),
    onPrev: () => dispatch(onPrev())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RPCalendar);

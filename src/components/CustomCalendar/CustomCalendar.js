import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { Component } from 'react';
import './CustomCalendar.css';

class CustomCalendar extends Component {
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthTable: false,
    showCalendarTable: true,
    selectedDay: null
  };

  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();
  months = moment.months();

  year = () => this.state.dateContext.format('Y');
  month = () => this.state.dateContext.format('MMMM');
  daysInMonth = () => this.state.dateContext.daysInMonth();
  currentDate = () => this.state.dateContext.get('date');
  currentDay = () => this.state.dateContext.format('D');
  firstDayOfMonth = () =>
    moment(this.state.dateContext)
      .startOf('month')
      .format('d');

  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showCalendarTable: !this.state.showCalendarTable
    });
  };

  setMonth = month => {
    let monthNo = this.months.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateContext);
    dateObject = moment(dateObject).set('month', monthNo);
    this.setState({
      dateContext: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showCalendarTable: !this.state.showCalendarTable
    });
  };

  MonthList = props => {
    let months = [];
    props.data.map(data => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.setMonth(data);
          }}>
          <span>{data}</span>
        </td>
      );
      return months;
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);

    let monthlist = rows.map((d, i) => {
      return <tr key={i * 2}>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  };

  onPrev = () => {
    this.setState({
      dateObject: this.state.dateContext.subtract(1, 'month')
    });
  };

  onNext = () => {
    this.setState({
      dateObject: this.state.dateContext.add(1, 'month')
    });
  };

  onDayClick = (e, d) => {
    this.setState(
      {
        selectedDay: d
      },
      () => {
        console.log('SELECTED DAY: ', this.state.selectedDay);
      }
    );
  };

  render() {
    let weekdaysName = this.weekdaysShort.map(day => (
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
      let currentDay = d === +this.currentDay() ? 'today' : '';
      let selectedClass = d === +this.state.selectedDay ? 'selected-day' : '';
      console.log(this.currentDay());
      daysInMonth.push(
        <td
          key={d}
          className={currentDay + selectedClass}
          onClick={e => {
            this.onDayClick(e, d);
          }}>
          <span>{d}</span>
        </td>
      );
    }
    console.log(daysInMonth);
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
      <div className="calendar-container">
        <div className="calendar-navi">
          <span
            onClick={e => {
              this.onPrev();
            }}
            className="calendar-button button-prev">
            <FontAwesomeIcon icon="chevron-left" />
          </span>
          {!this.state.showMonthTable && !this.state.showYearEditor && (
            <span
              className="calendar-label"
              onClick={e => {
                this.showMonth();
              }}>
              {this.month()}
            </span>
          )}
          <span className="calendar-label">{this.year()}</span>
          <span
            onClick={e => {
              this.onNext();
            }}
            className="calendar-button button-next">
            <FontAwesomeIcon icon="chevron-right" />
          </span>
        </div>
        <div className="calendar-date">
          {this.state.showMonthTable && <this.MonthList data={this.months} />}
        </div>
        {this.state.showCalendarTable && (
          <div className="calendar-date">
            <table className="calendar">
              <thead>
                <tr className="calendar-header">{weekdaysName}</tr>
              </thead>
              <tbody>{monthDays}</tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default CustomCalendar;

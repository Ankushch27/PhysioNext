import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onNext, onPrev, setDate, setDay } from '../../store/actions/appointmentActions';
import './CustomCalendar.css';

class CustomCalendar extends Component {
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
    let weekdaysShortName = this.weekdaysShort.map(day => <li key={day}>{day}</li>);

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <p key={i * 9} className="calendar-day empty grid">
          {''}
        </p>
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
        calendarDayClass = ' disabled';
        dateClickable = false;
      } else if (this.year() === this.currentYear()) {
        if (this.month() < this.currentMonth()) {
          calendarDayClass = ' disabled';
          dateClickable = false;
        } else if (this.month() === this.currentMonth()) {
          if (d < this.currentDay()) {
            calendarDayClass = ' disabled';
            dateClickable = false;
          } else dateClickable = true;
        }
      }

      daysInMonth.push(
        <p
          key={d}
          className={'calendar-day grid' + calendarDayClass + selectedDayClass}
          onClick={e => (dateClickable ? this.onDayClick(e, d) : e.preventDefault())}>
          {d}
        </p>
      );
    }

    var totalDays = [...blanks, ...daysInMonth];

    let dates = totalDays.map((d, i) => {
      return (
        <li key={i}>
          {d}
        </li>
      );
    });

    return (
      <section id="calendar-container">
        <header className="calendar-header">
          <div className="calendar-nav grid">
            <div className="arrow" onClick={e => this.onPrev()}>
              <FontAwesomeIcon icon="chevron-left" />
            </div>
            <h3>
              {this.monthName()} {this.year()}
            </h3>
            <div className="arrow" onClick={e => this.onNext()}>
              <FontAwesomeIcon icon="chevron-right" />
            </div>
          </div>
          <div className="days-name grid">{weekdaysShortName}</div>
        </header>
        <div className="dates grid">{dates}</div>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomCalendar);

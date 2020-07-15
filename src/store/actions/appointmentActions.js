import * as actionTypes from './actionTypes';
import { history } from '../../index';

export const setDate = (date) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_DATE, value: date });
  };
};

export const setDay = (day) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_DAY, value: day });
  };
};

export const onNext = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.ON_NEXT });
  };
};
export const onPrev = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.ON_PREV });
  };
};

export const setTimeSlot = (timeSlot) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_TIME_SLOT, value: timeSlot });
  };
};

export const onAppointmentComplete = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.RESET });
    history.replace('/');
  };
};

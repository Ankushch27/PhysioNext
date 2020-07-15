import * as actionTypes from '../actions/actionTypes';

const INIT_STATE = {
  selectedDate: null,
  selectedDay: null,
  selectedTimeSlot: null,
};

const appointmentReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_DATE:
      return {
        ...state,
        selectedDate: action.value,
      };
    case actionTypes.SET_DAY:
      return {
        ...state,
        selectedDay: action.value,
      };
    case actionTypes.ON_NEXT:
    case actionTypes.ON_PREV:
      return {
        ...state,
        selectedDate: null,
        selectedDay: null,
        selectedTimeSlot: null,
      };
    case actionTypes.SET_TIME_SLOT:
      return {
        ...state,
        selectedTimeSlot: action.value,
      };
    case actionTypes.RESET:
      return INIT_STATE;
    default:
      return state;
  }
};

export default appointmentReducer;

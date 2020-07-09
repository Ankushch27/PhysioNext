import * as actionTypes from '../actions/actionTypes';

const initState = {};

const contactFormReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_CONTACT_DATA:
      console.log('Contact data saved');
      return {
        ...state
      };
    case actionTypes.SHOW_CONFIRMATION:
      console.log('Appointment done!');
      return {
        ...state
      };
      case actionTypes.SHOW_PAYMENT:
        console.log('Payment gateway!');
        return {
          ...state
        };
    default:
      return state;
  }
};

export default contactFormReducer;

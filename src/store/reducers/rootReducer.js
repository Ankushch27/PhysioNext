import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { reducer as reduxFormReducer } from 'redux-form';
import * as actionTypes from '../actions/actionTypes';
import appointmentReducer from './appointmentReducer';
import authReducer from './authReducer';
import contactFormReducer from './contactFormReducer';
import therapistReducer from './therapistReducer';

const appReducer = combineReducers({
  auth: authReducer,
  appointment: appointmentReducer,
  contactForm: contactFormReducer,
  form: reduxFormReducer,
  therapist: therapistReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

const rootReducer = (state, action) => {
  if (action.type === actionTypes.LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

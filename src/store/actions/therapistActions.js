import * as actionTypes from './actionTypes'

export const setTherapistId = therapistId => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_THERAPIST_ID, value: therapistId });
  };
};

export const setImageUrl = imageUrl => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_IMAGE_URL, value: imageUrl });
  };
};

export const setTime = time => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_TIME, value: time });
  };
};

export const setPrice = price => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_PRICE, value: price });
  };
};

export const setContent = content => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_CONTENT, value: content });
  };
};
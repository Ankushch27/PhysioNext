import * as actionTypes from './actionTypes'

export const setTherapist = therapist => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_THERAPIST, value: therapist });
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
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

export const setContent = content => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_CONTENT, value: content });
  };
};
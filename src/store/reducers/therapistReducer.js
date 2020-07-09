import * as actionTypes from '../actions/actionTypes';

const initState = {
  selectedTherapist: null,
  selectedImageUrl: null,
  selectedTime: null,
  selectedPrice: null,
  selectedContent: null
};

const therapistReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_THERAPIST:
      return {
        ...state,
        selectedTherapist: action.value
      };
    case actionTypes.SET_IMAGE_URL:
      return {
        ...state,
        selectedImageUrl: action.value
      };
    case actionTypes.SET_TIME:
      return {
        ...state,
        selectedTime: action.value
      };
    case actionTypes.SET_PRICE:
      return {
        ...state,
        selectedPrice: action.value
      };
    case actionTypes.SET_CONTENT:
      return {
        ...state,
        selectedContent: action.value
      };
    default:
      return state;
  }
};

export default therapistReducer;

import * as actionTypes from '../actions/actionTypes';

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
      console.log('User created successfully');
      return {
        ...state,
        authError: null
      };
    case actionTypes.LOGIN_SUCCESS:
      console.log('login success');
      return {
        ...state,
        authError: null
      };
    case actionTypes.LOGOUT_SUCCESS:
      console.log('logout success');
      return state;
    case actionTypes.ERROR:
      console.log('Error', action.error.message);
      return {
        ...state,
        authError: action.error.message
      };
    default:
      return state;
  }
};

export default authReducer;

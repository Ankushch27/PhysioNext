import * as actionTypes from './actionTypes'

export const createUser = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((res) => {
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
        email: newUser.email,
        createdAt: new Date()
      })
    }).then(() => {
      dispatch({ type: actionTypes.SIGNUP_SUCCESS });
    }).catch((error) => {
      dispatch({ type: actionTypes.ERROR, error });
    })
  };
};

export const login = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(() => {
      dispatch({ type: actionTypes.LOGIN_SUCCESS });
    }).catch((error) => {
      dispatch({ type: actionTypes.ERROR, error });
    })
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({type: actionTypes.USER_LOGOUT})
    }).then(() => {
      dispatch({type: actionTypes.LOGOUT_SUCCESS})
    })
  }
}
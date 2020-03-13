import * as actionTypes from './actionTypes'
import {history} from '../../index'

export const saveContactData = contactFormData => {
  return (dispatch, getState, { getFirestore }) => {
    console.log("Saving data to firestore...")
    const firestore = getFirestore();
    firestore.collection('contactData').add({
      ...contactFormData
    }).then(() => {
      dispatch({type: actionTypes.SAVE_CONTACT_DATA})
      history.push('/pay-select')
    }).catch((error) => {
      dispatch({type: actionTypes.ERROR, error})
    })
  }
}
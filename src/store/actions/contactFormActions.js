import * as actionTypes from './actionTypes';
import { history } from '../../index';

export const saveContactData = (contactFormData) => {
  return (dispatch, getState, { getFirestore }) => {
    console.log('Saving data to firestore...');
    const uid = getState().firebase.auth.uid;
    const firestore = getFirestore();
    const id = getState().therapist.selectedTherapistId;
    const therapists = getState().firestore.data.therapists;
    const therapist = therapists ? therapists[id] : null;
    const appointmentDate = getState().appointment.selectedDate;
    let requestData = {
      userId: uid,
      appointmentDate,
      therapistTitle: therapist.title,
      duration: therapist.time,
      price: therapist.price,
      patientName: contactFormData.name,
      patientEmail: contactFormData.email,
      patientPhone: contactFormData.phone,
      patientAddress: {
        address: contactFormData.address,
        city: contactFormData.city,
        state: contactFormData.state,
        pincode: contactFormData.pincode,
        landmark: contactFormData.landmark,
      },
    };
    firestore
      .collection('users')
      .doc(uid)
      .collection('contactData')
      .add({
        ...contactFormData,
      })
      .then(() => {
        firestore.collection('appointment-requests').add({ requestData });
      })
      .then(() => {
        dispatch({ type: actionTypes.SAVE_CONTACT_DATA });
        history.push('/appointment-confirm');
      })
      .catch((error) => {
        dispatch({ type: actionTypes.ERROR, error });
      });
  };
};

export const showPayment = (payment) => {
  return (dispatch, getState, { getFirestore }) => {
    console.log('Taking to payment gateway...');
    const firestore = getFirestore();
    firestore
      .collection('buttonClicked')
      .add({
        payment,
      })
      .then(() => {
        dispatch({ type: actionTypes.SHOW_PAYMENT });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.ERROR, error });
      });
  };
};

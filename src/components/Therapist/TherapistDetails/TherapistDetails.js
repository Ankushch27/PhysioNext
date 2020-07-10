import React from 'react';
import { connect } from 'react-redux';
import * as strings from '../../../data/strings';
import AppointmentSummary from '../../Appointment/AppointmentSummary';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const TherapistDetails = (props) => {
  const { therapist } = props;
  const therapistId = props.match.params.id;

  if (therapist) {
    return (
      <div className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4 className="card-title pl-3">{therapist.title} </h4>
              <div className="card">
                <img className="card-img-top" src={therapist.imgUrl} alt="" />
                <div className="p-3 shadow">
                  <p className="card-text">{therapist.content}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <AppointmentSummary
                therapistId={therapistId}
                title={therapist.title}
                duration={therapist.time}
                price={therapist.price}
                buttonName={strings.BOOK_NOW}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const therapists = state.firestore.data.therapists;
  const therapist = therapists ? therapists[id] : null;
  return {
    therapist,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'therapists' }])
)(TherapistDetails);

import React from 'react';
import { connect } from 'react-redux';
import TherapistSummary from '../TherapistSummary/TherapistSummary';
import './TherapistList.css';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const TherapistList = (props) => {
  const { therapists } = props;
  return (
    <div className="section-white">
      <div className="container">
        <div className="therapy-intro-heading">
          <h3>OUR REHABILITATION TECHNIQUES</h3>
          <p>First-day assessment will be done at your place in just &#8377;149/-</p>
        </div>
        <div className="summary-grid">
          {therapists &&
            therapists.map((therapist) => {
              return <TherapistSummary therapist={therapist} key={therapist.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    therapists: state.firestore.ordered.therapists,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'therapists' }])
)(TherapistList);

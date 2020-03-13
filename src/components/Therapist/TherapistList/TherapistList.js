import React from 'react';
import { connect } from 'react-redux';
import TherapistSummary from '../TherapistSummary/TherapistSummary';
import './TherapistList.css';

const TherapistList = props => {
  const { therapists } = props;
  return (
    <div className="section-white">
      <div className="container">
        <div className="row">
          {therapists &&
            therapists.map(therapist => {
              return <TherapistSummary therapist={therapist} key={therapist.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    therapists: state.therapist.therapists
  };
};

export default connect(mapStateToProps)(TherapistList);

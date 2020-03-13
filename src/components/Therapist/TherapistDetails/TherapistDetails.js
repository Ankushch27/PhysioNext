import React from 'react';
import { connect } from 'react-redux';
import * as strings from '../../../data/strings';
import AppointmentSummary from '../../Appointment/AppointmentSummary';

const TherapistDetails = props => {
  // console.log(props)
  const title = props.match.params.id;
  return (
    <div className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card text-center">
              <img className="card-img-top" src={props.imageUrl} alt="" />
              <div className="p-3 shadow">
                <h4 className="card-title">{title} </h4>
                {/* <p className="card-text">{props.content}</p> */}
                {props.content}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <AppointmentSummary title={title} buttonName={strings.HOME_VISIT} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state)
  return {
    imageUrl: state.therapist.selectedImageUrl,
    content: state.therapist.selectedContent
  };
};

export default connect(mapStateToProps)(TherapistDetails);

import React from 'react';
import './TherapistSummary.css';
import { withRouter } from 'react-router-dom';

const TherapistSummary = props => {
  const { therapist } = props;
  const onButtonCLick = () => {
    props.history.push('/therapist/' + therapist.id + '/book/date');
  };

  const onImageClick = () => {
    props.history.push('/therapist/' + therapist.id);
  };

  return (
    <div className="card">
      <img
        className="img-fluid therapist-img"
        src={therapist.imgUrl}
        onClick={() => onImageClick()}
        alt="logo"
      />
      <div className="summary-body">
        <h6 className="summary-title">{therapist.title}</h6>
        <div className="summary-text">
          <p className="summary-time">{therapist.time}</p>
          <p className="vertical-line"></p>
          <p className="summary-price">&#8377; {therapist.price}</p>
        </div>
        <button onClick={() => onButtonCLick()} className="summary-btn">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default withRouter(TherapistSummary);

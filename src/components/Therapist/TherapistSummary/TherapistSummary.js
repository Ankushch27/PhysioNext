import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setContent, setImageUrl, setTherapist } from '../../../store/actions/therapistActions';
import './TherapistSummary.css';

const TherapistSummary = props => {
  // console.log(props);
  const { therapist, setTherapist, setImageUrl, setContent } = props;
  const onButtonCLick = () => {
    setTherapist(therapist.title);
    props.history.push('/therapist/' + therapist.title + '/book/date');
  };

  const onImageClick = () => {
    setImageUrl(therapist.imgUrl);
    setContent(therapist.body);
    props.history.push('/therapist/' + therapist.title);
  };

  return (
    <div className="col-md-4 mb-5 therapist-summary">
      <div className="">
        <img
          className="img-fluid therapist-img"
          src={therapist.imgUrl}
          onClick={() => onImageClick()}
          alt="logo"
        />
        <div className="p-3 shadow">
          <h4
            className="card-title text-dark text-center mb-2 font-weight-normal"
            style={{ height: 60 + 'px' }}>
            {therapist.title}
          </h4>
          <div className="col-md-12 text-center pl-0 pr-0">
            <div className="px-2 text-dark font-14 mt-3">{therapist.time}</div>
            <h4 className="text-dark text-center mt-2 font-weight-normal">
              &#8377;{therapist.price}
            </h4>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-md-8 text-center my-4">
              <button onClick={() => onButtonCLick()} className="btn btn-primary btn-block py-2">
                Home Visit
              </button>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setTherapist: therapist => dispatch(setTherapist(therapist)),
    setImageUrl: imageUrl => dispatch(setImageUrl(imageUrl)),
    setContent: content => dispatch(setContent(content))
  };
};

export default compose(withRouter, connect(null, mapDispatchToProps))(TherapistSummary);

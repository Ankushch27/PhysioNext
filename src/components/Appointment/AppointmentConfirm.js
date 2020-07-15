import React from 'react';
import { connect } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import { reset } from 'redux-form';
import { onAppointmentComplete } from '../../store/actions/appointmentActions';
import './AppointmentConfirm.css';

const AppointmentConfirm = (props) => {
  const msg = useSpring({
    opacity: 1,
    top: '150px',
    from: { opacity: 0, top: '-350px' },
  });
  const check = useSpring({
    transform: 'translate(-50%, -50%) scale(1)',
    from: { transform: 'translate(-50%, -50%) scale(4)' },
  });
  return (
    <div className="popup">
      <animated.div className="message" style={msg}>
        <animated.div className="check" style={check}>
          &#10004;
        </animated.div>
        <p>Success</p>
        <p>Check your email for a booking confirmation. We'll see you soon!</p>
        <button
          id="ok"
          onClick={() => {
            props.onAppointmentComplete();
            props.resetForm();
          }}>
          OK
        </button>
      </animated.div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAppointmentComplete: () => dispatch(onAppointmentComplete()),
    resetForm: () => dispatch(reset('PatientContact')),
  };
};

export default connect(null, mapDispatchToProps)(AppointmentConfirm);

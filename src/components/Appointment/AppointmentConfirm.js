import React from 'react';
import { useSpring, animated } from 'react-spring';
import './AppointmentConfirm.css';

const AppointmentConfirm = () => {
  const props = useSpring({
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
      <animated.div className="message" style={props}>
        <animated.div className="check" style={check}>
          &#10004;
        </animated.div>
        <p>Success</p>
        <p>Check your email for a booking confirmation. We'll see you soon!</p>
        <button id="ok">OK</button>
      </animated.div>
    </div>
  );
};

export default AppointmentConfirm;

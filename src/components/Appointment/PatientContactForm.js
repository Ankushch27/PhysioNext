import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import isValidEmail from 'sane-email-validation';
import * as strings from '../../data/strings';
import { history } from '../../index';
import AppointmentSummary from './AppointmentSummary';
import './PatientContactForm.css';

// const validate = values => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'Name is required';
//   }
//   if (!values.email) {
//     errors.email = 'Email is required';
//   } else if (!isValidEmail(values.email)) {
//     errors.email = 'Email is invalid';
//   }
//   if (!values.phone) {
//     errors.phone = 'Phone number is required';
//   }
//   if (!values.houseNo) {
//     errors.houseNo = 'This field is required';
//   }
//   if (!values.street) {
//     errors.street = 'This field is required';
//   }
//   if (!values.locality) {
//     errors.locality = 'This field is required';
//   }
//   if (!values.city) {
//     errors.city = 'This field is required';
//   }
//   if (!values.state) {
//     errors.state = 'This field is required';
//   }
//   if (!values.pincode) {
//     errors.pincode = 'This field is required';
//   }
//   if (!values.landmark) {
//     errors.landmark = 'This field is required';
//   }
//   if (!values.checkbox) {
//     errors.checkbox = 'Please accept the terms and conditions to continue';
//   }
//   return errors;
// };

const required = value => (value ? undefined : 'This field is required');

// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined;

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

const email = value => (value && !isValidEmail(value) ? 'Email is invalid' : null);

const phoneNumber = value =>
  value && !/^((\+)(\d{2}[-]))?(\d{10}){1}?$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

const normalizePhone = value => {
  const onlyNums = value.replace(/[^(+){1}91[ ]\d]/g, '');
  if (onlyNums.length > 10) {
    return onlyNums.slice(0, 14);
  }
  return onlyNums;
};

const pincode = value =>
  value && !/^[1-9][0-9]{5}$/i.test(value) ? 'Invalid pincode, must be 6 digits' : null;

const normalizePincode = value => {
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length > 6) {
    return onlyNums.slice(0, 6);
  }
  return onlyNums;
}

const createRenderer = render => ({ input, meta, label }) => (
  <>
    <label>{label}</label>
    {render(input, meta, label)}
    {meta.error && meta.touched && <div className="error-feedback">{meta.error}</div>}
  </>
);

const renderInput = createRenderer((input, meta) => (
  <input
    {...input}
    className={
      meta.touched
        ? meta.error
          ? 'form-control is-invalid'
          : 'form-control is-valid'
        : 'form-control'
    }
  />
));

const renderTextarea = createRenderer((input, meta) => (
  <textarea {...input} className="form-control" />
));

const renderCheckbox = createRenderer((input, meta) => (
  <>
    <input {...input} type="checkbox" />
    <label className="ml-2">Accept Terms and Conditions</label>
  </>
));

const submit = () => {
  // dispatch(saveContactData(values));
  history.push('/pay-select');
};

class PatientContactForm extends Component {
  render() {
    const { handleSubmit, invalid } = this.props;
    const title = this.props.therapistTitle;
    // const dateSelected = this.props.selectedDay;

    // if (!dateSelected) {
    //   this.props.history.goBack();
    //   return null;
    // }
    return (
      <div className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <form className="bg-white shadow p-4" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col-md-12 mb-3">
                    <Field
                      name="name"
                      label="Name"
                      component={renderInput}
                      validate={[required, minLength(3)]}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Field
                      name="email"
                      label="Email"
                      component={renderInput}
                      validate={[required, email]}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Field
                      name="phone"
                      label="Phone"
                      component={renderInput}
                      validate={[required, phoneNumber]}
                      // normalize={normalizePhone}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Field
                      name="houseNo"
                      label="House No."
                      component={renderInput}
                      validate={[required]}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Field
                      name="street"
                      label="Street No."
                      component={renderInput}
                      validate={[required]}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Field
                      name="locality"
                      label="Locality"
                      component={renderInput}
                      validate={[required]}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Field name="city" label="City" component={renderInput} validate={[required]} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Field
                      name="state"
                      label="State"
                      component={renderInput}
                      validate={[required]}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Field
                      name="pincode"
                      label="Pincode"
                      component={renderInput}
                      validate={[required, pincode]}
                      normalize={normalizePincode}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <Field
                      name="landmark"
                      label="Landmark"
                      component={renderInput}
                      validate={[required]}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <Field
                      name="message"
                      label="Add any additional message"
                      component={renderTextarea}
                    />
                  </div>
                </div>
                <div>
                  <Field
                    name="checkbox"
                    type="checkbox"
                    component={renderCheckbox}
                    validate={[required]}
                  />
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <AppointmentSummary
                date={this.props.appointmentDate}
                time={this.props.appointmentTime}
                title={title}
                buttonName={strings.PROCEED}
                disabled={invalid}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    therapistTitle: state.therapist.selectedTherapist,
    appointmentDate: state.appointment.selectedDate,
    appointmentTime: state.appointment.selectedTimeSlot,
    selectedDay: state.appointment.selectedDay
  };
};

PatientContactForm = reduxForm({
  form: 'PatientContact',
  onSubmit: submit,
  destroyOnUnmount: false,
  // validate,
})(PatientContactForm);

PatientContactForm = connect(mapStateToProps)(PatientContactForm);

export default PatientContactForm;
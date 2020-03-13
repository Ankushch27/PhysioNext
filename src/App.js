import 'bootstrap/dist/css/bootstrap.css';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment';
import AppointmentConfirm from './components/Appointment/AppointmentConfirm';
import PatientContactForm from './components/Appointment/PatientContactForm';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Contact from './components/Contact/Contact';
import Default from './components/Default/Default';
import FAQs from './components/FAQs/FAQs';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import TherapistDetails from './components/Therapist/TherapistDetails/TherapistDetails';
import TherapistList from './components/Therapist/TherapistList/TherapistList';
import PaymentOptions from './components/Payment/PaymentOptions';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="app-container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/therapist" component={TherapistList} exact />
          <Route path="/therapist/:id" component={TherapistDetails} exact />
          <Route path="/therapist/:id/book/date" component={Appointment} />
          <Route path="/therapist/:id/book/contact-form" component={PatientContactForm} />
          <Route path="/pay-select" component={PaymentOptions} />
          <Route path="/appointment-confirm" component={AppointmentConfirm} />
          <Route component={Default} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;

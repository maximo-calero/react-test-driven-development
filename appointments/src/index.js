import React from 'react';
import ReactDOM from 'react-dom';
import { AppointmentForm } from './AppointmentForm';
import { AppointmentsDayView } from './AppointmentsDayView';
import { CustomerForm } from './CustomerForm';
import { sampleAppointments } from './sampleData';

ReactDOM.render(
  <AppointmentForm 
    availableTimeSlots={sampleAppointments} 
  />,
  document.getElementById('root')
);

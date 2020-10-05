import React from 'react';
import ReactDOM from 'react-dom';
import { AppointmentForm } from './AppointmentForm';
import { sampleAppointments } from './sampleData';

ReactDOM.render(
  <AppointmentForm 
    availableTimeSlots={sampleAppointments} 
  />,
  document.getElementById('root')
);

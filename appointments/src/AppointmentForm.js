import React, { useState } from 'react';

export const AppointmentForm = ({ selectableServices, service, onSubmit}) => {
  const [appointment, setAppointment] = useState({ service });
  const handleChange = ({ target }) => 
    setAppointment(appointment => ({
      ...appointment,
      service: target.value
    }));

  return (
    <form id="appointment" onSubmit={() => onSubmit(appointment)}>
      <label htmlFor="service">Services</label>
      <select 
        id="service"
        name="service"
        value={service}
        readOnly
        onChange={handleChange}>
        <option />
        {selectableServices.map(s => (
          <option key={s}>{s}</option>
          ))}
      </select>
    </form>
  );
};

AppointmentForm.defaultProps = {
  selectableServices : [
    'Cut',
    'Blow-dry',
    'Cut & color',
    'Beard trim',
    'Cut & beard trim',
    'Extensions'    
  ]
};
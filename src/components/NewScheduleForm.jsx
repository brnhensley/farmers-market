import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';

export default function NewScheduleForm(props) {
  let _day = '';
  let _location = '';
  let _hours = '';
  let _booth = '';

  function handleNewScheduleFormSubmission(event) {
    event.preventDefault();
    props.onNewScheduleCreation({ day: _day.value, location: _location.value, hours: _hours.value, booth: _booth.value, id: v4() });
    _day.value = '';
    _location.value = '';
    _hours.value = '';
    _booth.value = '';
    
  }

  let button = '';
  if(_day.value === '' || _location.value === '' || _hours.value === '' || _booth.value === '') {
    button = <button type="submit" disabled>Submit!</button>;
  } else {
    button = <button type="submit">Submit!</button>;
  }

  return (
    <div>
      <form onSubmit={handleNewScheduleFormSubmission}>
        <input type="text" id="day" placeholder="Day" ref={(input) => { _day = input; }} required />
        <input type="text" id="location" placeholder="Location" ref={(input) => { _location = input; }} required />
        <input type="text" id="hour" placeholder="Hours" ref={(input) => { _hours = input; }} required />
        <input type="text" id="booth" placeholder="Booth" ref={(input) => { _booth = input; }} required />
        {button}
      </form>
    </div>
  );
}

NewScheduleForm.propTypes = {
  onNewScheduleCreation: PropTypes.func
};
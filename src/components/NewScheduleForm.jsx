import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

export default function NewScheduleForm(props) {
  let _day = null;
  let _location = null;
  let _hours = null;
  let _booth = null;

  function handleNewScheduleFormSubmission(event) {
    event.preventDefault();
    props.onNewScheduleCreation({day: _day.value, location: _location.value, hours: _hours.value, booth: _booth.value, id: v4()});
    _day.value = '';
    _location.value = '';
    _hours.value = '';
    _booth.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewScheduleFormSubmission}>
        <input type="text" id="day" placeholder="Day" ref={(input) => {_day = input;}}/>
        <input type="text" id="location" placeholder="Location" ref={(input) => {_location = input;}}/>
        <input type="text" id="hour" placeholder="Hours" ref={(input) => {_hours = input;}}/>
        <input type="text" id="booth" placeholder="Booth" ref={(input) => {_booth = input;}}/>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

NewScheduleForm.propTypes = {
    onNewScheduleCreation: PropTypes.func
};

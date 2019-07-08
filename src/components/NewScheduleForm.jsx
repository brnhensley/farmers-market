import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { createBrowserHistory } from 'history';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux'

function NewScheduleForm(props) {
  let _day;
  let _location;
  let _hours;
  let _booth;
  const history = createBrowserHistory();

  function handleNewScheduleFormSubmission(event) {
    event.preventDefault();
    props.onNewScheduleCreation({ day: _day.value, location: _location.value, hours: _hours.value, booth: _booth.value, id: v4() });
    _day.value = '';
    _location.value = '';
    _hours.value = '';
    _booth.value = '';
    // console.log(history);    
    // this.props.history.push('/thank-you');
    // console.log(history);
    dispatch(push('/home'));
  }
  
  return (
    <div>
      <form onSubmit={() => {handleNewScheduleFormSubmission; }}>
        <input type="text" id="day" placeholder="Day" ref={(input) => { _day = input; }} required />
        <input type="text" id="location" placeholder="Location" ref={(input) => { _location = input; }} required />
        <input type="text" id="hour" placeholder="Hours" ref={(input) => { _hours = input; }} required />
        <input type="text" id="booth" placeholder="Booth" ref={(input) => { _booth = input; }} required />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

NewScheduleForm.propTypes = {
  onNewScheduleCreation: PropTypes.func
};

export default withRouter(NewScheduleForm);
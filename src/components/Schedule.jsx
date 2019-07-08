import React from 'react';
import Appearance from './Appearance';
import PropTypes from 'prop-types';

function Schedule(props) {
  console.log(props.marketSchedule);
  
  return (
    <div>
      
      {props.marketSchedule.map((appearance) =>
        <Appearance day={appearance.day}
          location={appearance.location}
          hours={appearance.hours}
          booth={appearance.booth}
          key={appearance.id} />
      )}
    </div>
  );
}

Schedule.propTypes = {
  marketSchedule: PropTypes.array
};

export default Schedule;
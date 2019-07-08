import React from 'react';
import Schedule from './Schedule';
import Header from './Header';
import SeasonalProduce from './SeasonalProduce';
import { Switch, Route } from 'react-router-dom';
import NewScheduleForm from './NewScheduleForm';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterScheduleList: [
        {
          day: 'Sunday',
          location: 'Lents International',
          hours: '9:00am - 2:00pm',
          booth: '4A'
        },
        {
          day: 'Monday',
          location: 'Pioneer Courthouse Square',
          hours: '10:00am - 2:00pm',
          booth: '7C'
        },
        {
          day: 'Tuesday',
          location: 'Hillsboro',
          hours: '5:00pm - 8:30pm',
          booth: '1F'
        },
        {
          day: 'Wednesday',
          location: 'Shemanski Park',
          hours: '10:00am - 2:00pm',
          booth: '3E'
        },
        {
          day: 'Thursday',
          location: 'Northwest Portland',
          hours: '2:00pm - 6:00pm',
          booth: '6D'
        },
        {
          day: 'Saturday',
          location: 'Beaverton',
          hours: '10:00am - 1:30pm',
          booth: '9G'
        }]
    };
    this.handleAddingNewScheduleToList = this.handleAddingNewScheduleToList.bind(this);
  }

  handleAddingNewScheduleToList(newSchedule) {
    let newMasterScheduleList = this.state.masterScheduleList.slice();
    newMasterScheduleList.push(newSchedule);
    this.setState({ masterScheduleList: newMasterScheduleList });

  }

  render() {
    return (
      <div>
        <style global jsx>{`
          h2 {
            text-align: center;
          }
          span {
            text-align: center;
          }
        `}</style>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Schedule marketSchedule={this.state.masterScheduleList} />} />
          <Route path='/produce' component={SeasonalProduce} />
          <Route path='/form' render={() => <NewScheduleForm onNewScheduleCreation={this.handleAddingNewScheduleToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
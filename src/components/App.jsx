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
      masterScheduleList: []
    };
    this.handleAddingNewScheduleToList = this.handleAddingNewScheduleToList.bind(this);
  }

  handleAddingNewScheduleToList(newSchedule) {
    let newMasterScheduleList = this.state.masterScheduleList.slice();
    newMasterScheduleList.push(newSchedule);
    this.setState({masterScheduleList: newMasterScheduleList});
    
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
          <Route exact path='/' component={Schedule} />
          <Route path='/produce' component={SeasonalProduce} />
          <Route path='/form' render={() =><NewScheduleForm onNewScheduleCreation={this.handleAddingNewScheduleToList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
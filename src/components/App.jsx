import React from 'react';
import Schedule from './Schedule';
import Header from './Header';
import SeasonalProduce from './SeasonalProduce';
import { Switch, Route } from 'react-router-dom';
import NewScheduleForm from './NewScheduleForm';



function App() {
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
        <Route path='/form' component={NewScheduleForm} />
      </Switch>
    </div>
  );
}

export default App;
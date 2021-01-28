// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Local views
import GetStart from '../../views/GetStart/GetStart';
import NotFound from '../../views/NotFound/NotFound';
import Characters from '../../views/Characters/Characters';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GetStart} />
        <Route exact path='/characters' component={Characters} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

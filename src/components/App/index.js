import React from 'react';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../store';

import HomePage from '../../containers/Home';

const App = () => (
  <Provider store={store}>
    <Router basename="/IexcloudReactApi/">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;

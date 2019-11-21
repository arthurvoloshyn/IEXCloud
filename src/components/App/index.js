import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../store';
import HomePage from '../../containers/Home';

const store = configureStore;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/ReactStockReports/">
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

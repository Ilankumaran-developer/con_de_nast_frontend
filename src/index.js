
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AppContainer from './containers/AppContainers';

import newsApp from './reducers'

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/paper-dashboard.css";
import "./assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

const hist = createBrowserHistory();


let store = createStore(newsApp,
  applyMiddleware(
    thunkMiddleware
  )
);


ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={(props) => <AppContainer {...props} />} />
      <Redirect to="/admin/news" />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);

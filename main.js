import React from 'react';
import ReactDOM from 'react-dom';
import { useRouterHistory, Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

import App from './App.js';
import Reminder from './app/javascript/modules/main/Reminder.js';
import ShowReminder from './app/javascript/modules/main/ShowReminder.js';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render((
  <Router history = {history} >
    <Route path = "/" component = {App} >
      <IndexRoute component = {Reminder} />
      <Route path = "ShowReminder" component = {ShowReminder} />
    </Route>
  </Router> ), document.getElementById('parent'));

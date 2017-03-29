import React from 'react';
import ReactDOM from 'react-dom';
import { useRouterHistory, Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

import App from './App.js';

ReactDOM.render(<App />, document.getElementById('parent'));

/**
 * Created by n9571604 on 10/01/2017.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './router.jsx';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './css/index.css';

window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
require('bootstrap');

render(
    <Router history={browserHistory} routes={routes} />,
    document.querySelector('#app'),
);

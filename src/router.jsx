/**
 * Created by n9571604 on 10/01/2017.
 */
import React from 'react';
import { Route } from 'react-router';

import App from './components/App.jsx';

import HomePage from './components/home/HomePage.jsx';

export default (
    <Route path="/(:page)" component={App} />
);

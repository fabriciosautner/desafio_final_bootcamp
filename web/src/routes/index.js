import React from 'react';

import { Switch } from 'react-router-dom';

import Login from 'pages/login';
import Main from 'pages/main';
import Private from './private';
import Guest from './guest';

const Routes = () => (
  <Switch>
    <Guest path="/signin" component={Login} />
    <Private path="/" exact component={Main} />
  </Switch>
);

export default Routes;

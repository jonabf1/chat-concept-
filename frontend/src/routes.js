import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Main from './pages/main';
import Login from './pages/login';
import Board from './pages/board';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login/:id" component={Login} />
        <Route exact path="/board" component={Board} />
      </Switch>
    </BrowserRouter>
  );
}

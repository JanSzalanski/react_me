import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import People from 'views/People';
import MainTemplate from '../templates/MainTemplate';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/people" component={People} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import News from 'views/News';
import Articles from 'views/Articles';
import People from 'views/People';
import DetailsPage from 'views/DetailsPage';
import MainTemplate from '../templates/MainTemplate';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/news" />} />
        <Route exact path="/news" component={News} />
        <Route path="/news/:id" component={DetailsPage} />
        <Route exact path="/articles" component={Articles} />
        <Route path="/articles/:id" component={DetailsPage} />
        <Route exact path="/people" component={People} />
        <Route path="/people/:id" component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;

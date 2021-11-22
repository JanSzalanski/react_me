import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import News from 'views/News';
import Articles from 'views/Articles';
import People from 'views/People';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'routes';
import MainTemplate from '../templates/MainTemplate';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/news" />} />
          <Route exact path={routes.news} component={News} />
          <Route path={routes.notice} component={DetailsPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetailsPage} />
          <Route exact path={routes.people} component={People} />
          <Route path={routes.person} component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;

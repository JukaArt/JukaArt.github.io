import React from 'react';
import { Switch } from 'react-router';
import { withRouter, RouteComponentProps, Route } from 'react-router-dom';

import Layout from 'Scripts/templates/Layout/Layout';

import CowsAndBulls from 'Page/CowsAndBulls/CowsAndBulls';
import Dashboard from 'Page/Dashboard/Dashboard';

const AppRouter: React.SFC<RouteComponentProps> = (props) => {
  const { location } = props;

  return (
    <Layout>
      <Switch location={location}>
        <Route path="/cows-and-bulls" component={CowsAndBulls} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Layout>
  );
};

export default withRouter(AppRouter);
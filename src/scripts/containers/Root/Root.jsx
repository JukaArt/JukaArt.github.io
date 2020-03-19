import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from 'Containers/AppRouter';
import { ConnectedRouter } from 'connected-react-router';

const Component = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRouter />
      </ConnectedRouter>
    </Provider>
  );
};

export default Component;

import 'Styles/common.js';
import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from 'Store';
import Root from 'Containers/Root/Root';

const history = createBrowserHistory();

const store = configureStore(undefined, history);

const render = () => {
  ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('root'),
  );
};

render(Root);
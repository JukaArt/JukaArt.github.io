import { createStore, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import rootReducer from 'Reducers';
import pick from 'lodash/pick';
import enhancers, { runSagas } from './enhancers';

const appReducer = (history) => {
  return combineReducers({
    root: rootReducer,
    router: connectRouter(history),
  });
};

export default function configureStore(initialState, history) {
  const store = createStore(
    appReducer(history),
    initialState,
    enhancers(history)
  );

  runSagas();

  return store;
};

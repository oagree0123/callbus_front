import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

// 개발환경 확인
const env = process.env.NODE_ENV;

// 개발환경에서는 로거
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = initialStore => createStore(rootReducer, enhancer);

export default store();

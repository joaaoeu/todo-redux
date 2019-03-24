import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reactotron from '../config/reactotron';

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...[]),
    reactotron.createEnhancer(),
  )
  : compose(applyMiddleware(...[]));

const store = createStore(reducers, composer);

export default store;

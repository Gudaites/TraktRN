import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';

import movies from './reduce';
const store = createStore(movies, applyMiddleware(promise));
export default store;

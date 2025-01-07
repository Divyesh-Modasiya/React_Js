import { createStore } from 'redux';
import watchlistReducer from './watchlistReducer';

const store = createStore(
  watchlistReducer,
);

export default store;

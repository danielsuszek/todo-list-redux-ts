import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { listReducer } from './reducers/listReducer'

const rootReducer = combineReducers({
  list: listReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;

export default store;
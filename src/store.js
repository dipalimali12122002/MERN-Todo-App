import { applyMiddleware, createStore, combineReducers } from 'redux';
import { thunk, withExtraArgument } from 'redux-thunk';
import todoReducer from './reducers/todoReducer';

// Custom setup with extra argument
const store = createStore(
  combineReducers({ todos: todoReducer }),
  applyMiddleware(withExtraArgument(/* extra args here */))
);

export default store;

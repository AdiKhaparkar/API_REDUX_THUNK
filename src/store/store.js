import {combineReducers, applyMiddleware ,createStore} from 'redux';
import TodoReducer from '../reducer/todo';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  todo: TodoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

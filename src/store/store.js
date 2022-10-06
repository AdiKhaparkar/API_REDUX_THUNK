import {combineReducers, applyMiddleware ,createStore} from 'redux';
import TodoReducer from '../reducer/Todo';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  todo: TodoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

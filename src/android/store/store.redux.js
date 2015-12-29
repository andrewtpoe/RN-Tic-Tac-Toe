import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.redux.js';

var store1 = applyMiddleware(thunk)(createStore);
var finalStore = store1(rootReducer);

export default finalStore;

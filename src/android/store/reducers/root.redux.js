import { combineReducers } from 'redux';
import playerReducer from './playersReducer.redux.js'

var rootReducer = combineReducers({
  players: playerReducer,
});

export default rootReducer;

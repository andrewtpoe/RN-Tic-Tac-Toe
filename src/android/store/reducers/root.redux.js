import { combineReducers } from 'redux';
import playerReducer from './players_reducer.redux.js'

var rootReducer = combineReducers({
  players: playerReducer,
});

export default rootReducer;

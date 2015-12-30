import { combineReducers } from 'redux';
import playerReducer from './playersReducer.redux.js';
import gameReducer from './gameReducer.redux.js';

var rootReducer = combineReducers({
  players: playerReducer,
  game: gameReducer,
});

export default rootReducer;

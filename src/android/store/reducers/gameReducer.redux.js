// var update = require('react/lib/update')
import { update } from 'react-native';

var initialState = function() {
  return state = {
    player1Turn: true,
    player1Wins: false,
    player1Marks: [],
    player2Marks: [],
    gameOver: false,
  }
}

var game = function(state, action) {
  // console.log('game reducer triggered with state ', state, 'and action', action);

  state = state || initialState();
  switch (action.type) {
    case 'STORE_PLAYER_1_MARK':
      return Object.assign({}, state, {
        player1Marks: state.player1Marks.concat(action.gridElementId),
      });
    case 'STORE_PLAYER_2_MARK':
      return Object.assign({}, state, {
        player2Marks: state.player2Marks.concat(action.gridElementId),
      });
    case 'CYCLE_TURN':
     return Object.assign({}, state, {
        player1Turn: action.player1Turn,
      });
    case 'WINNER':
      return Object.assign({}, state, {
        gameOver: action.gameOver,
        player1Wins: action.player1Wins,
      })
    case 'CLEAR_GAME':
      return Object.assign({}, state, {
        player1Marks: [],
        player2Marks: [],
        gameOver: false,
        player1Wins: false,
      });
    default:
      return state;
  }
}

export default game;

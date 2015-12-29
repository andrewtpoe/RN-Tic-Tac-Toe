var initialState = function() {
  return state = {
    player1: {
      name: '',
      turn: true,
    },
    player2: {
      name: '',
      turn: false,
    }
  }
}

var players = function(state, action) {
  console.log('players reducer triggered with state ', state, 'and action', action);

  state = state || initialState();
  switch (action.type) {
    case 'STORE_PLAYER_NAMES':
      return Object.assign({}, state, {
        player1: {
          name: action.player1Name,
          turn: state.player1.turn,
        },
        player2: {
          name: action.player2Name,
          turn: state.player2.turn,
        },
      });
    default:
      return state;
  }
}

export default players;

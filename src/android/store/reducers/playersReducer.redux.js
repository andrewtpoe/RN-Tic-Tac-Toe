var initialState = function() {
  return state = {
    player1: {
      name: '',
      wins: 0,
    },
    player2: {
      name: '',
      wins: 0,
    }
  }
}

var players = function(state, action) {
  // console.log('players reducer triggered with state ', state, 'and action', action);

  state = state || initialState();
  switch (action.type) {
    case 'STORE_PLAYER_NAMES':
      return Object.assign({}, state, {
        player1: {
          name: action.player1Name,
          wins: state.player1.wins,
        },
        player2: {
          name: action.player2Name,
          wins: state.player2.wins,
        },
      });
    default:
      return state;
  }
}

export default players;

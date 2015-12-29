var initialState = function() {
  return state = {
    player1Name: '',
    player2Name: '',
  }
}

var players = function(state, action) {
  console.log('players reducer triggered with state ', state, 'and action', action);

  state = state || initialState();
  switch (action.type) {
    case 'STORE_PLAYER_NAMES':
      return Object.assign({}, state, {
        player1Name: action.player1Name,
        player2Name: action.player2Name,
      });
    default:
      return state;
  }
}

export default players;

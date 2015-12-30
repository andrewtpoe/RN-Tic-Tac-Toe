var initialState = function() {
  return state = {
    player1Turn: true,
    player1Marks: [],
    player2Marks: [],
  }
}

var game = function(state, action) {
  console.log('game reducer triggered with state ', state, 'and action', action);

  state = state || initialState();
  switch (action.type) {
    case 'STORE_PLAYER_1_MARK':
      return Object.assign({}, state, {
        player1Marks: state.player1Marks += action.gridElementId,
        player1Turn: false,
      });
    case 'STORE_PLAYER_2_MARK':
      return Object.assign({}, state, {
        player2Marks: state.player2Marks += action.gridElementId,
        player1Turn: true,
      });
    default:
      return state;
  }
}

export default game;

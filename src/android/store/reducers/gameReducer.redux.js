var initialState = function() {
  return state = {
    player1Marks: '',
    player2Marks: '',
  }
}

var game = function(state, action) {
  console.log('game reducer triggered with state ', state, 'and action', action);

  state = state || initialState();
  switch (action.type) {
    default:
      return state;
  }
}

export default game;

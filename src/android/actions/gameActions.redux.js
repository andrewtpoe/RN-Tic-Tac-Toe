var gameActions = {

  storePlayer1Mark: function(id) {
    return {
      type: 'STORE_PLAYER_1_MARK',
      gridElementId: id,
    }
  },

  storePlayer2Mark: function(id) {
    return {
      type: 'STORE_PLAYER_2_MARK',
      gridElementId: id,
    }
  },

  cycleTurn: function(player1Turn) {
    var tf;
    player1Turn ? tf = false : tf = true;
    return {
      type: 'CYCLE_TURN',
      player1Turn: tf,
    }
  },

  winner: function(who) {
    who == 'player1' ? p1w = true : p1w = false;
    return{
      type: 'WINNER',
      gameOver: true,
      player1Wins: p1w,
    }
  },

  clearGame: function() {
    return {
      type: 'CLEAR_GAME',
    }
  }

};

export default gameActions;

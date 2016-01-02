var playerActions = {

  storePlayerNames: function(players) {
    return {
      type: 'STORE_PLAYER_NAMES',
      player1Name: players.player1.name,
      player2Name: players.player2.name,
    }
  },

}

export default playerActions;

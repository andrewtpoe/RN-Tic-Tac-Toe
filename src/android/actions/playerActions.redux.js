var playerActions = {

  storePlayerNames: function(object) {
    console.log('Player Action: storePlayerNames triggered with ', object);
    return {
      type: 'STORE_PLAYER_NAMES',
      player1Name: object.player1.name,
      player2Name: object.player2.name,
    }
  },

}

export default playerActions;

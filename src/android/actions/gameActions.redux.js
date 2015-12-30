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

  clearGrid: function() {
    return {
      type: 'CLEAR_GRID',
    }
  }

};

export default gameActions;

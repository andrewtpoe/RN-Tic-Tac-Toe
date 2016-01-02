import React, { StyleSheet, Text, View, } from 'react-native';
import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import PlayerActions from '../actions/playerActions.redux.js';
import globalStyles from '../globalStyleVars.js';

function mapStateToProps(state) {
  return {
    players: state.players,
    game: state.game,
  }
};

function mapDispatchToProps(dispatch) {
  return {
  }
};

var nameBar = React.createClass({
  render: function() {
    var game = this.props.game,
        player1 = this.props.players.player1,
        player2 = this.props.players.player2;
    return (
      <View style={styles.container}>
        {this._playerHeader1(game, player1, 'X')}
        {this._playerHeader2(game, player2, 'O')}
      </View>
    )
  },

  _playerHeader1: function(game, player, mark) {
    return (
      <View style={(game.player1Turn) ? styles.playerHeaderTurn : styles.playerHeader} >
        <Text style={(game.player1Turn) ? styles.playerHeaderTextTurn : styles.playerHeaderText} >{player.name + ' (' + mark + ')'}</Text>
      </View>
    )
  },

  _playerHeader2: function(game, player, mark) {
    return (
      <View style={(game.player1Turn) ? styles.playerHeader : styles.playerHeaderTurn} >
        <Text style={(game.player1Turn) ? styles.playerHeaderText : styles.playerHeaderTextTurn} >{player.name + ' (' + mark + ')'}</Text>
      </View>
    )
  },

});

var styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    // flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#2299aa',
  },
  playerHeader: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: globalStyles.colors.three,
    borderWidth: 1,
    backgroundColor: globalStyles.colors.two,
  },
  playerHeaderTurn: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globalStyles.colors.six,
  },
  playerHeaderText: {
    fontSize: 20,
  },
  playerHeaderTextTurn: {
    fontSize: 20,
    color: globalStyles.colors.two,
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(nameBar);

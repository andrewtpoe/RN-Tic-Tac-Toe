import React, { StyleSheet, Text, View, } from 'react-native';
import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import PlayerActions from '../actions/playerActions.redux.js';
import globalStyles from '../globalStyleVars.js';

function mapStateToProps(state) {
  return {
    players: state.players
  }
};

function mapDispatchToProps(dispatch) {
  return {
    playerActions: bindActionCreators(PlayerActions, dispatch)
  }
};

var nameBar = React.createClass({
  render: function() {
    console.log('Players: ', this.props.players);
    var player1 = this.props.players.player1,
        player2 = this.props.players.player2;
    return (
      <View style={styles.container}>
        {this._playerHeader(player1, 'X')}
        {this._playerHeader(player2, 'O')}
      </View>
    )
  },

  _playerHeader: function(player, mark) {
    return (
      <View style={(player.turn) ? styles.playerHeaderTurn : styles.playerHeader} >
        <Text style={(player.turn) ? styles.playerHeaderTextTurn : styles.playerHeaderText} >{player.name + ' (' + mark + ')'}</Text>
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

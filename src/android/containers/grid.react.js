import React, { StyleSheet, Image, Text, TouchableHighlight, View, } from 'react-native';
import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Dimensions from 'Dimensions';
import globalStyles from '../globalStyleVars.js';
import GameActions from '../actions/gameActions.redux.js';
import PlayerActions from '../actions/playerActions.redux.js';

function mapStateToProps(state) {
  return {
    players: state.players,
    game: state.game,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    playerActions: bindActionCreators(PlayerActions, dispatch),
    gameActions: bindActionCreators(GameActions, dispatch),
  }
};

var grid = React.createClass({
  render: function() {
    var gridIds = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];
    var self = this;
    return (
      <Image source={require('../../assets/images/grid.png')} style={styles.gridImage} >
        <View style={styles.grid} >
          {gridIds.map((id) => self._createGridElement(id))}
        </View>
      </Image>
    )
  },

  _createGridElement: function(id) {
    return (
      <TouchableHighlight
        style={styles.gridElement}
        activeOpacity={1}
        underlayColor={globalStyles.colors.six}
        onPress={() => this._markGridElement(id)}
        ref={id}
        key={id} >
        <Text style={styles.gridElementText} >{this._displayGridElement(id)}</Text>
      </TouchableHighlight>
    )
  },

  _displayGridElement: function(id) {
    if (this.props.game.player1Marks.indexOf(id) >= 0) {
      return 'X';
    } else if (this.props.game.player2Marks.indexOf(id) >= 0) {
      return 'O';
    } else {
      return false;
    };
  },

  _markGridElement: function(id) {
    console.log('Element pressed: ', id);
    if (this.props.game.player1Marks.indexOf(id) < 0 && this.props.game.player2Marks.indexOf(id) < 0) {
      if (this.props.game.player1Turn) {
        console.log('Marking ', id, 'for Player 1');
        this.props.gameActions.storePlayer1Mark(id);
      } else {
        console.log('Marking ', id, 'for Player 2');
        this.props.gameActions.storePlayer2Mark(id);
      }
    }
  },

});


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridImage: {
    width: (Dimensions.get('window').width - 20),
    height: (Dimensions.get('window').width - 20),
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridElement: {
    width: ((Dimensions.get('window').width - 50) / 3),
    height: ((Dimensions.get('window').width - 50) / 3),
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridElementText: {
    fontSize: ((Dimensions.get('window').width - 50) / 3) ,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(grid);

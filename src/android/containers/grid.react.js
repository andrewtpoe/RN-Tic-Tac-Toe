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
        {this._buildWinnerBanner()}
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

  _buildWinnerBanner: function() {

    if (this.props.game.gameOver) {
      console.log('displaying winner banner');
      return (
        <View style={styles.banner} >
          <Text style={styles.bannerText} >
            {this._buildBannerText()}
          </Text>
        </View>
      )
    }
  },

  _buildBannerText: function() {
    if (this.props.game.player1Wins) {
      var name = (this.props.players.player1.name == '' ? 'Player 1' : this.props.players.player1.name);
      return name + ' wins!';
    } else {
      var name = (this.props.players.player2.name == '' ? 'Player 2' : this.props.players.player2.name);
      return name + ' wins!';
    }
  },

  _markGridElement: function(id) {
    if (!this.props.game.gameOver && this.props.game.player1Marks.indexOf(id) < 0 && this.props.game.player2Marks.indexOf(id) < 0) {
      if (this.props.game.player1Turn) {
        console.log('Marking ', id, 'for Player 1');
        this.props.gameActions.storePlayer1Mark(id);
      } else {
        console.log('Marking ', id, 'for Player 2');
        this.props.gameActions.storePlayer2Mark(id);
      }
      this._checkWinner();
    }
  },

  _checkWinner: function() {
    console.log('Evaluating winner');
    var i = 0,
        marks,
        self = this,
        winner = false,
        chars = ['A', 'B', 'C', '1', '2', '3'];
    this.props.game.player1Turn ? marks = this.props.game.player1Marks : marks = this.props.game.player2Marks;
    joinedMarks = marks.join('');
    for(i; i < chars.length; i++) {
      if (self._evaluateMarks(chars[i], joinedMarks)) {
        winner = true;
      }
    };
    if (this._diagonalWinner(marks)) {
      winner = true
    };
    if (winner && this.props.game.player1Turn) {
      console.log('PLAYER 1 WINS');
      this.props.gameActions.winner('player1');
    } else if (winner && !this.props.game.player1Turn) {
      console.log('PLAYER 2 WINS!');
      this.props.gameActions.winner('player2');
    } else {
      console.log('NO WINNER');
      this.props.gameActions.cycleTurn(this.props.game.player1Turn);
    };
  },

  _evaluateMarks: function(char, marks) {
    if (marks.split(char).length === 4) {
      console.log('WIN 1');
      return true;
    } else {
      return false;
    }
  },

  _diagonalWinner: function(marks) {
    if (marks.indexOf('B2') >= 0 && marks.indexOf('A1') >= 0 && marks.indexOf('C3') >= 0) {
      console.log('WIN 2');
      return true;
    } else if (marks.indexOf('B2') >= 0 && marks.indexOf('A3') >= 0 && marks.indexOf('C1') >= 0) {
      console.log('WIN 3');
      return true;
    } else {
      return false;
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
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
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
  banner: {
    position: 'absolute',
    height: 50,
    width: (Dimensions.get('window').width - 20),
    top: (((Dimensions.get('window').width - 20) / 2) - 25),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globalStyles.colors.red,
  },
  bannerText: {
    fontSize: 25,
    color: globalStyles.colors.one,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(grid);

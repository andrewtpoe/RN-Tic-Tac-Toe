import React, { StyleSheet, Text, TextInput, TouchableHighlight, View, } from 'react-native';
import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import globalStyles from '../globalStyleVars.js';
import PlayerActions from '../actions/playerActions.redux.js';

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

// <TouchableHighlight
//   style={styles.returnButton}
//   activeOpacity={1}
//   underlayColor={globalStyles.colors.six}
//   onPress={this._transitionBack} >
//   <Text style={styles.returnButtonText} >{'< Menu'}</Text>
// </TouchableHighlight>

var playerInformation = React.createClass({
  getInitialState: function() {
    return ({
      player1Name: this.props.players.player1.name,
      player2Name: this.props.players.player2.name,
    })
  },

  render: function() {
    return (
      <View style={styles.container} >
        <View style={styles.titleBar} >
          <Text style={styles.title} >Tic Tac Toe</Text>
        </View>
        <View style={styles.inputContainer} >
          <View style={styles.playerInformationContainer} >
            <Text style={styles.playerInformationTitle} >
              Player 1 (X)
            </Text>
            <View style={styles.playerInformationInput} >
              <TextInput style={styles.playerInformationInputText} value={this.state.player1Name} onChangeText={(text) => this.setState({player1Name: text})} autoCapitalize='words' />
            </View>
          </View>
          <View style={styles.playerInformationContainer} >
            <Text style={styles.playerInformationTitle} >
              Player 2 (O)
            </Text>
            <View style={styles.playerInformationInput} >
              <TextInput style={styles.playerInformationInputText} value={this.state.player2Name} onChangeText={(text) => this.setState({player2Name: text})} autoCapitalize='words' />
            </View>
          </View>
        </View>
        <View style={styles.startButtonContainer} >
          <TouchableHighlight
            style={styles.startButton}
            activeOpacity={1}
            underlayColor={globalStyles.colors.six}
            onPress={this._startNewGame} >
            <Text style={styles.startButtonText} >Start Game</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  },

  _transitionBack: function() {
    this.props.navigator.pop();
  },

  _startNewGame: function() {
    players = {
      player1: {
        name: this.state.player1Name,
      },
      player2: {
        name: this.state.player2Name,
      },
    };
    this.props.playerActions.storePlayerNames(players);
    this.props.navigator.push({name: 'GAME'});
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: globalStyles.colors.white,
  },
  titleBar: {
    flexDirection: 'row',
    backgroundColor: globalStyles.colors.two,
    borderBottomWidth: 1,
    borderColor: globalStyles.colors.three,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  returnButton: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  returnButtonText: {
    textAlign: 'center',
    color: globalStyles.colors.link,
  },
  title: {
    textAlign: 'center',
    flex: 6,
    fontSize: 25,
  },
  inputContainer: {
    top: 0,
    flex: 6,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  playerInformationContainer: {
    margin: 20,
  },
  playerInformationTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 25,
  },
  playerInformationInput: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: globalStyles.colors.half,
    shadowColor: globalStyles.colors.five,
    elevation: 8,
    alignItems: 'center',
    borderRadius: 5,
  },
  playerInformationInputText: {
    fontSize: 20,
  },
  startContainer: {
    flex: 1,
    backgroundColor: globalStyles.colors.nine,
  },
  startButton: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: globalStyles.colors.three,
    backgroundColor: globalStyles.colors.two,
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  startButtonText: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(playerInformation);

import React, { StyleSheet, Text, TextInput, TouchableHighlight, View, } from 'react-native';
import Redux, { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import globalStyles from '../globalStyleVars.js';
import PlayerActions from '../actions/playerActions.redux.js';
import NameBar from './nameBar.react.js';
import Grid from './grid.react.js';

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

var gameView = React.createClass({
  render: function() {
    return (
      <View style={styles.container} >
        <View style={styles.titleBar} >
          <TouchableHighlight
            style={styles.returnButton}
            activeOpacity={1}
            underlayColor={globalStyles.colors.six}
            onPress={this._transitionToTop} >
            <Text style={styles.returnButtonText} >{'< Menu'}</Text>
          </TouchableHighlight>
          <Text style={styles.title} >Tic Tac Toe</Text>
        </View>
        <NameBar />
        <View style={styles.gridContainer}>
          <Grid />
        </View>
      </View>
    )
  },

  _transitionToTop: function() {
    this.props.navigator.popToTop();
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
    flex: 6,
    fontSize: 25,
  },
  gridContainer: {
    flex: 1,
    backgroundColor: globalStyles.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(gameView);

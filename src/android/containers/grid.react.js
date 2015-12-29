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
    console.log(id);
    return (
      <TouchableHighlight
        style={styles.gridElement}
        activeOpacity={1}
        underlayColor={globalStyles.colors.six}
        onPress={() => this._markGridElement(id)}
        ref={id}
        key={id} >
        <Text ></Text>
      </TouchableHighlight>
    )
  },

  _markGridElement: function(id) {
    console.log('Element pressed: ', id);
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(grid);

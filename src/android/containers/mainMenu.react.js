import React, { StyleSheet, Text, View, } from 'react-native';
import globalStyles from '../globalStyleVars.js';
import MenuButton from '../components/menu/menuButton.react.js';

var menu = React.createClass({
  render: function() {
    return (
      <View style={styles.container} >
        <View style={styles.titleBar} >
          <Text style={styles.title} >Tic-Tac-Toe</Text>
        </View>
        <View style={styles.menuOptions} >
          <MenuButton text={'2 Players'} action={this._transitionToPlayerInformation} />
        </View>
      </View>
    )
  },

  _transitionToPlayerInformation: function() {
    this.props.navigator.push({name: 'PLAYER_INFORMATION'});
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.white,
  },
  titleBar: {
    backgroundColor: globalStyles.colors.two,
    borderBottomWidth: 1,
    borderColor: globalStyles.colors.three,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
  menuOptions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default menu;

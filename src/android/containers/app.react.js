import React, { BackAndroid, Navigator, StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import MainMenu from './mainMenu.react.js';
import PlayerInformation from './playerInformation.react.js';
import Game from './game.react.js';

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var Router = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;
  switch (route.name) {
    case 'MAIN_MENU':
      return (
        <MainMenu navigator={navigationOperations} />
      );
    case 'PLAYER_INFORMATION':
      return (
        <PlayerInformation navigator={navigationOperations} />
      );
    case 'GAME':
      return (
        <Game navigator={navigationOperations} />
      )
  }

};

var app = React.createClass({
  render: function() {
    var initialRoute = {name: 'MAIN_MENU'};
    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={Router}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: '#a9a9a9',
    height: 56,
  },
});

export default app;

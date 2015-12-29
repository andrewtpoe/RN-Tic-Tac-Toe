/**
 * Tic Tac Toe
 */

'use strict';

import React, { AppRegistry } from 'react-native';
import { Provider } from 'react-redux/native';
import App from './src/android/containers/app.react.js'
import store from './src/android/store/store.redux.js';

var TicTacToe = React.createClass({
  render: function() {
    return (
      <Provider store={store} >
        {() => <App />}
      </Provider>
    );
  }
});

AppRegistry.registerComponent('TicTacToe', () => TicTacToe);

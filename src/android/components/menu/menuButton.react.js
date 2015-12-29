import React, { StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import globalStyles from '../../globalStyleVars.js';

var menuButton = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.menuButton}
        activeOpacity={1}
        underlayColor={globalStyles.colors.six}
        onPress={this.props.action} >
        <Text style={styles.menuButtonText} >{this.props.text}</Text>
      </TouchableHighlight>
    )
  },
});

var styles = StyleSheet.create({
  menuButton: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: globalStyles.colors.three,
    backgroundColor: globalStyles.colors.two,
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  menuButtonText: {
    fontSize: 25,
  },
});

export default menuButton;

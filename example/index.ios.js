/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import Radio from 'react-native-simple-radio-button';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var RadioButtonProject = React.createClass({
  getInitialState: function() {
    return {
      types: [{label: 'param1', value: 0}, {label: 'param2', value: 1},],
      value: 0,
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Simple Radio Button Demo</Text>
        <Radio
          radio_props={this.state.types}
          initial={0}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={'#2196f3'}
          onPress={(value) => {this.setState({value:value})}}
        />
        <Text>selected: {this.state.types[parseInt(this.state.value)].label}</Text>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RadioButtonProject', () => RadioButtonProject);

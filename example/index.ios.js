/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import Radio, {RadioButton} from 'react-native-simple-radio-button';
// import Radio, {RadioButton} from './index.js';

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
      types1: [{label: 'param1', value: 0}, {label: 'param2', value: 1},],
      value1: 0,
      types2: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
      value2: 0,
      isSelected: 0,
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Simple Radio Button Demo</Text>
        <Text style={styles.welcome}>1. Simple Example</Text>
        <View style={styles.component}>
          <Radio
            radio_props={this.state.types1}
            initial={0}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={'#2196f3'}
            labelColor={'#000'}
            animation={true}
            onPress={(value) => {this.setState({value1:value})}}
          />
        </View>
        <Text>selected: {this.state.types1[parseInt(this.state.value1)].label}</Text>


        <Text style={styles.welcome}>2. Customizable Example</Text>
        <View style={styles.component}>
          <Radio
            formHorizontal={true}
            animation={true}
          >
            {this.state.types2.map((obj, i) => {
              var that = this;
              var is_selected = this.state.isSelected == i;
              return (
                <View style={styles.radioButtonWrap}>
                  <RadioButton
                    isSelected={is_selected}
                    obj={obj}
                    key={i}
                    labelHorizontal={false}
                    buttonColor={'#2196f3'}
                    labelColor={'#000'}
                    style={i !== this.state.types2.length-1 && styles.radioStyle}
                    onPress={(value) => {
                      this.setState({value2:value})
                      that.setState({isSelected: i});
                    }}
                  />
                </View>
              )
            })}
          </Radio>
        </View>
        <Text>selected: {this.state.types2[parseInt(this.state.value2)].label}</Text>

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
  component: {
    marginBottom: 15,
  },
  radioStyle: {
    borderRightWidth: 1,
    borderColor: '#2196f3',
    paddingRight: 10
  },
  radioButtonWrap: {
    marginRight: 5
  },
});

AppRegistry.registerComponent('RadioButtonProject', () => RadioButtonProject);

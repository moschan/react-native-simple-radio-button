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
      types1: [{label: 'param1', value: 0}, {label: 'param2', value: 1}],
      value1: 0,
      value1Index: 0,
      types2: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
      value2: 0,
      value2Index: 0,
      types3: [{label: 'param1', value: 0}, {label: 'param2', value: 1}, {label: 'param3', value: 2},],
      value3: 0,
      value3Index: 0,
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
            onPress={(value, index) => {
              this.setState({value1:value})
              this.setState({value1Index:index})
            }}
          />
        </View>
        <Text>selected: {this.state.types1[this.state.value1Index].label}</Text>


        <Text style={styles.welcome}>2. Customizable Example</Text>
        <View style={styles.component}>
          <Radio
            formHorizontal={true}
            animation={true}
          >
            {this.state.types2.map((obj, i) => {
              var that = this;
              var is_selected = this.state.value2Index == i;
              return (
                <View key={i} style={styles.radioButtonWrap}>
                  <RadioButton
                    isSelected={is_selected}
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    buttonColor={'#2196f3'}
                    labelColor={'#000'}
                    style={[i !== this.state.types2.length-1 && styles.radioStyle]}
                    onPress={(value, index) => {
                      this.setState({value2:value})
                      this.setState({value2Index: index});
                    }}
                  />
                </View>
              )
            })}
          </Radio>
        </View>
        <Text>selected: {this.state.types2[this.state.value2Index].label}</Text>

        <Text style={styles.welcome}>3. label left example</Text>
        <View style={styles.component}>
          <Radio
            formHorizontal={false}
            animation={true}
          >
            {this.state.types3.map((obj, i) => {
              var that = this;
              var is_selected = this.state.value3Index == i;
              return (
                <View key={i} style={styles.radioButtonWrap}>
                  <RadioButton
                    isSelected={is_selected}
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    labelStyle={{position: 'absolute', left: -35}}
                    buttonColor={'#2196f3'}
                    labelColor={'#000'}
                    onPress={(value, index) => {
                      this.setState({value3:value})
                      this.setState({value3Index: index});
                    }}
                  />
                </View>
              )
            })}
          </Radio>
        </View>
        <Text>selected: {this.state.types3[this.state.value3Index].label}</Text>

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

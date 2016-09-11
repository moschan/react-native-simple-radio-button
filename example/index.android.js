/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from 'react-native-button';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class RadioButtonExample extends Component {
  constructor () {
    super()
    this.state = {
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
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Simple Radio Button Demo</Text>
        <Text style={styles.welcome}>1. Basic</Text>
        <View style={styles.component}>
          <RadioForm
            ref="radioForm"
            radio_props={this.state.types1}
            initial={0}
            formHorizontal={false}
            labelHorizontal={true}
            buttonColor={'#2196f3'}
            labelColor={'#000'}
            animation={true}
            onPress={(value, index) => {
              this.setState({
                value1:value,
                value1Index:index
              })
            }}
          />
        </View>
        <Text>selected: {this.state.types1[this.state.value1Index].label}</Text>

        <Button
          style={{fontSize: 20, borderColor: '#2196f3', borderWidth: 2}}
          onPress={() => this.refs.radioForm.updateIsActiveIndex(0)}> Force Update </Button>

        <Text style={styles.welcome}>2. Advanced</Text>
        <View style={styles.component}>
          <RadioForm
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
          </RadioForm>
        </View>
        <Text>selected: {this.state.types2[this.state.value2Index].label}</Text>

        <Text style={styles.welcome}>3. Pro</Text>
        <View style={styles.component}>
          <RadioForm formHorizontal={true} animation={true} >
            {this.state.types3.map((obj, i) => {
              var onPress = (value, index) => {
                  this.setState({
                    value3: value,
                    value3Index: index
                  })
                }
              return (
                <RadioButton labelHorizontal={true} key={i} >
                  {/*  You can set RadioButtonLabel before RadioButtonInput */}
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={this.state.value3Index === i}
                    onPress={onPress}
                    buttonInnerColor={'#e74c3c'}
                    buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                    buttonSize={40}
                    buttonStyle={{}}
                    buttonWrapStyle={{marginLeft: 10}}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={onPress}
                    labelStyle={{fontSize: 20, color: '#2ecc71'}}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              )
            })}
          </RadioForm>
        </View>
        <Text>selected: {this.state.types3[this.state.value3Index].label}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('example', () => RadioButtonExample);

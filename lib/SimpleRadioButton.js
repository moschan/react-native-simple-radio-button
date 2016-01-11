"use strict"

import Style from './Style.js'

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  LayoutAnimation,
} = React;


var Radio = React.createClass({
  getInitialState: function() {
    var that = this;
    return {
      is_active_index: this.props.initial,
    };
  },
  getDefaultProps: function() {
    return {
      radip_props: [],
      initial: 0,
      buttonColor: '#2196f3',
      formHorizontal: false,
      labelHorizontal: true,
      animation: true,
    };
  },

  componentWillMount() {
    // Animate creation
    LayoutAnimation.spring();
  },

  _renderButton: function(obj, i) {
    var that = this;
    var is_active = this.state.is_active_index == i;
    return (
      <_radioButton
        is_active={is_active}
        obj={obj}
        key={i}
        buttonColor={this.props.buttonColor}
        labelHorizontal={this.props.labelHorizontal}
        onPress={(value) => {
          if(this.props.animation) {
            LayoutAnimation.spring();
          }
          that.props.onPress(value);
          that.setState({is_active_index: i});
        }}
      />
    );
  },

  render: function() {
    return (
      <View style={[
        Style.radioFrom,
        this.props.style,
        this.props.formHorizontal && Style.formHorizontal,
      ]}>
        {this.props.radio_props.map(this._renderButton)}
      </View>
    );
  },
});


var _radioButton = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return true;
  },
  getDefaultProps: function() {
    return {
      is_active: false,
      buttonColor: '#2196f3',
      labelHorizontal: true,
    };
  },
  render: function() {
    return (
      <View style={[
        Style.radioWrap,
        this.props.style,
        !this.props.labelHorizontal && Style.labelVerticalWrap,
      ]}>
        <TouchableOpacity
          style={[
            Style.radio,
            {borderColor:this.props.buttonColor},
          ]}
          onPress={() => this.props.onPress(this.props.obj.value)}>
          <View style={[
            this.props.is_active && Style.radioActive,
            this.props.is_active && {backgroundColor:this.props.buttonColor},
          ]}></View>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={() => this.props.onPress(this.props.obj.value)}>
          <Text style={[
            Style.radioLabel,
            !this.props.labelHorizontal && Style.labelVertical,
          ]}>{this.props.obj.label}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
});

module.exports = Radio;

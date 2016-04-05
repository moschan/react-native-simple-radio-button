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
      radio_props: [],
      initial: 0,
      buttonColor: '#2196f3',
      formHorizontal: false,
      labelHorizontal: true,
      animation: true,
      labelColor: '#000',
    };
  },

  _renderButton: function(obj, i) {
    var that = this;
    var is_active = this.state.is_active_index == i;
    return (
      <RadioButton
        isSelected={is_active}
        obj={obj}
        key={i}
        index={i}
        buttonColor={this.props.buttonColor}
        labelHorizontal={this.props.labelHorizontal}
        labelColor={this.props.labelColor}
        style={this.props.radioStyle}
        animation={this.props.animation}
        onPress={(value, index) => {
          that.props.onPress(value, index);
          that.setState({is_active_index: index});
        }}
      />
    );
  },

  render: function() {
    var render_content = false
    if (this.props.radio_props) {
      render_content = this.props.radio_props.map(this._renderButton)
    } else {
      render_content = this.props.children
    }
    return (
      <View style={[
        Style.radioFrom,
        this.props.style,
        this.props.formHorizontal && Style.formHorizontal,
      ]}>
        {render_content}
      </View>
    );
  },
});


var RadioButton = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return true;
  },
  getDefaultProps: function() {
    return {
      isSelected: false,
      buttonColor: '#2196f3',
      labelHorizontal: true,
    };
  },
  componentWillUpdate() {
    if(this.props.animation) {
      LayoutAnimation.spring();
    }
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
          onPress={() => {
            this.props.onPress( this.props.obj.value, this.props.index)
            }
          }>
          <View style={[
            this.props.isSelected && Style.radioActive,
            this.props.isSelected && {backgroundColor:this.props.buttonColor},
          ]}></View>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={() => { this.props.onPress(this.props.obj.value, this.props.index)} }>
          <View style={this.props.labelStyle} >
            <Text style={[
              Style.radioLabel,
              !this.props.labelHorizontal && Style.labelVertical,
              {color: this.props.labelColor},
              this.props.labelStyle
            ]}>{this.props.obj.label}</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
});

export default Radio
export {RadioButton}

'use strict'

import Style from './Style.js'

var React = require('react')
var ReactNative = require('react-native')
var {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  LayoutAnimation
} = ReactNative

var RadioForm = React.createClass({
  getInitialState: function () {
    return {
      is_active_index: this.props.initial
    }
  },

  getDefaultProps: function () {
    return {
      radio_props: [],
      initial: 0,
      buttonColor: '#2196f3',
      formHorizontal: false,
      labelHorizontal: true,
      animation: true,
      labelColor: '#000',
      disabled: false
    }
  },

  updateIsActiveIndex: function(index) {
    this.setState({ is_active_index: index });
    this.props.onPress(this.props.radio_props[index], index)
  },

  _renderButton: function (obj, i) {
    return (
      <RadioButton
        isSelected={this.state.is_active_index === i}
        obj={obj}
        key={i}
        index={i}
        buttonColor={this.props.buttonColor}
        buttonSize={this.props.buttonSize}
        buttonOuterSize={this.props.buttonOuterSize}
        labelHorizontal={this.props.labelHorizontal}
        labelColor={this.props.labelColor}
        labelStyle={this.props.labelStyle}
        style={this.props.radioStyle}
        animation={this.props.animation}
		disabled={this.props.disabled}
        onPress={(value, index) => {
			this.props.onPress(value, index)
			this.setState({is_active_index: index})
        }}
      />
    )
  },

  render: function () {
    var render_content = false
    if (this.props.radio_props.length) {
      render_content = this.props.radio_props.map(this._renderButton)
    } else {
      render_content = this.props.children
    }
    return (
      <View style={[
        Style.radioFrom,
        this.props.style,
        this.props.formHorizontal && Style.formHorizontal
      ]}>
        {render_content}
      </View>
    )
  }
})

var RadioButton = React.createClass({
  shouldComponentUpdate: function (nextProps, nextState) {
    return true
  },
  getDefaultProps: function () {
    return {
      isSelected: false,
      buttonColor: '#2196f3',
      labelHorizontal: true,
      disabled: false,
    }
  },
  componentWillUpdate () {
    if (this.props.animation) {
      LayoutAnimation.spring()
    }
  },
  render: function () {
    var c = this.props.children
    var renderContent = false
    renderContent = c ? (
      <View style={[
        Style.radioWrap,
        this.props.style,
        !this.props.labelHorizontal && Style.labelVerticalWrap
      ]}>
        {c}
      </View>
    ) : (
      <View style={[
        Style.radioWrap,
        this.props.style,
        !this.props.labelHorizontal && Style.labelVerticalWrap
      ]}>
        <RadioButtonInput {...this.props} />
        <RadioButtonLabel {...this.props} />
      </View>
    )
    return (
      <View>
        {renderContent}
      </View>
    )
  }
})

export class RadioButtonInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSelected: false,
      buttonColor: props.buttonColor || '#2196f3'
    }
  }
  render () {
    var innerSize = {width: 20, height:20, borderRadius: 20/2 }
    var outerSize = {width: 20+10, height:20+10, borderRadius: (20+10)/2 }
    if (this.props.buttonSize) {
      innerSize.width = this.props.buttonSize
      innerSize.height = this.props.buttonSize
      innerSize.borderRadius = this.props.buttonSize /2
      outerSize.width = this.props.buttonSize + 10
      outerSize.height = this.props.buttonSize + 10
      outerSize.borderRadius = (this.props.buttonSize + 10) / 2
    }
    if (this.props.buttonOuterSize) {
      outerSize.width = this.props.buttonOuterSize
      outerSize.height = this.props.buttonOuterSize
      outerSize.borderRadius = this.props.buttonOuterSize / 2
    }
    var outerColor = this.props.buttonOuterColor
    var borderWidth = this.props.borderWidth || 3
    var innerColor = this.props.buttonInnerColor
    if (this.props.buttonColor) {
      outerColor = this.props.buttonColor
      innerColor = this.props.buttonColor
    }
	var c = (
		<View style={[
		  Style.radioNormal,
		  this.props.isSelected && Style.radioActive,
		  this.props.isSelected && innerSize,
		  this.props.isSelected && {backgroundColor:innerColor}
		]}></View>
	)
	var radioStyle = [
	  Style.radio,
	  {
		borderColor:outerColor,
		borderWidth:borderWidth
	  },
	  this.props.buttonStyle,
	  outerSize
  	]

	if (this.props.disabled) {
		return (
	      <View style={this.props.buttonWrapStyle} >
	        <View style={radioStyle}>
	          {c}
	  		</View>
	      </View>
	    )
	}

    return (
      <View style={this.props.buttonWrapStyle} >
        <TouchableOpacity
          style={radioStyle}
          onPress={() => { this.props.onPress( this.props.obj.value, this.props.index) }
          }>
         {c}
        </TouchableOpacity>
      </View>
    )
  }
}

RadioButtonInput.defaultProps = {
  buttonInnerColor: '#2196f3',
  buttonOuterColor: '#2196f3',
  disabled: false
}

export class RadioButtonLabel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSelected: false,
      buttonColor: '#2196f3',
    }
  }
  render () {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
			if (!this.props.disabled) {
				this.props.onPress( this.props.obj.value, this.props.index)}
			}
		}>
        <View style={[
          this.props.labelWrapStyle,
          Style.labelWrapStyle,
        ]} >
          <Text style={[
            Style.radioLabel,
            !this.props.labelHorizontal && Style.labelVertical,
            {color: this.props.labelColor},
            this.props.labelStyle
          ]}>{this.props.obj.label}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default RadioForm
export {RadioButton}

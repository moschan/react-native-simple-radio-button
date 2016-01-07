var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
      initial: 0,
      buttonColor: '#2196f3',
      formHorizontal: false,
      labelHorizontal: true,
    };
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
            that.props.onPress(value);
            that.setState({is_active_index: i});
          }
        }
      />
    );
  },

  render: function() {
    return (
      <View style={[
        styles.radioFrom,
        this.props.style,
        this.props.formHorizontal && styles.formHorizontal,
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
        styles.radioWrap,
        this.props.style,
        !this.props.labelHorizontal && styles.labelVerticalWrap,
      ]}>
        <TouchableOpacity
          style={[
            styles.radio,
            {borderColor:this.props.buttonColor},
          ]}
          onPress={() => this.props.onPress(this.props.obj.value)}>
          <View style={[
            this.props.is_active && styles.radioActive,
            this.props.is_active && {backgroundColor:this.props.buttonColor},
          ]}></View>
        </TouchableOpacity>
        <Text style={[
          styles.radioLabel,
          !this.props.labelHorizontal && styles.labelVertical,
        ]}>{this.props.obj.label}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  radioForm: {
  },

  radioWrap: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 30,
    height: 30,

    marginLeft: 10,

    borderColor: '#2196f3',
    borderWidth: 3,
    borderRadius: 30,
  },

  radioLabel: {
    paddingLeft: 10,
    lineHeight: 20,
  },

  radioActive: {
    width: 25,
    height: 25,
    backgroundColor: '#2196f3',
    borderRadius: 12.5,
  },

  labelVerticalWrap: {
    flexDirection: 'column',
    paddingLeft: 10,
  },

  labelVertical: {
    paddingLeft: 0,
  },

  formHorizontal: {
    flexDirection: 'row',
  },
});

module.exports = Radio;

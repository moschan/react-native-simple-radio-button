var React = require('react-native');
var {
  StyleSheet,
} = React;

var Style = StyleSheet.create({
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
    borderRadius: 10,
    width: 20,
    height: 20,
    backgroundColor: '#2196f3',
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

module.exports = Style;

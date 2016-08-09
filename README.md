# react-native-simple-radio-button
> simple and useful radio button component for React Native

[![npm](https://img.shields.io/npm/v/react-native-simple-radio-button.svg)]()[![npm](https://img.shields.io/npm/l/react-native-simple-radio-button.svg)]()

[![NPM](https://nodei.co/npm/react-native-simple-radio-button.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-simple-radio-button/)


Demo
---

![Demo](./doc/ver1.3_demo.gif)


## Installation

in Cli

```sh
npm i react-native-simple-radio-button --save
```


# Getting started

```js
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];

var RadioButtonProject = React.createClass({
  getInitialState: function() {
    return {
      value: 0,
    }
  },
  render: function() {
    return (
      <View>
        <Radio
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
      </View>
    );
  }
});
```

Basic
---

```js
<RadioForm
  radio_props={radio_props}
  initial={0}
  onPress={(value) => {this.setState({value:value})}}
/>
```

Advanced
---

```js
<RadioForm
  radio_props={this.state.types}
  initial={0}
  formHorizontal={false}
  labelHorizontal={true}
  buttonColor={'#2196f3'}
  animation={true}
  onPress={(value) => {this.setState({value:value})}}
/>
```

Pro
---

```js
<RadioForm
  formHorizontal={true}
  animation={true}
>
  <RadioButton labelHorizontal={true} key={i} >
    {/*  You can set RadioButtonLabel before RadioButtonInput */}
    <RadioButtonInput
      obj={obj}
      index={i}
      isSelected={this.state.value3Index === i}
      onPress={onPress}
      borderWidth={1}
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
</RadioForm>
```

# Props

## RadioForm Component
### radio_props (Default: `[]`) _*required_
radio button value and label array

### onPress _*required_
callback when radio button clicked.

### initial (Default: `0`)
initial selected

### buttonColor(Default: '#2196f3')
change radio button color

```js
<Radio
  radio_props={radio_props}
  initial={0}
  buttonColor={'#50C900'}
/>
```

![Demo](./doc/button_color.jpg)

### labelColor(Default: '#000')
change label color

```js
<Radio
  radio_props={radio_props}
  initial={0}
  labelColor={'#50C900'}
/>
```


### formHorizontal(Default: false)
change form position

```js
<Radio
  radio_props={radio_props}
  initial={0}
  formHorizontal={true}
/>
```

![Demo](./doc/form_horizontal.jpg)


### labelHorizontal(Default: true)
change label position

```js
<Radio
  radio_props={radio_props}
  initial={0}
  labelHorizontal={false}
/>
```

![Demo](./doc/label_horizontal.jpg)

### animation (Default: `true`)
if you pass false, animation of radio button is disabled

![Demo](./doc/demo_1.gif)

### animation (Default: `true`)
if you pass false, animation of radio button is disabled

![Demo](./doc/demo_1.gif)


## RadioButton Component
### isSelected
If you pass `true` to this param, that button change to selected status.


### labelHorizontal
change label position


### buttonColor
The button color

### labelColor
The label color

### style
The label style

## onPress _*required_
callback when radio button clicked.


# RadioButtonInput
### isSelected
### onPress
### buttonInnerColor
### buttonOuterColor
### buttonSize
### buttonStyle
### buttonWrapStyle

# RadioButtonLabel
### labelHorizontal
### labelStyle
### labelWrapStyle
### onPress _*required_


# Contributing
Of course! Welcome :)


# License
MIT

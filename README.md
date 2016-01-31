# react-native-simple-radio-button
> simple and useful radio button component for React Native

[![npm](https://img.shields.io/npm/v/react-native-simple-radio-button.svg)]()[![npm](https://img.shields.io/npm/l/react-native-simple-radio-button.svg)]()

[![NPM](https://nodei.co/npm/react-native-simple-radio-button.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-simple-radio-button/)


Demo
---

![Demo](./doc/ver1.3_demo.gif)

# Installation

in Cli

```
npm i react-native-simple-radio-button
```

in JavaScirpt

```
import Radio, {RadioButton} from 'react-native-simple-radio-button'
```


# Usage

```
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

Simple
---
```
<Radio
  radio_props={radio_props}
  initial={0}
  onPress={(value) => {this.setState({value:value})}}
/>

```

Customized
---
```
<Radio
  radio_props={this.state.types}
  initial={0}
  formHorizontal={false}
  labelHorizontal={true}
  buttonColor={'#2196f3'}
  animation={true}
  onPress={(value) => {this.setState({value:value})}}
/>
```

More Customized
---
```
<Radio
  formHorizontal={true}
  animation={true}
>
  {this.state.types.map((obj, i) => {
    var that = this
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
          style={styles.radioStyle}
          onPress={(value) => {
            this.setState({value:value})
            that.setState({isSelected: i})
          }}
        />
      </View>
    )
  })}
</Radio>
```


# Props


## Radio Component
### radio_props (Default: `[]`) _*required_
radio button value and label array

### onPress _*required_
callback when radio button clicked. 

### initial (Default: `0`)
initial selected



### buttonColor(Default: '#2196f3')
change radio button color 

```
<Radio
  radio_props={radio_props}
  initial={0}
  buttonColor={'#50C900'}
/>
```

![Demo](./doc/button_color.jpg)

### labelColor(Default: '#000')
change label color 

```
<Radio
  radio_props={radio_props}
  initial={0}
  labelColor={'#50C900'}
/>
```


### formHoriozntal(Default: false)
change form position

```
<Radio
  radio_props={radio_props}
  initial={0}
  formHoriozntal={true}
/>
```

![Demo](./doc/form_horizontal.jpg)


### labelHoriozntal(Default: true)
change label position

```
<Radio
  radio_props={radio_props}
  initial={0}
  labelHoriozntal={false}
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





# Contributing
Of course! Welcome :)


# License
MIT

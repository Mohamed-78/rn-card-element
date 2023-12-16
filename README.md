# react-native-card-element

![npm version](https://img.shields.io/npm/v/react-native-card-element.svg)
![license](https://img.shields.io/npm/l/react-native-card-element.svg)

A simple React Native component for displaying a card.

## Installation

```bash
npm install react-native-card-element
```

## Usage

Import the Card component into the part where you want to use it.

Example :

```jsx
import React from 'react';
import { View } from 'react-native';
import Card from 'react-native-card-element';

const App = () => {
  return (
    <View>
      <Card />
    </View>
  );
};
export default App;
```
## Customization

You can also customize the appearance of the component by using the available properties.

For example :
```jsx
<Card
  title={"Card Title"}
  subtitle={"Card Subtitle"}
  description={"Here's a small text description for the card content. Nothing more, nothing less."}
/>
```

## List of Customization Properties
```txt
description, title, subtitle, style, width, height

# react-native-card-element

![npm version](https://img.shields.io/npm/v/react-native-card-element.svg)
![license](https://img.shields.io/npm/l/react-native-card-element.svg)

A simple React Native component for displaying a card.

## Installation

```bash
npm install react-native-card-element
```

# Utilisation

Importez le composant Card dans la partie où vous souhaitez l'utiliser.

Exemple :

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
#Personnalisation

Vous pouvez également personnaliser l'apparence du composant en utilisant les propriétés disponibles.

Par exemple :
```jsx
<Card
  title={"Titre de la carte"}
  subtitle={"Sous-titre de la carte"}
  description={"Voici une petite description du contenu de la carte. Rien de plus, rien de moins."}
/>
```


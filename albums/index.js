// Import a library to help create a component
import React from 'react';
import ReactNative, {Text} from 'react-native';
import Header from './src/components/Header';

// Create a component
const App = () => {
  return (
    <Header />
  );
}

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
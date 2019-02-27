// Import a library to help create a component
import React from 'react';
import ReactNative, { Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
  return (
    <View>
      <Header text="Albums" />
      <AlbumList />
    </View>
  );
}

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums2', () => App);
// Import a library to help create a component
import React from 'react';
import ReactNative, { Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
  return (
    // To the scrollview fit well
    <View style={{ flex: 1 }}>
      <Header text="Albums" />
      <AlbumList />
    </View>
  );
}

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums2', () => App);
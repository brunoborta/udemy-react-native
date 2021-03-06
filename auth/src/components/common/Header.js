// Import a library to help create a component
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ props.text }</Text>
    </View>
  );
}


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

// Render it to the device
export { Header };
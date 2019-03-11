import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCHy1ofevB1k1C55bmnNuJVcyplTN4np0g",
      authDomain: "manager-a7a8c.firebaseapp.com",
      databaseURL: "https://manager-a7a8c.firebaseio.com",
      projectId: "manager-a7a8c",
      storageBucket: "manager-a7a8c.appspot.com",
      messagingSenderId: "952308387415"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hey!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
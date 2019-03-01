import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAgOFGCUnNS_mJNC7PjAybblsKXn75UHuA",
      authDomain: "auth-805d1.firebaseapp.com",
      databaseURL: "https://auth-805d1.firebaseio.com",
      projectId: "auth-805d1",
      storageBucket: "auth-805d1.appspot.com",
      messagingSenderId: "513640424210"
    });
  }

  render() {
    return (
      <View>
        <Header text="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
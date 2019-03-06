import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAgOFGCUnNS_mJNC7PjAybblsKXn75UHuA",
      authDomain: "auth-805d1.firebaseapp.com",
      databaseURL: "https://auth-805d1.firebaseio.com",
      projectId: "auth-805d1",
      storageBucket: "auth-805d1.appspot.com",
      messagingSenderId: "513640424210"
    });

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {

    switch(this.state.loggedIn) {
      case true:
        return (
          <Card>    
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header text="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}
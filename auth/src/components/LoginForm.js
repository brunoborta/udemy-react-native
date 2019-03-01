import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    this.setState({ error: '' });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication Failed' });
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@example.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="p@55w0rd"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
            />
        </CardSection>

        <Text style={styles.errorText}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
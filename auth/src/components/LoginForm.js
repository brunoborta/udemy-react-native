import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from '@firebase/app';
// Firebase has a problem in android that "import firebase from 'firebase'" doesn't work
//with node 8.X.X. This way, this is a acceptable workaround
import '@firebase/auth';

export default class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication Failed'
    });
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
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
          {this.renderButton()}
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
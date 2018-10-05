import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';

import LoginForm from './LoginForm';

const styles = StyleSheet.create({
  button: {
    marginLeft: 40,
    marginRight: 40,
    height: 50,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  h1: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center'
  }
});

export default class LoginButton extends Component {
  
  login () {
    this.props.navigator.push({
      title: "Login",
      component: LoginForm,
    });
  }

  render () {
      return (
        <TouchableHighlight style={this.props.style || styles.button} onPress={this.login.bind(this)}>
          <Text style={styles.h1}> Login </Text>
        </TouchableHighlight>
      )
    }
}

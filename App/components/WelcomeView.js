'use strict'

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import LoginButton from './LoginButton';

import SignupForm from './SignupForm';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    height: 50,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20 ,
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default class WelcomeView extends Component {
  constructor(props) {
      super(props);
      console.log(LoginButton)
  }

  signup () {
      this.props.navigator.push({
          title: "Sign up",
          component: SignupForm,
      });
  }

  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      <Text style={{flex: 4, textAlign: 'center', marginTop: 100}}> Wanted </Text>
      <View style={styles.container} > 
        <LoginButton navigator={this.props.navigator} style={styles.button} />
        <TouchableHighlight style={styles.button} onPress={this.signup.bind(this)}>
          <Text style={styles.text}> Sign up </Text>
        </TouchableHighlight>
      </View>
      </View>
    )
  }
}


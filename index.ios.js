/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { AppRegistry, NavigatorIOS, Text } from 'react-native';
import SignupForm from './components/SignupForm'
export default class WantedApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'Create Account',
          component: SignupForm,
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    );
  }
}


AppRegistry.registerComponent('Wanted', () => WantedApp);

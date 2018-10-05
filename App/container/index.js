'use-strict'

import React, { Component, PropTypes } from 'react';
import { AppRegistry, NavigatorIOS, Text } from 'react-native';
import WelcomeView from '../components/WelcomeView';

export default class WantedApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: 'Create Account',
          component: WelcomeView,
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    );
  }
}

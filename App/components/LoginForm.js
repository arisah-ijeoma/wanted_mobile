import React, { Component, PropTypes } from 'react';
import { 
  NavigatorIOS,
  StyleSheet, 
  TouchableHighlight, 
  View,
  Text, 
  TextInput ,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    height: 36,
    borderColor: 'black',
    marginTop: 10,
    color: 'black',
  },
  textView: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  formContainer: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 40,
      marginLeft: 40,
  },
  buttonText: {
    fontSize: 19,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 40,
    alignSelf: 'stretch',
    marginTop: 20,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login() {

  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.formContainer}
        automaticallyAdjustContentInsets>
        <TextInput style={styles.textInput}
        placeholder={"Email"}
        value={this.state.email}
        onChangeText={ (email) => {this.setState({email})}}> 
        </TextInput>
        <TextInput style={styles.textInput}
        placeholder={"password"}
        value={this.state.email}
        onChangeText={ (password) => {this.setState({password})}}
        keyboardAppearance={'dark'}> 
        </TextInput>
        <TouchableHighlight style={styles.button}
          onPress={this.login.bind(this)}>
          <Text style={styles.buttonText}>Login</Text> 
        </TouchableHighlight>
      </ScrollView>
    )
  }
}
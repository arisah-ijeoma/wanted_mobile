'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';


function formatResponse(response) {
    return response.json().then((json) => {
        return response.ok ? json : Promise.reject(json);
    });
}

const styles = StyleSheet.create({
  textInput: {
    height: 36,
    borderColor: 'black',
    marginTop: 10,
    color: 'black',
  },
  textView: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  formContainer: {
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
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
    marginRight: 40,
    marginLeft: 40,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});


export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: 'ff fasf',
      address: 'fff fasdf',
      phone_number: '12345678912',
      email: 'fasf@fasf.com',
      password: 'ff123456',
      errorMatching: '',
      canSubmit: false
    }
  }

  _validateInput() {

    return true;
  }

  signUpPressed () {
    const isValid = this._validateInput();
    var state = this.state;
    state['password_confirmation'] = state.password;
    const body = {user: state};
    if (isValid) {
      this.setState({canSubmit: false})
      fetch('http://localhost:3000/v1/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
      .then(formatResponse)
      .then(json => {

      })
      .catch(error => {
          this.setState({canSubmit: true})
          Alert.alert('Opps!', error.message || error.error,
           [{text:'Dismiss', style: 'cancel'}], null)
      })
    }
  }

  _validatePassword (pass = '') {
    var error = '';
    if (pass !== this.state.password) {
      error = 'Passwords do not match';
    }
    this.setState( {errorMatching: error} )
  }

  render () {
    return (
      <View style={styles.formContainer}>
          <View >
              <View style={styles.textView}>
                <TextInput style={styles.textInput} 
                  placeholder={"Full name"}
                  value={this.state.full_name}
                  onChangeText={ (full_name)=>{ this.setState({full_name}); }}
                  /></View>
              <View style={styles.textView}>
                <TextInput style={styles.textInput} 
                  placeholder={"Address"}
                  value={this.state.address}
                  onChangeText={ (address)=>{ this.setState({address}); }}/>
              </View>
              <View style={styles.textView}>
                <TextInput style={styles.textInput} 
                  placeholder={"Phone number"}
                  value={this.state.phone_number}
                  onChangeText={ (phone_number)=>{ this.setState({phone_number}); }}/>
              </View>
              <View style={styles.textView}>
                <TextInput style={styles.textInput} 
                  placeholder={"E-mail"}
                  value={this.state.email}
                  onChangeText={ (email)=>{ this.setState({email}); }}/>
              </View>
              <View style={styles.textView}>
                <TextInput style={styles.textInput} 
                  placeholder={"Password"}
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={ (password)=>{ this.setState({password}); }}/>
              </View>
              <View style={styles.textView}>
                <TextInput style={styles.textInput} 
                  placeholder={"Confirm Password"}
                  secureTextEntry={true}
                  onChangeText={ (password)=>{ this._validatePassword(password); }}/>
              </View>
              <Text style={{color: 'red'}}>
                {this.state.errorMatching}
              </Text> 

          </View>
          <TouchableHighlight style={styles.button}
            onPress={this.signUpPressed.bind(this)}>
            <Text style={styles.buttonText}>Sign up</Text> 
          </TouchableHighlight>
      </View>
    )
  }
}


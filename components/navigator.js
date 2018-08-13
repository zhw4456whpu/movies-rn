/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import Main from '../App.js'

export default class movies extends Component {
  renderScene(route, navigator) {
    if(route.id == 'main'){
      return <Main navigator={navigator} />;
    }
  }
  render() {
    return (
      <Navigator style={{flex: 1}} initialRoute= {{id: 'main',title: 'Search Movies'}}
      renderScene= {this.renderScene}
      />
    );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
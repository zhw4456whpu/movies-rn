/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView, TextInput, Image} from 'react-native';
import {debounce} from 'lodash';
import ListItem from './components/ListItem'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//var Props = {};
export default class App extends Component/*<Props> */{
  /** start */
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => {return r1!== r2}});
    this.state = {
      dataSource : ds.cloneWithRows([])
    }
    console.log("this.state %o",this.state);
    this.searchMovies = this.searchMovies.bind(this);    
  }

  /** start */
  searchMovies = debounce( text =>{
    
    fetch('https://www.omdbapi.com/?apikey=PlzBanMe&s=' + text)
    //fetch('https://facebook.github.io/react-native/movies.json')
    .then((res) => {
      return res.json()
    })
    .then((resData) =>{
      debugger;
      console.log(resData);
      if('Search' in resData){
        console.log(resData.Search);
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => {return r1!== r2}});
        this.setState({
          dataSource : ds.cloneWithRows(resData.Search)
        })
      }
    })
    .catch( (err) =>{
      console.log(err);
    })
  },500);
  /** end */
  renderRow(row, sID = 1 , rId = 1){
    /*return (
      <View style={ styles.listItem} >
        <Image source={{uri : row.Poster}} style={styles.poster} />
        <View style={{flex:1}}>
          <Text style={styles.title}>{row.Title}</Text>
          <Text style={styles.subHeading}>{row.Type} - {row.Year}</Text>
        </View>
        
      </View>)*/
      return (
        <ListItem row={row} delay={50} />
      )
  }
  /** end */
  render() {
    /** start */
    return (
      <View style={styles.container}>
        <TextInput style={{height:40,borderColor:'gray',borderWidth: 0, width: '100%', marginTop: 20}}
          onChangeText={this.searchMovies}
          placeholder= "Enter search keywords"
        />

        <ListView dataSource={this.state.dataSource} style={{width: '100%'}}
         renderRow={this.renderRow} enableEmptySections={true}/>
      </View>
    );
    /** end */
    /*return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  /** start */
  listItem:{
    margin:10
  },
  /*poster:{
    height: 75,
    width : 50
  },
  title:{
    margin: 5,
    fontSize : 15
  },
  subHeading:{
    margin:5,
    fontSize : 12
  },*/
  /** end */
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

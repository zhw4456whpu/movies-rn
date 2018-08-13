/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Animated} from 'react-native';

export default class listItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            slideAnim : new Animated.Value(100)
        }
        console.log("this.state %o",this.state);
    }

    componentDidMount(){
        Animated.timing(this.state.slideAnim, {
            toValue : 10,
            duration : 500,
            delay : this.props.delay
        }).start();
    }
    render() {
        return (
            <Animated.View style={{marginLeft: this.state.slideAnim, flexDirection: 'row'
                , alignItems: 'center'}}>
                <Image source={{ uri: this.props.row.Poster}} style={styles.poster} />
                <View style={{flex: 1}}>
                    <Text style={styles.title}>{this.props.row.Title}</Text>
                    <Text style={styles.subHeading}>
                        {this.props.row.Type} - {this.props.row.Year}
                    </Text>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
  poster: {
    height: 75,
    width  : 50,
    margin : 10
  },
  title: {
    fontSize: 15,
    margin: 5,
  },
  subHeading: {
    margin: 5,
    fontSize : 12
  },
});

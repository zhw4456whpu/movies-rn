import React from 'React';
import MapBoxView from './mapBox';
import {StyleSheet, Text, TextInput, TouchableHighlight} from 'react-native';

class MapDemo extends React.component {
    constructor(props){
        super(props);
        var center = {latitude : 0 , longtitude : 0};
        this.state = {
            mapCenter : {...center},
            editCenter : {...center}
        }
    }

    /**
     * 地图位置移动后更新输入框
     * @param {} param0 object
     */
    onCenterChanged({latitude , longtitude}){
        var editCenter = {latitude , longtitude};
        this.setState({editCenter});
    }

    /**
     * 提交输入框内容后更新地图
     */
    updateMapCoordinates(){
        var latitude = parseFloat( this.state.editCenter.latitude);
        var longtitude = parseFloat( this.state.editCenter.longtitude);
        var mapCenter = {latitude , longtitude};
        this.setState({mapCenter});
    }

    /**
     * 用户输入时更新单个输入框内容
     */
    updateEditField(plain , value){
        var editCenter = {
            ...this.state.editCenter,
            [plain] : value
        };
        this.setState({editCenter});
    }

    render(){
        return (
            <View>
                <MapBoxView zoom={10} center={this.state.mapCenter}
                onCenterChanged={event => this.onCenterChanged(event.nativeEvent.src)} />

                <TextInput value={this.state.editCenter.latitude} 
                onChangeText= {value => updateEditField('latitude', value)} />

                <TextInput value={this.state.editCenter.longtitude} 
                onChangeText= {value => this.updateEditField('longtitude' , value)} />

                <TouchableHighlight onPress={ ()=> this.updateMapCoordinates()} >
                    <Text>Update</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
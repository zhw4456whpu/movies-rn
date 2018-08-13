import {PropTypes} from 'react';
import {requireNativeComponent, view} from 'react-native';

//定义暴露给原生组件的接口
var iface = {
    name : 'MapViewBox',
    propTypes : {
        center :PropTypes.shape({
            latitude : PropTypes.number,
            longtitude : PropTypes.number
        }),
        zoom : PropTypes.number,
        onRegionChanged : PropTypes.func,
        ...View.propTypes
    }
};

//export语句导出的接口，会被原生组件导入成JSX组件来使用
export default requireNativeComponent('ReactMapBoxView' , iface);
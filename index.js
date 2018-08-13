/** @format */

import {AppRegistry} from 'react-native';
import movies from './components/navigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => movies);

/** @format */

import {AppRegistry} from 'react-native';
import Router from './src/Router';
import Trail from './src/components/Trail';
import MapsScreen from './src/components/MapsScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);

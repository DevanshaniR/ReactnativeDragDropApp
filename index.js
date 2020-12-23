/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC, GestureHandlerRootView } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);


/**
 * @format
 */

import {AppRegistry} from 'react-native';
import PureApp from './App';
import {name as appName} from './app.json';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <PureApp />;
};

AppRegistry.registerComponent(appName, () => App);

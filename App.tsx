import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/stack/Auth/AuthStack';
import {HomeStack} from './src/stack/main/HomeStack';
import {StatusBar} from 'react-native';
import {COLORS} from './src/constant';

function App(): JSX.Element {
  const isAuth = true;
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      {isAuth ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;

import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterCode} from './src/pages/Auth';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegisterCode" component={RegisterCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

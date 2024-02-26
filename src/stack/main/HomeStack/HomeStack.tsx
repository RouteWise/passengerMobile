import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Account, Notifications} from '../../../pages/main';
import HomeTab from '../HomeTab';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="HomeTab" component={HomeTab} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export default HomeStack;

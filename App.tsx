import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {COLORS} from './src/constant';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.blue}}>
      <Text>RouteWise Yolcu</Text>
    </SafeAreaView>
  );
}

export default App;

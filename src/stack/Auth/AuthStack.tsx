import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterCode} from '../../pages/Auth';
import {Onboarding} from '../../pages/Onboarding';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      {/* <Stack.Screen name="RegisterCode" component={RegisterCode} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;

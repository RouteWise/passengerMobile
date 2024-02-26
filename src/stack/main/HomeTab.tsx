import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Map, Services} from '../../pages/main';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constant';
import {HomeIcon, LocationIcon, ServiceIcon} from '../../assets/Icons';
import {getHeight, getWidth} from '../../utils/getDimensions';
import {useState} from 'react';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const [routeName, setRouteName] = useState('HomeTab');
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          position: 'absolute',
          height: getHeight(0.07),
          marginVertical: 10,
          borderTopWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontFamily: 'Montserrat-Bold',
          fontSize: 12,
          color: '#fff',
        },
        headerShown: false,
        header: () => (
          <View style={{backgroundColor: 'red'}}>
            <Text>Header</Text>
          </View>
        ),
      })}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={({route}) => ({
          tabBarButton: ({onPress}) => (
            <TouchableOpacity
              onPress={() => {
                onPress();
                setRouteName('HomeTab');
              }}
              activeOpacity={0.96}
              style={{
                backgroundColor:
                  routeName === 'HomeTab' ? COLORS.darkBlue : COLORS.blue,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                width: getWidth(0.48),
                height: getHeight(0.07),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <HomeIcon fill="#fff" width={32} height={32} />
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 12,
                  color: COLORS.white,
                }}>
                Anasayfa
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name={'Map'}
        component={Map}
        options={{
          tabBarButton: ({onPress}) => (
            <TouchableOpacity
              onPress={() => {
                onPress();
                setRouteName('Map');
              }}
              activeOpacity={0.96}
              style={{
                zIndex: 100,
                position: 'absolute',
                left: getWidth(0.4),
                backgroundColor:
                  routeName === 'Map' ? COLORS.darkBlue : COLORS.blue,
                width: getWidth(0.17),
                height: getWidth(0.17),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
                top: -getHeight(0.05),
                borderWidth: 6,
                borderColor: COLORS.white,
              }}>
              <LocationIcon fill={COLORS.white} width={40} height={40} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={'Service'}
        component={Services}
        options={{
          tabBarButton: ({onPress}) => (
            <TouchableOpacity
              onPress={() => {
                onPress();
                setRouteName('Service');
              }}
              activeOpacity={0.96}
              style={{
                backgroundColor:
                  routeName === 'Service' ? COLORS.darkBlue : COLORS.blue,
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                width: getWidth(0.48),
                height: getHeight(0.07),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ServiceIcon fill="#fff" width={32} height={32} />
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 12,
                  color: COLORS.white,
                }}>
                Servisler
              </Text>
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <HomeIcon fill="#fff" width={30} height={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;

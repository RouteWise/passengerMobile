import {Text, Animated, Easing, Dimensions} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {COLORS} from '../../constant';

interface BottomDrawerProps {
  open: boolean;
  children?: React.ReactNode;
}

const BottomDrawer = ({open, children}: BottomDrawerProps) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const screenHeight = Dimensions.get('window').height;

  const toggleDrawer = () => {
    Animated.timing(translateY, {
      toValue: open ? 0 : screenHeight * 0.7,
      duration: 500, // Bu süreyi efektin hızını kontrol etmek için ayarlayabilirsiniz
      easing: Easing.in(Easing.cubic), // Bu, animasyonun geçişini kontrol eder
      useNativeDriver: true, // Performansı artırmak için native driver kullanımı
    }).start();
  };

  useEffect(() => {
    toggleDrawer();
  }, [open]);

  return (
    <Animated.View
      style={{
        width: '100%',
        height: '60%',
        transform: [{translateY: translateY}],
        backgroundColor: COLORS.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
          width: -8,
          height: -8,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10,
      }}>
      {children}
    </Animated.View>
  );
};

export default BottomDrawer;

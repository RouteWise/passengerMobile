import {Text, Animated, Easing, Dimensions} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {COLORS} from '../../constant';

interface BottomDrawerProps {
  open: boolean;
  children?: React.ReactNode;
  page?: number;
}

const BottomDrawer = ({open, children, page}: BottomDrawerProps) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const screenHeight = Dimensions.get('window').height;

  const toggleDrawer = () => {
    Animated.timing(translateY, {
      toValue: open
        ? 0
        : screenHeight * (page === 0 ? 0.6 : page === 1 ? 0.7 : 0.8),
      duration: 500,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    toggleDrawer();
  }, [page]);

  return (
    <Animated.View
      style={{
        width: '100%',
        height: page === 0 ? '60%' : page === 1 ? '70%' : '80%',
        transform: [{translateY: translateY}],
        backgroundColor: COLORS.white,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
          width: -8,
          height: -8,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10,
        justifyContent: 'space-around',
      }}>
      {children}
    </Animated.View>
  );
};

export default BottomDrawer;

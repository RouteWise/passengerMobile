import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';

const PrivacyAndSecurity = () => {
  return (
    <TouchableOpacity
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      }}>
      <Text
        style={{
          color: COLORS.black,
          fontFamily: 'Montserrat-Bold',
          fontSize: 12,
        }}>
        Gizlilik ve Güvenlik
      </Text>
    </TouchableOpacity>
  );
};

export default PrivacyAndSecurity;

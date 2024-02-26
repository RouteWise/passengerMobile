import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {NotificationIcon} from '../../../../assets/Icons';
import styles from './NotificationButton.styles';
import {useNavigation} from '@react-navigation/native';

const NotificationButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Notifications' as never)}
      activeOpacity={0.8}
      style={styles.notificationButton}>
      <NotificationIcon fill="black" width={30} height={30} />
      <Text style={styles.notificationCountText}>4</Text>
    </TouchableOpacity>
  );
};

export default NotificationButton;

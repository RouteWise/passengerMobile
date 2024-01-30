import React from 'react';
import {TouchableOpacity} from 'react-native';

import {UserIcon} from '../../../../assets/Icons';
import {useNavigation} from '@react-navigation/native';

import styles from './AccountButton.styles';

const AccountButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Account' as never)}
      activeOpacity={0.8}
      style={styles.accountButtonContainer}>
      <UserIcon fill="black" width={30} height={30} />
    </TouchableOpacity>
  );
};

export default AccountButton;

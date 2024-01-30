import React from 'react';
import {TouchableOpacity, Vibration} from 'react-native';

import styles from './MarkAsReadButton.styles';
import {MarkAsReadIcon} from '../../../../assets/Icons';
import {COLORS} from '../../../../constant';

const MarkAsReadButton = () => {
  return (
    <TouchableOpacity
      onPress={() => Vibration.vibrate(100)}
      activeOpacity={0.89}
      style={styles.buttonContainer}>
      <MarkAsReadIcon fill={COLORS.black} width={32} height={32} />
    </TouchableOpacity>
  );
};

export default MarkAsReadButton;

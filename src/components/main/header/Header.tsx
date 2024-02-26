import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Header.styles';
import {NotificationButton} from './NotificationButton';
import {AccountButton} from './AccountButton';
import {LeftArrowIcon} from '../../../assets/Icons';
import {COLORS} from '../../../constant';
import {getWidth} from '../../../utils/getDimensions';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  pageTitle: string;
  showTitle?: boolean;
  children?: React.ReactNode;
  showArrow?: boolean;
}

export const ButtonGroup = () => {
  return (
    <View style={styles.buttonContainer}>
      <NotificationButton />
      <AccountButton />
    </View>
  );
};

const TitleGroup = ({
  pageTitle,
  showTitle,
  showArrow,
  children,
}: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        {pageTitle === 'Anasayfa' && (
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.headerWelcome}>Hoşgeldiniz</Text>
            {/* TODO: Buradaki Adı Dinamik Alacağız! */}
            <Text style={styles.headerText}>Hakan Çelik</Text>
          </View>
        )}
        {showTitle && (
          <>
            {showArrow && (
              <TouchableOpacity
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                onPress={() => navigation.goBack()}
                style={{padding: getWidth(0.03)}}>
                <LeftArrowIcon fill={COLORS.black} width={14} height={24} />
              </TouchableOpacity>
            )}
            <Text style={styles.headerText}>{pageTitle}</Text>
          </>
        )}
      </View>
      {children}
    </View>
  );
};

export default TitleGroup;

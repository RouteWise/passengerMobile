import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ButtonGroup, Header} from '../../components/main/header';
import {COLORS} from '../../constant';

const Account = () => {
  return (
    <View style={styles.container}>
      <Header pageTitle="Hesap" showTitle showArrow />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

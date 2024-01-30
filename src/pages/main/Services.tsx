import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {ButtonGroup, Header} from '../../components/main/header';

const Services = () => {
  return (
    <View style={styles.container}>
      <Header pageTitle="Servisler" showTitle>
        <ButtonGroup />
      </Header>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {OnboardingSwiper} from '../../components/main';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OnboardingSwiper />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

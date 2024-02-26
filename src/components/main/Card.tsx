import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {getWidth} from '../../utils/getDimensions';

interface CardProps {
  children: React.ReactNode;
  isLoading?: boolean;
  theme: 'grayBase' | 'blueBase';
}

const Card = ({children, isLoading, theme}: CardProps) => {
  return (
    <View style={styles.cardContainer(theme)}>
      {children}
      {isLoading && (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator
            color={theme === 'grayBase' ? COLORS.blue : COLORS.white}
            size="large"
          />
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: theme => ({
    backgroundColor: theme === 'grayBase' ? COLORS.gray : COLORS.blue,
    padding: getWidth(0.04),
    borderRadius: getWidth(0.02),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 2.62,
    elevation: 4,
    gap: getWidth(0.04),
  }),
  indicatorContainer: {
    marginTop: getWidth(0.05),
  },
});

import {Text, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';
import {COLORS} from '../../constant';

interface TitleProps {
  children: string;
  type?: 'small' | 'medium' | 'large';
}

export default class Title extends PureComponent<TitleProps> {
  render() {
    return (
      <Text style={styles(this.props.type).titleMain}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = (type?: 'small' | 'medium' | 'large') =>
  StyleSheet.create({
    titleMain: {
      color: COLORS.black,
      fontFamily: 'Montserrat-Bold',
      fontSize: type === 'small' ? 14 : type === 'medium' ? 18 : 22,
      width: '100%',
      textAlign: 'center',
    },
  });

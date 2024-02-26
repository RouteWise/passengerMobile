import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ButtonProps} from '../../types';
import {COLORS} from '../../constant';
import {getHeight, getWidth} from '../../utils/getDimensions';

const Button = ({
  title,
  colorBase,
  onPress,
  fontFamily,
  disabled,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={
        type === 'primary'
          ? styles(colorBase, fontFamily).buttonMain
          : type === 'secondary'
          ? styles(colorBase, fontFamily).buttonSecondary
          : styles(colorBase, fontFamily).buttonMain
      }
      activeOpacity={0.8}>
      <Text style={styles(colorBase, fontFamily).buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (
  colorBase: 'whiteBase' | 'blueBase' | undefined,
  fontFamily?: string,
  disabled?: boolean,
) =>
  StyleSheet.create({
    buttonMain: {
      backgroundColor: disabled
        ? COLORS.gray
        : colorBase === 'whiteBase'
        ? COLORS.white
        : COLORS.blue,
      width: getWidth(0.5),
      height: getHeight(0.06),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.9,
      shadowRadius: 5,
      elevation: 4,
    },
    buttonSecondary: {
      backgroundColor: disabled
        ? COLORS.gray
        : colorBase === 'whiteBase'
        ? COLORS.white
        : COLORS.blue,
      width: getWidth(0.7),
      height: getHeight(0.05),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: getWidth(0.02),
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.9,
      shadowRadius: 5,
      elevation: 4,
    },
    buttonText: {
      color: colorBase === 'whiteBase' ? COLORS.blue : COLORS.white,
      fontFamily: fontFamily ? fontFamily : 'Montserrat-Bold',
      fontSize: getWidth(0.036),
    },
  });

export default Button;

import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ButtonProps} from '../../types';
import {COLORS} from '../../constant';

const Button = ({
  title,
  type,
  onPress,
  fontFamily,
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles(type, fontFamily).buttonMain}
      activeOpacity={0.8}>
      <Text style={styles(type, fontFamily).buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (
  type: 'whiteBase' | 'blueBase' | undefined,
  fontFamily?: string,
) =>
  StyleSheet.create({
    buttonMain: {
      backgroundColor: type === 'whiteBase' ? COLORS.white : COLORS.blue,
      width: '60%',
      height: 50,
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
    buttonText: {
      color: type === 'whiteBase' ? COLORS.blue : COLORS.white,
      fontFamily: fontFamily ? fontFamily : 'Montserrat-Bold',
      fontSize: 14,
    },
  });

export default Button;

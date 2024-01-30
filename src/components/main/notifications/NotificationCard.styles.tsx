import {StyleSheet, TextStyle} from 'react-native';
import {COLORS} from '../../../constant';
import {getWidth} from '../../../utils/getDimensions';

export default StyleSheet.create({
  container: {
    width: getWidth(0.9),
    backgroundColor: COLORS.gray,
    padding: getWidth(0.02),
    borderRadius: getWidth(0.02),
  },
  notificationText: (isRead: boolean) => ({
    color: COLORS.black,
    fontFamily: isRead ? 'Montserrat-Medium' : 'Montserrat-Bold',
    fontSize: getWidth(0.03),
  }),
});

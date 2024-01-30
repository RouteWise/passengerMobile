import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constant';
import {getWidth} from '../../../../utils/getDimensions';

export default StyleSheet.create({
  notificationButton: {
    backgroundColor: COLORS.gray,
    width: getWidth(0.12),
    height: getWidth(0.12),
    borderRadius: getWidth(0.1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCountText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: COLORS.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: COLORS.blue,
    width: 20,
    height: 20,
    borderRadius: 20,
    position: 'absolute',
    right: -2,
    bottom: -2,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
});

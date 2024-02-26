import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constant';
import {getWidth} from '../../../utils/getDimensions';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(0.05),
    marginVertical: getWidth(0.05),
  },
  titleContainer: {
    gap: getWidth(0.03),
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: getWidth(0.04),
  },
  headerText: {
    color: COLORS.black,
    fontSize: getWidth(0.05),
    fontFamily: 'Montserrat-Bold',
  },
  headerWelcome: {
    color: COLORS.black,
    fontSize: getWidth(0.034),
    fontFamily: 'Montserrat-Bold',
  },
});

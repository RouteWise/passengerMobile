import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constant';
import {getHeight} from '../../../utils/getDimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContentContainer: {
    gap: getHeight(0.015),
    paddingBottom: getHeight(0.04),
  },
});

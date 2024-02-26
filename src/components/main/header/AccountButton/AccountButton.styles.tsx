import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constant';
import {getWidth} from '../../../../utils/getDimensions';

export default StyleSheet.create({
  accountButtonContainer: {
    backgroundColor: COLORS.gray,
    width: getWidth(0.12),
    height: getWidth(0.12),
    borderRadius: getWidth(0.1),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {StyleSheet} from 'react-native';
import {FontSize, Spacing} from '../../../constants/tokens';

export default StyleSheet.create({
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: Spacing.XL,
  },
  message: {
    fontSize: FontSize.M,
    textAlign: 'center',
  },
});

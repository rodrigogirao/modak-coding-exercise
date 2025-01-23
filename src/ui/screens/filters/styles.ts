import {StyleSheet} from 'react-native';
import {Spacing} from '../../../constants/tokens';

export default StyleSheet.create({
  flatList: {
    backgroundColor: 'white',
    height: '100%',
    paddingTop: Spacing.S,
    paddingBottom: Spacing.XL,
  },
  category: {
    backgroundColor: 'lightgrey',
    padding: Spacing.XL,
    marginHorizontal: Spacing.XL,
    marginVertical: Spacing.S,
    borderRadius: Spacing.S,
  },
  selectedCategory: {
    borderWidth: 2,
    borderColor: 'green',
  },
});

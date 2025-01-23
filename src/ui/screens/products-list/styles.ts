import {StyleSheet} from 'react-native';
import {FontSize, FontWeight, Spacing} from '../../../constants/tokens';

export default StyleSheet.create({
  flatList: {
    backgroundColor: 'white',
    height: '100%',
  },
  columnWrapper: {
    gap: Spacing.L,
    marginVertical: Spacing.L,
    paddingHorizontal: Spacing.XL,
  },
  filters: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
    paddingHorizontal: Spacing.L,
    paddingVertical: Spacing.S,
  },
  selectedFilter: {
    backgroundColor: 'white',
    paddingHorizontal: Spacing.XL,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    fontWeight: FontWeight.bold,
  },
  sortOptions: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: Spacing.S,
    right: Spacing.S,
    top: Spacing.XXXXL,
    gap: Spacing.XXS,
    borderRadius: Spacing.S,
    zIndex: 2,
  },
  sortOption: {
    padding: Spacing.S,
  },
  sortOptionLabel: {
    fontSize: FontSize.S,
  },
  sortOptionSelected: {
    color: 'green',
  },
});

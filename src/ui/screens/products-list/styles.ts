import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flatList: {
    backgroundColor: 'white',
    height: '100%',
  },
  columnWrapper: {
    gap: 12,
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  filters: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  selectedFilter: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    fontWeight: 'bold',
  },
  sortOptions: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 8,
    right: 8,
    gap: 4,
    top: 48,
    borderRadius: 8,
    zIndex: 2,
  },
  sortOption: {
    padding: 8,
  },
  sortOptionLabel: {
    fontSize: 16,
  },
  sortOptionSelected: {
    color: 'green',
  },
});

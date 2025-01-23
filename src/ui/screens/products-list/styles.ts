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
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    fontWeight: 'bold',
  },
});

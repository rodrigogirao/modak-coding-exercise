import { StyleSheet } from 'react-native'

import { Colors, Spacing } from 'constants/tokens'

export default StyleSheet.create({
  flatList: {
    backgroundColor: Colors.background,
    paddingTop: Spacing.S,
  },
  flatListContainer: {
    paddingBottom: Spacing.XXXL,
  },
  category: {
    backgroundColor: Colors.secondary,
    padding: Spacing.L,
    marginHorizontal: Spacing.XL,
    marginVertical: Spacing.XXS,
    borderRadius: Spacing.S,
  },
  selectedCategory: {
    borderWidth: 2,
    borderColor: Colors.primary,
  },
})

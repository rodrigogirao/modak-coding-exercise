import { Dimensions, StyleSheet } from 'react-native'

import {
  BorderRadius,
  Colors,
  FontSize,
  FontWeight,
  OpacityLevel,
  Spacing,
} from 'constants/tokens'

export const IMAGE_SIZE = Dimensions.get('screen').width

export default StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    paddingHorizontal: Spacing.XL,
  },
  scrollViewContainer: {
    gap: Spacing.XL,
    paddingBottom: Spacing.XXXL,
  },
  imageLoader: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    top: IMAGE_SIZE / 2,
  },
  brand: {
    padding: Spacing.S,
    backgroundColor: 'lightgrey',
    position: 'absolute',
    opacity: OpacityLevel.overlay,
    bottom: Spacing.L,
    borderRadius: BorderRadius.S,
  },
  header: {
    flex: 1,
    gap: Spacing.M,
  },
  titleGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: '70%',
    fontSize: FontSize.XXL,
    fontWeight: FontWeight.bold,
  },
  buttonGroup: {
    gap: Spacing.XXS,
  },
  priceGroup: {
    flexDirection: 'row',
    gap: Spacing.S,
  },
  originalPrice: {
    fontSize: FontSize.M,
    fontWeight: FontWeight.bold,
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: FontSize.M,
    fontWeight: FontWeight.bold,
  },
  discountStyle: {
    color: Colors.error,
  },
  reviews: {
    gap: Spacing.M,
  },
  reviewsLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewsLabel: {
    fontSize: FontSize.S,
    fontWeight: FontWeight.bold,
  },
  review: {
    borderWidth: 1,
    gap: Spacing.XXS,
    borderColor: 'lightgrey',
    borderRadius: BorderRadius.M,
    padding: Spacing.L,
  },
  reviewDateRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comment: {
    fontWeight: FontWeight.semibold,
  },
})

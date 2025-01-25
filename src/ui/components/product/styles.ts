import {Dimensions, StyleSheet} from 'react-native';
import {
  BorderRadius,
  Colors,
  FontWeight,
  OpacityLevel,
  Spacing,
} from '../../../constants/tokens';

export const CONTAINER_WIDTH = Dimensions.get('screen').width / 2 - 24;

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: BorderRadius.L,
    backgroundColor: Colors.backgroundAlternate,
    width: CONTAINER_WIDTH,
    height: CONTAINER_WIDTH * 1.5,
  },
  rating: {
    backgroundColor: Colors.background,
    position: 'absolute',
    fontWeight: FontWeight.bold,
    opacity: OpacityLevel.contrast,
    borderRadius: BorderRadius.S,
    padding: Spacing.XXS,
    top: Spacing.XXL,
    left: Spacing.XXL,
  },
  image: {
    position: 'absolute',
    borderTopRightRadius: BorderRadius.L,
    borderTopLeftRadius: BorderRadius.L,
    top: Spacing.zero,
  },
  info: {
    paddingHorizontal: Spacing.XL,
    paddingVertical: Spacing.S,
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.background,
    opacity: OpacityLevel.contrast,
    gap: Spacing.XXS,
    borderBottomLeftRadius: BorderRadius.L,
    borderBottomRightRadius: BorderRadius.L,
  },
  priceGroup: {
    flexDirection: 'row',
    gap: Spacing.S,
    alignItems: 'center',
  },
  price: {
    fontWeight: FontWeight.bold,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
  },
  discountedStyle: {
    color: Colors.error,
  },
});

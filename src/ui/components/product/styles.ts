import {Dimensions, StyleSheet} from 'react-native';
import {
  BorderRadius,
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
    backgroundColor: 'lightgrey',
    width: CONTAINER_WIDTH,
    height: CONTAINER_WIDTH * 1.5,
  },
  rating: {
    backgroundColor: 'white',
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
    backgroundColor: 'lightgrey',
    borderTopStartRadius: BorderRadius.L,
    borderTopEndRadius: BorderRadius.L,
    top: Spacing.zero,
  },
  info: {
    paddingHorizontal: Spacing.XL,
    paddingVertical: Spacing.S,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: OpacityLevel.contrast,
    gap: Spacing.XXS,
    borderBottomStartRadius: BorderRadius.L,
    borderBottomEndRadius: BorderRadius.L,
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
});

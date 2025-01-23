import {Dimensions, StyleSheet} from 'react-native';

export const CONTAINER_WIDTH = Dimensions.get('screen').width / 2 - 24;

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: 'lightgrey',
    width: CONTAINER_WIDTH,
    height: CONTAINER_WIDTH * 1.5,
  },
  rating: {
    backgroundColor: 'white',
    position: 'absolute',
    fontWeight: 'bold',
    opacity: 0.8,
    borderRadius: 8,
    padding: 4,
    top: 20,
    left: 20,
  },
  image: {
    position: 'absolute',
    backgroundColor: 'lightgrey',
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    top: 0,
  },
  info: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
    gap: 4,
    borderBottomStartRadius: 32,
    borderBottomEndRadius: 32,
  },
  priceGroup: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
  },
});

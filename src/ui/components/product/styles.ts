import {Dimensions, StyleSheet} from 'react-native';

export const CONTAINER_SIZE = Dimensions.get('screen').width / 2 - 24;

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: 'lightgrey',
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE * 1.5,
  },
  rating: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  image: {
    position: 'absolute',
    top: 0,
  },
  info: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.8,
    gap: 4,
    borderBottomStartRadius: 32,
    borderBottomEndRadius: 32,
  },
  price: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});

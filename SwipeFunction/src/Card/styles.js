  
import { StyleSheet, Dimensions } from 'react-native';
import { CARD } from '../utils/constants';

const dimensions = Dimensions.get('window');
// const imageHeight = dimensions.height;
const imageHeight = Math.round(dimensions.height * 9 / 16);
const imageWidth = 0.95*dimensions.width;

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
  },
  image: {
    //right: dimensions.width,
    //left: 0.05*dimensions.width,
    width: imageWidth,
    height: imageHeight,
    borderRadius: CARD.BORDER_RADIUS,
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
    borderRadius: CARD.BORDER_RADIUS,
  },
  name: {
    position: 'absolute',
    bottom: 22,
    left: 22,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  choiceContainer: {
    position: 'absolute',
    top: 100,
  },
  likeContainer: {
    left: 45,
    transform: [{ rotate: '-30deg' }],
  },
  nopeContainer: {
    right: 45,
    transform: [{ rotate: '30deg' }],
  },
});
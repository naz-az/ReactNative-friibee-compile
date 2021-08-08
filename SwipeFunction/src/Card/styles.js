  
import { StyleSheet } from 'react-native';
import { CARD } from '../utils/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 130,
  },
  image: {
    width: 500,
    height: 3000,
    borderRadius: CARD.BORDER_RADIUS,
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
  starContainer: {
    right: 90,
    transform: [{ rotate: '90deg' }],
  },
});
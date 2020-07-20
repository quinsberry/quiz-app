import { StyleSheet, Dimensions } from 'react-native'

const screen = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: '#ff4136',
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleCorrect: {
    backgroundColor: '#28a125',
  },
  icon: {
    width: screen.width / 3,
  },
})

import React from 'react'
import { View } from 'react-native'

import CloseSvg from '../../../assets/svg/close'
import CheckSvg from '../../../assets/svg/check'
import styles from './styles'

const Alert = ({ correct }) => {
  const circleStyles = [styles.circle]

  if (correct) {
    circleStyles.push(styles.circleCorrect)
  }
  return (
    <View style={styles.container}>
      <View style={circleStyles}>
        {correct ? (
          <CheckSvg width={styles.icon.width} color={'white'} />
        ) : (
          <CloseSvg width={styles.icon.width} color={'white'} />
        )}
      </View>
    </View>
  )
}

export default Alert

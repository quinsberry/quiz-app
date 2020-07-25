import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const RowItem = ({ onPress, name, color }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.row, { backgroundColor: color }]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RowItem

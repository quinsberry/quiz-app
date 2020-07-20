import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
})

const ButtonContainer = ({ children }) => {
  return <View style={styles.buttonContainer}>{children}</View>
}

export default ButtonContainer

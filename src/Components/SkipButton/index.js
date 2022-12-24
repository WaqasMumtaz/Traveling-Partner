import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Global from '../../Global'
import Gradient from '../GradientBG'

export default function SkipButton({ handleSkip, _style }) {
  return (
    <View style={{...styles.btn, ..._style}}>
      <TouchableOpacity onPress={() => handleSkip()}>
        <Gradient _style={styles.skipBtnContainer}>
          <Text style={{ fontWeight: 'bold' }}>Skip</Text>
        </Gradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    flex:0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipBtnContainer: {
    paddingHorizontal: 40,
    padding:10,
    borderRadius: 20,
  }
})

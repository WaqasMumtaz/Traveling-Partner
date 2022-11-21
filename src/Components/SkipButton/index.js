import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Global from '../../Global'
import Gradient from '../GradientBG'

export default function SkipButton({ handleSkip }) {
  return (
    <TouchableOpacity style={{ marginTop: 20 }} onPress={()=> handleSkip()}>
      <Gradient>
        <Text style={{ fontWeight: 'bold' }}>Skip</Text>
      </Gradient>
    </TouchableOpacity>
  )
}

import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import Global from '../../Global'

export default function SkipButton({ title , handleSkip }) {
  return (
    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
       <TouchableOpacity
       onPress={()=> handleSkip()}
       >
           <Text style={{color:Global.skip_btn_clr, fontSize:17}}>{title}</Text>
       </TouchableOpacity>
    </View>
  )
}

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Global from '../../Global'


const InputButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default InputButton

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        height:50,
        backgroundColor:Global.inputs_clr,
        borderRadius:100,
        marginTop:15,
        alignItems:'center',
        paddingLeft:20
    }
})
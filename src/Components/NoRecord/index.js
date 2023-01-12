import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import emoji from '../../Assets/happyemoji.png';
import Global from '../../Global';
import { Heading2 } from '../Heading';

const NoRecord = () => {
  return (
    <View style={styles.container}>
        <Heading2 title={'No Results Found'}/>
        <Image source={emoji} resizeMode='contain' style={styles.icon}/>
    </View>
  )
}

export default NoRecord

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:"center"
    },
    icon:{
        height:50,
        width:50,
        margin:8
    }
})
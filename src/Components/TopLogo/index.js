import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import decoImage from '../../Assets/deco.png';
import Global from '../../Global';

const TopLogo = () => {
  return (
    <View style={styles.container}>
      <Image source={decoImage} style={styles.logo} resizeMode='cover'/>
    </View>
  )
}

export default TopLogo

const styles = StyleSheet.create({
    container:{
        // flex:0.2,
       // flexDirection:'row',
        backgroundColor:Global.white,
        alignItems:'flex-start',
        // zIndex:1,
        // position:'relative'
    },
    logo:{
        height:180,
        width:155,
        //position:'absolute'
    }
})
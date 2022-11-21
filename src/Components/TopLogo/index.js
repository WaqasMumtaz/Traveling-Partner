import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import decoImage from '../../Assets/deco.png';

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
        backgroundColor:'red',
        alignItems:'flex-start',
        zIndex:1,
        position:'relative'
    },
    logo:{
        height:220,
        width:190,
        position:'absolute'
    }
})
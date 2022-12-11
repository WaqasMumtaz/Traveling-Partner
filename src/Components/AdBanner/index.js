import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AdLogo from '../../Assets/ad.png';

const AdBanner = ({ _style }) => {
  return (
    <View style={styles.container}>
       <Image 
       source={AdLogo} 
       resizeMode="cover" 
       style={{ ...styles.image, ..._style }}
       />
    </View>
  )
}

export default AdBanner

const styles = StyleSheet.create({
    container:{
        flex: 0.6,
        // backgroundColor:'blue',
        borderRadius:10
    },
    image:{
        width:'100%',
        borderRadius:10,
         // flex:1
    }
})
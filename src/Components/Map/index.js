import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import map_img from '../../Assets/map.png';


const MapLogo = () => {
  return (
    <Image
    source={map_img}
    style={styles.mapStyle}
    resizeMode='cover'
   />
  )
}

export default MapLogo

const styles = StyleSheet.create({
    mapStyle:{
        width:'100%',
        height:250,
    }
})
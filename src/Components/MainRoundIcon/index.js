import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import rectangle from '../../Assets/rectangle.png'

const Main = ({ children }) => {
  return (
    <ImageBackground source={rectangle} resizeMode="cover" style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center', flex:1 }}>
         {children}
      </View>
    </ImageBackground>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 120
  }
})
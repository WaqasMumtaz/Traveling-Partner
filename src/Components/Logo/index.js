import React from "react";
import { View , Image , StyleSheet } from "react-native";

function LogoComponent({ src }){
 return(
        <Image 
          source={src} 
          style={styles.logoStyle} 
        />
 )
}

export default LogoComponent;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    logoStyle:{
        resizeMode:'contain',
        height:229.4,
        width:261.8
    }
})


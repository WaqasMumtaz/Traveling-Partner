import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import taxisImg from '../../Assets/taxis_group.png';

const TaxiGroup = ({ children, _style }) => {
    return (
        // <View style={styles.container}>
            <ImageBackground source={taxisImg} resizeMode="cover" style={{ ...styles.image, ..._style }}>
                {children}
            </ImageBackground>
        // </View>
    )
}

export default TaxiGroup

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
         flex: 1,
        //height:80,
       // width:'100%'
    }
})
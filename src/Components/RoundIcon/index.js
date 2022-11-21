import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import rectangle from '../../Assets/rectangle.png'

const RoundIcon = ({ icon }) => {
    return (
        <View style={styles.container}>
            <Image
                source={rectangle}
                // style={styles.}
                resizeMode='cover'
            />
            <View style={styles.logo}>
                <Image source={icon} resizeMode='cover' />
            </View>
        </View>
    )
}

export default RoundIcon

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        top: 30,
        right: 30,
        left: 30,
        bottom: 30,
    }
})
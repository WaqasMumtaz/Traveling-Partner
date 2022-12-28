import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import rectangle from '../../Assets/rectangle.png'
import Icon from 'react-native-vector-icons/Ionicons'


const RoundIcon = ({ icon, _style, screen }) => {
    return (
        <View style={styles.container}>
            <Image
                source={rectangle}
                // style={styles.}
                resizeMode='cover'
            />
            <View style={styles.logo}>
                {screen === 'location' ? 
                 <Icon name={'location-outline'} size={85} />
                 :
                 <Image source={icon} resizeMode='cover' style={{...styles.icon, ..._style}}/>
                }
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
    },
    icon:{
        // height:49,
        width:80
    }
})
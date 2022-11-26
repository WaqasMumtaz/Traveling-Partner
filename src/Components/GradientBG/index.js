import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Global from '../../Global';

const Gradient = ({ children, _style }) => {
    return (
        <LinearGradient
            // locations={[0, 0.5]}
            colors={[Global.gradient_1, Global.gradient_2]}
            style={{...styles.linearGradient, ..._style}}>
            {children}
        </LinearGradient>
    )
}

export default Gradient;

const styles = StyleSheet.create({
    linearGradient: {
        // padding: 10        
    }
})
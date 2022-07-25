import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Global from "../../Global";
import barIcon from '../../Assets/bar-icon.png';

export default function MainTopBar({ HeaderText }) {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <HeaderText/>
            </View>
            <View style={{ paddingTop:15 }}>
                <Image
                    source={barIcon}
                    style={styles.iconStyle}
                    resizeMode='contain'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:Global.main_color,
        paddingHorizontal:12
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
    },
    iconStyle: {
        height: 100,
        width: 100,
    },
   
})
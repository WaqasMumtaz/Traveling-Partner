import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Global from "../../Global";

export default function BackButton({ title , handleNavigation}) {
    return (
        <View style={{flexDirection:'row', marginHorizontal:8}}>
            <TouchableOpacity
                style={styles.btn_style}
                onPress={()=> handleNavigation()}
            >
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn_style: {
        flex:1,
        alignItems:'center',
    },
    title: {
        textTransform: 'uppercase',
        color:Global.main_color,
        fontSize:15,
        fontWeight:'600',
        textDecorationLine:'underline'
    }
})
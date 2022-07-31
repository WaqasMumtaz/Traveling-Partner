import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Global from "../../Global";
import { useNavigation } from "@react-navigation/native";

export default function MainButton({ title , handleNavigation}) {
  const navigation = useNavigation();

    return (
        <View style={{flexDirection:'row', marginHorizontal:8}}>
            <TouchableOpacity
                style={styles.btn_style}
                onPress={()=>  handleNavigation()}
            >
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn_style: {
        flex:1,
        backgroundColor: Global.btn_background,
        alignItems:'center',
        padding:12,
        borderRadius:22
    },
    title: {
        textTransform: 'uppercase',
        color:Global.white,
        fontSize:16,
        fontWeight:'600'
    }
})
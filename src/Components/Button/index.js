import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Global from "../../Global";
import { useNavigation } from "@react-navigation/native";
import Gradient from "../GradientBG";

export default function MainButton({ title , handleNavigation , btn_container_style, title_style}) {
  const navigation = useNavigation();

    return (
        //  <View style={{flexDirection:'row',backgroundColor:'red',flex:1}}>
        <Gradient _style={{...styles.btn_style, ...btn_container_style}}>
            <TouchableOpacity
                 style={{flex:1,alignItems:'center'}}
                onPress={()=> { handleNavigation ? handleNavigation() : console.log('Clicked Button') } }
            >
                <Text style={{...styles.title, ...title_style}} >{title}</Text>
            </TouchableOpacity>

        </Gradient>
        //  </View>
    )
}

const styles = StyleSheet.create({
    btn_style: {
      //  flex:1,
       // backgroundColor:'red',
        flexDirection:'row',
        // backgroundColor: Global.btn_background,
        //  alignItems:'center',
        //  justifyContent:'center',
         padding:12,
         borderRadius:22,
         //marginHorizontal:25
    },
    title: {
        // textTransform: 'uppercase',
        color:Global.white,
        fontSize:16,
        fontWeight:'600',
        color:Global.black_clr
    }
})
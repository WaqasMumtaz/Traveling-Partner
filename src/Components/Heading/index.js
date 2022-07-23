import React from "react";
import { Text , StyleSheet} from "react-native";

export default function Heading({ heading }){
 return(<Text style={[styles.mainHeading, { fontWeight:'600'}]}>{heading}</Text>)
}

const styles = StyleSheet.create({
    mainHeading:{
        color: '#000',
        fontSize: 30,
        // fontWeight:600
    },
})


import React from "react";
import { Text , StyleSheet} from "react-native";

export default function Paragraph({ para }){
 return(<Text style={styles.paragraphStyle}>{para}</Text>)
}

const styles = StyleSheet.create({
    paragraphStyle:{
        color: '#000',
        fontSize: 17,
        textAlign:'center'
    }
})


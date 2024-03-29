import React from "react";
import { Text , StyleSheet, View} from "react-native";

function Heading({ heading }){
 return(<Text style={[styles.mainHeading, { fontWeight:'700'}]}>{heading}</Text>)
}

function Heading3({ title }) {
 return(<View style={{margin:10}}><Text style={[styles.heading3, { fontWeight:'bold'}]}>{title}</Text></View>)
    
}
function Heading2({title}) {
 return(<Text style={styles.heading2}>{title}</Text>)
  
}

function Heading4({ title }) {
 return(<Text style={[styles.heading4, { fontWeight:'bold'}]}>{title}</Text>)
    
}

export {
    Heading,
    Heading3,
    Heading4,
    Heading2
}

const styles = StyleSheet.create({
    mainHeading:{
        color: '#000',
        fontSize: 25,
        // fontWeight:600
    },
    heading3:{
      fontSize:20,
      color: '#000',
    },
    heading4:{
        fontSize:13,
        color: '#000'
      },
    heading2:{
      fontSize:14,
      color: '#000',
      fontWeight:'500'
    }

})


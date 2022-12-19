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
 return(<View><Text style={[styles.heading4, { fontWeight:'400'}]}>{title}</Text></View>)
    
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
        fontSize: 30,
        // fontWeight:600
    },
    heading3:{
      fontSize:20,
      color: '#000',
    },
    heading4:{
        fontSize:12,
        color: '#000'
      },

})


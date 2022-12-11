import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Global from '../../Global'

const ListItem = ({title, des}) => {
    return (
        <View style={styles.banner}>
            <View>
                <Text style={styles.head}>{title}</Text>
            </View>
            <View style={{ marginTop: 5 }}>
                <Text>{des}</Text>
            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    banner:{
        flex:1,
        marginHorizontal:20,
        //borderWidth:1,
        borderBottomWidth:1,
        paddingVertical:10,
        borderBottomColor:Global.light_gray
    },
    head:{
        fontSize:13,
        color:Global.gray_color,
        fontWeight:'bold'
    }
})
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Global from '../../Global'

const LocationDetail = () => {
    return (
        <View style={styles.details}>
            {/* <Text>jdlakjfdlkal</Text> */}
            <View style={{ alignItems: 'center', width: 30 }}>
                <View style={[styles.dot, { backgroundColor: Global.green_clr }]} />
                <View style={[styles.line]} />
                <View style={[styles.dot, { backgroundColor: Global.main_color }]} />
            </View>
            <View style={{ flex: 1, height: 60, justifyContent: 'space-between' }}>
                <View>
                    <Text numberOfLines={1} ellipsizeMode='tail'>13 Sept, 2022 at 06:00 PM , Shaheen Complex , medical center blue area </Text>
                </View>
                <View>
                    <Text numberOfLines={1} ellipsizeMode='tail'>13 Sept, 2022 at 06:31 PM , Gulstan-e-Johar , Karachi University road</Text>
                </View>
            </View>
        </View>
    )
}

export default LocationDetail

const styles = StyleSheet.create({
    details: {
        marginVertical: 18,
        flexDirection: 'row',
        alignItems: 'center',
        // alignItems:'center'
        //backgroundColor: 'blue'
    },
    dot: {
        height: 12,
        width: 12,
        borderRadius: 12 / 2
    },
    line: {
        height: 30,
        width: 1,
        backgroundColor: Global.black_clr
        // borderColor:Global.gray_color
    }
})
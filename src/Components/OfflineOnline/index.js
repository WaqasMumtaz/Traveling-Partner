import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import Global from '../../Global'

const DataInfo = ({isEnabled, toggleSwitch}) => {
  return (
    <View style={[styles.offlineContainer, {marginHorizontal: 18}]}>
    <View style={{ flex: 1 }}>
        <Text>Your are offline!</Text>
        <Text style={{ marginTop: 5 }}>Go online to start accepting Rides.</Text>
    </View>
    <View>
        <Text>{isEnabled ? 'Offline' : 'Online' }</Text>
        <Switch
            trackColor={{ false: Global.black_clr, true: Global.main_color }}
            thumbColor={isEnabled ? Global.main_color : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ marginTop: 5 }}
        />
    </View>
</View>
  )
}

export default DataInfo

const styles = StyleSheet.create({
    offlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Global.inputs_clr,
        borderRadius: 7,
        padding: 13
    },
})
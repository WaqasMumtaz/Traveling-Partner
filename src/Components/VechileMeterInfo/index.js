import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Global from '../../Global'
import IonicIcon from 'react-native-vector-icons/Ionicons';

const VechileMeterInfo = () => {
  return (
    <View style={[styles.container, {marginHorizontal: 18, marginTop:10, justifyContent:'space-evenly'}]}>
    <View style={{alignItems:'center'}}>
      <IonicIcon name='time-outline' size={20} />
      <Text style={{fontWeight:'bold'}}>10.3</Text>
      <Text style={{color:Global.gray_color}}>Hours Online</Text>
    </View>
    <View style={{alignItems:'center'}}>
      <IonicIcon name='speedometer-outline' size={20} />
      <Text style={{fontWeight:'bold'}}>1000 KM</Text>
      <Text style={{color:Global.gray_color}}>Total Distance</Text>
    </View>
    <View style={{alignItems:'center'}}>
      <IonicIcon name='car-outline' size={20} />
      <Text style={{fontWeight:'bold'}}>20</Text>
      <Text style={{color:Global.gray_color}}>Total Rides</Text>
    </View>
  </View>
  )
}

export default VechileMeterInfo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Global.inputs_clr,
        borderRadius: 7,
        padding: 13
    },
})
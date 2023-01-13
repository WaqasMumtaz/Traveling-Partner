import React from 'react'
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PoolRide from '../Screens/PoolRide/Partner/DeliveryPool/PoolRide';
import PoolRides from '../Screens/PoolRide/Partner/DeliveryPool/PoolRides';
import PoolRideDetail from '../Screens/PoolRide/Partner/DeliveryPool/PoolRideDetail'

const Stack = createNativeStackNavigator();

const PartnerDeliveryPool = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
    <Stack.Screen name='PoolRide' component={PoolRide}/>
    <Stack.Screen name='Delivery PoolRides' component={PoolRides}/>
    <Stack.Screen name='Delivery PoolRides Detail' component={PoolRideDetail}/>

    </Stack.Navigator>
  )
}

const DriverDeliveryPool = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
      {/* <Stack.Screen name='PoolRide' component={PoolRide}/> */}
      </Stack.Navigator>
    )
  }

export default PartnerDeliveryPool;
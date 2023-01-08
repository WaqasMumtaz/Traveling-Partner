import React from 'react'
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Partner from '../Screens/PoolRide/Partner';

const Stack = createNativeStackNavigator();

const PartnerPoolRide = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
    <Stack.Screen name='PoolRide' component={Partner.PoolRide}/>
    </Stack.Navigator>
  )
}

export default PartnerPoolRide
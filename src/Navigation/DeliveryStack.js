import React from 'react'
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PoolRide from '../Screens/PoolRide/Partner/DeliveryPool/PoolRide';
import PoolRides from '../Screens/PoolRide/Partner/DeliveryPool/PoolRides';
import PoolRideDetail from '../Screens/PoolRide/Partner/DeliveryPool/PoolRideDetail'
import DeliveryPoolPartner from '../Screens/PoolRide/Partner/DeliveryPool/PoolPartner';
import DeliveryPickLocation from '../Screens/PoolRide/Partner/DeliveryPool/PickLocation';
import DeliveryPartnerDetail from '../Screens/PoolRide/Partner/DeliveryPool/PartnerDetail';
import DeliveryFoundRide from '../Screens/PoolRide/Partner/DeliveryPool/FoundRide';

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
    <Stack.Screen name='DeliveryPoolPartner' component={DeliveryPoolPartner}/>
    <Stack.Screen name='DeliveryPickLocation' component={DeliveryPickLocation} />
    <Stack.Screen name='DeliveryPartnerDetail' component={DeliveryPartnerDetail} />
    <Stack.Screen name='DeliveryFoundRide' component={DeliveryFoundRide} />
    </Stack.Navigator>
  )
}


export default PartnerDeliveryPool;
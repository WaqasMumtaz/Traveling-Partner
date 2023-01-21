import React from 'react'
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PoolRide from '../Screens/PoolRide/Driver';


const Stack = createNativeStackNavigator();

const DriverPoolRide = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Driver PoolRide' component={PoolRide.PoolRide} />
            <Stack.Screen name='Driver PoolRides' component={PoolRide.PoolRides} />
            <Stack.Screen name='Driver PoolRide Detail' component={PoolRide.PoolRideDetail} />
            <Stack.Screen name='Driver AddPoolRide' component={PoolRide.AddPoolRide} />
            <Stack.Screen name='Driver Detail' component={PoolRide.Driver} />
            <Stack.Screen name='Driver FoundRide' component={PoolRide.FoundRide}/>
            {/* Driver Delivery Screens */}
            <Stack.Screen name='DeliveryPoolRide' component={PoolRide.DeliveryPoolRide} />
            <Stack.Screen name='DeliveryPoolRides' component={PoolRide.DeliveryPoolRides} />
            <Stack.Screen name='DeliveryPoolRideDetail' component={PoolRide.DeliveryPoolRideDetail} />
            <Stack.Screen name='DeliveryAddPoolRide' component={PoolRide.DeliveryAddPoolRide} />
            <Stack.Screen name='DeliveryDriver' component={PoolRide.DeliveryDriver} />
            <Stack.Screen name='DeliveryFoundRide' component={PoolRide.DeliveryFoundRide}/>

        </Stack.Navigator>
    )
}


export default DriverPoolRide;
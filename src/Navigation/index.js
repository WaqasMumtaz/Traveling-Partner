// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreensSwiper from '../Components/Swiper';
import PartnerDeliveryPool from './DeliveryStack';

import DriverPoolRide from './DriverPoolRide';

import Screens from '../Screens';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Slider" component={ScreensSwiper} />
        <Stack.Screen name='Help' component={Screens.Help} />
        <Stack.Screen name='Chat' component={Screens.Chat} />
        <Stack.Screen name='Active Ride' component={Screens.ActiveRide}/>
        <Stack.Screen name="Enable Location" component={Screens.EnableLocation} />
        <Stack.Screen name="Driver Introduction" component={Screens.DriverIntroduction} />
        <Stack.Screen name="Partner Introduction" component={Screens.PartnerIntroduction} />
        <Stack.Screen name="SignUp" component={Screens.SignUp} />
        <Stack.Screen name='Driver Info' component={Screens.DriverBasicInfo}/>
        <Stack.Screen name='Partner Info' component={Screens.PartnerBasicInfo}/>
        <Stack.Screen name='Login' component={Screens.LoginWithMobile}/>
        <Stack.Screen name='SingUp' component={Screens.SignUpWithMobile}/>

        <Stack.Screen name='OTP Screen' component={Screens.OTPScreen}/>
        <Stack.Screen name='Home' component={Screens.Home}/>
        <Stack.Screen name='TaxiStand' component={Screens.TaxiStand} />
        <Stack.Screen name='Rides' component={Screens.Rides}/>
        <Stack.Screen name='RidesDetail' component={Screens.RidesDetail}/>
        <Stack.Screen name='BookTaxi' component={Screens.BookTaxi} />
        <Stack.Screen name='DriverLicenseInfo' component={Screens.DriverLicenseInfo} />
        <Stack.Screen name='VehicleInfo' component={Screens.VehicleInfo} />
        <Stack.Screen name='DriverTaxiStand' component={Screens.DriverTaxiStand} />
        <Stack.Screen name='DriverRides' component={Screens.DriverRides}/>
        <Stack.Screen name='DriverRidesDetal' component={Screens.DriverRidesDetail} />
        <Stack.Screen name='PoolRide' component={Screens.PoolRide} />
        <Stack.Screen name='PoolRides' component={Screens.PoolRides} />
        <Stack.Screen name='PoolRidesDetail' component={Screens.PoolRidesDetail} />
        <Stack.Screen name='PoolPartner' component={Screens.PoolPartner} />
        <Stack.Screen name='PartnerDetail' component={Screens.PartnerDetail} />
        <Stack.Screen name='PartnerPickLocation' component={Screens.PartnerPickLocation}/>
        <Stack.Screen name='FoundRide' component={Screens.FoundRide} />
        <Stack.Screen name='PartnerDeliveryPool' component={PartnerDeliveryPool} />
        <Stack.Screen name='DriverPoolRide' component={DriverPoolRide} />

      </Stack.Navigator>
  );
}

export default MainNavigation;
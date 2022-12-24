// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreensSwiper from '../Components/Swiper';

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
        <Stack.Screen name="Enable Location" component={Screens.EnableLocation} />
        <Stack.Screen name="Driver Introduction" component={Screens.DriverIntroduction} />
        <Stack.Screen name="Partner Introduction" component={Screens.PartnerIntroduction} />
        <Stack.Screen name="SignUp" component={Screens.SignUp} />
        <Stack.Screen name='Driver Info' component={Screens.DriverBasicInfo}/>
        <Stack.Screen name='Partner Info' component={Screens.PartnerBasicInfo}/>
        <Stack.Screen name='Mobile Phone' component={Screens.SignUpWithMobile}/>
        <Stack.Screen name='OTP Screen' component={Screens.OTPScreen}/>
        <Stack.Screen name='Home' component={Screens.Home}/>
        <Stack.Screen name='TaxiStand' component={Screens.TaxiStand} />
        <Stack.Screen name='Rides' component={Screens.Rides}/>
        <Stack.Screen name='RidesDetail' component={Screens.RidesDetail}/>
        <Stack.Screen name='BookTaxi' component={Screens.BookTaxi} />
      </Stack.Navigator>
  );
}

export default MainNavigation;
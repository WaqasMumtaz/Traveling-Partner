import React from "react";
import Swiper from "react-native-swiper";
import { StyleSheet, View } from "react-native";
import Screens from "../../Screens";

function ScreensSwiper({ screens }) {
    return(
    <Swiper style={styles.wrapper} >
       <Screens.AcceptRide/>
       <Screens.TrackingRealtime/>
       <Screens.EarnMoney/>
    </Swiper>
    )
}

export default ScreensSwiper;

const styles = StyleSheet.create({
    wrapper:{}
})
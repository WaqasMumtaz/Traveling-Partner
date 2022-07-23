import React from "react";
import Swiper from "react-native-swiper";
import { StyleSheet, View } from "react-native";
import Screens from "../../Screens";
import Global from "../../Global";

function ScreensSwiper() {
    return(
    <Swiper 
    style={styles.wrapper} 
    activeDotColor={Global.main_color}
    >
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
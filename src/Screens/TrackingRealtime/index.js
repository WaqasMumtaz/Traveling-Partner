import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Components from '../../Components';
import tracking_location from '../../Assets/tracking-location.png';
import Global from '../../Global';

function TrackingRealtime() {

    return (
        <>
            <SafeAreaView style={{ flex: 1 , backgroundColor:Global.white}}>
            <View style={styles.logo_container}>
                    <Components.LogoComponent src={tracking_location} />
                </View>
                <View style={styles.body}>
                    <Components.Heading heading='Tracking Realtime' />
                    <View style={{ marginTop:10}}>
                        <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default TrackingRealtime;

const styles = StyleSheet.create({
    logo_container: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal:20
    },
})
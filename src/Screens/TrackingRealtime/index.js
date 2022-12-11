import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Components from '../../Components';
import tracking_location from '../../Assets/tracking.png';
import Global from '../../Global';

function TrackingRealtime() {

    const handleSkip = () => {
        console.log('Skip')
    }

    return (
        <>
            <Components.TopLogo />
            <SafeAreaView style={{ flex: 1, backgroundColor: Global.white }}>
                <View style={styles.body}>
                    <View style={styles.body_1}>
                        <Components.RoundIcon icon={tracking_location} />
                        <Components.Heading heading='Tracking Realtime' />
                        <View style={{ marginTop: 10 }}>
                            <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                        </View>
                        <Components.SkipButton handleSkip={() => console.log('skip')} />
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

    },
    body: {
        flex: 1,
        marginTop: '35%',
        margin: 20,
    },
    body_1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    }
})
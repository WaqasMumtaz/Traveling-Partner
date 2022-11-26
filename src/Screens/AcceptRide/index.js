import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import accept_ride from '../../Assets/accept-ride.png';
import Components from '../../Components';
import Global from '../../Global';
import taxiIcon from '../../Assets/icon-taxi.png';

function AcceptRide() {

    const handleSkip = () => {
        console.log('Skip')
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Global.white }}>
            <View style={styles.body}>
                <View style={styles.body_1}>
                    <Components.RoundIcon icon={taxiIcon} />
                    <Components.Heading heading='Accept a Ride' />
                    <View style={{ marginTop: 10 }}>
                        <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                    </View>
                    <Components.SkipButton handleSkip={() => console.log('skip')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AcceptRide;

const styles = StyleSheet.create({
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
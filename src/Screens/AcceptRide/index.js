import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import accept_ride from '../../Assets/accept-ride.png';
import Components from '../../Components';
import Global from '../../Global';

function AcceptRide() {

    const handleSkip = () => {
        console.log('Skip')
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: Global.white }}>
                <View style={styles.logo_container}>
                    <Components.LogoComponent src={accept_ride} />
                </View>
                <View style={styles.body}>
                    <Components.Heading heading='Accept a Ride' />
                    <View style={{ marginTop: 10 }}>
                        <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                    </View>
                    <View style={{ marginTop: 80 }}>
                        <Components.SkipButton
                            title={'Skip'}
                            handleSkip={handleSkip}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default AcceptRide;

const styles = StyleSheet.create({
    logo_container: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 20
    },
})
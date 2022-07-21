import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';

function AcceptRide() {

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.slide}>
                    <Text style={styles.text}>Accept a Ride</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default AcceptRide;

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      }
})
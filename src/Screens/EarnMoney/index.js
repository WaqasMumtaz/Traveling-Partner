import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Components from '../../Components';
import earn_money from '../../Assets/earn-money.png';
import Global from '../../Global';
import { useNavigation, } from '@react-navigation/native';


function EarnMoney() {
    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate('Enable Location');
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Global.white }}>
            <View style={styles.body}>
                <View style={styles.body_1}>
                    <Components.RoundIcon icon={earn_money} />
                    <Components.Heading heading='Earn Money' />
                    <View style={{ marginTop: 10 }}>
                        <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                    </View>
                    <Components.SkipButton handleSkip={handleNavigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EarnMoney;

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
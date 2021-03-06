import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Components from '../../Components';
import earn_money from '../../Assets/earn-money.png';
import Global from '../../Global';
import { useNavigation, } from '@react-navigation/native';


function EarnMoney() {
    const navigation = useNavigation();

    const handleNavigation=()=>{
        navigation.navigate('Enable Location');
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1,backgroundColor: Global.white}}>
                <View style={styles.logo_container}>
                    <Components.LogoComponent src={earn_money} />
                </View>
                <View style={styles.body}>
                    <Components.Heading heading='Earn Money' />
                    <View style={{ marginTop: 10 }}>
                        <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                    </View>
                    <View style={{margin:15}}/>
                        <Components.MainButton
                            title='get started'
                            handleNavigation={handleNavigation}
                        />
                </View>
            </SafeAreaView>
        </>
    )
}

export default EarnMoney;

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
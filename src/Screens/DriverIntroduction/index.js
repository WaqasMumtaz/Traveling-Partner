import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Components from '../../Components';
import driver_intro from '../../Assets/driver-intro.png';
import Global from '../../Global';
import { useNavigation } from '@react-navigation/native';

function DriverIntroduction() {
    const navigation = useNavigation();

    const handleNavigation=()=>{
        navigation.navigate('Partner Introduction');
    }

    const handleBack=()=>{
        navigation.goBack()
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1,backgroundColor: Global.white}}>
                <View style={styles.logo_container}>
                    <Components.LogoComponent src={driver_intro} />
                </View>
                <View style={styles.body}>
                    <Components.Heading heading='Driver Introduction' />
                    <View style={{ marginTop: 10 }}>
                        <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                    </View>
                    <View style={{margin:15}}/>
                        <Components.MainButton
                            title='watch video'
                            handleNavigation={handleNavigation}
                        />
                     <View style={{margin:12}}/>
                    <Components.BackButton
                    title='Back'
                    handleNavigation={handleBack}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

export default DriverIntroduction;

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
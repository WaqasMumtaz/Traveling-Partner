import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import enable_location from '../../Assets/enable-location.png';
import Components from '../../Components';
import Global from '../../Global';
import { useNavigation } from '@react-navigation/native';

function EnableLocation() {
    const navigation = useNavigation();

    const handleNavigation=()=>{
        navigation.navigate('Driver Introduction');
    }

    const handleBack=()=>{
        navigation.goBack()
    }
    
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: Global.white }}>
                <View style={styles.logo_container}>
                    <Components.LogoComponent src={enable_location} />
                </View>
                <View style={styles.body}>
                    <Components.Heading heading='Enable Location' />
                    <View style={{ marginTop: 10 }}>
                        <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                    </View>
                    <View style={{ margin: 15 }} />
                    <Components.MainButton
                        title='use my location'
                        handleNavigation={handleNavigation}
                    />
                     <View style={{ marginTop: 20 }}>
                        <Components.SkipButton
                            title={'Skip for now'}
                            handleSkip={handleNavigation}
                        />
                    </View>
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

export default EnableLocation;

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
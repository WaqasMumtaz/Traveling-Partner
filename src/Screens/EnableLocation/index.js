import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import enable_location from '../../Assets/location.png';
import Components from '../../Components';
import Global from '../../Global';
import { useNavigation } from '@react-navigation/native';

function EnableLocation() {
    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate('Driver Introduction');
    }

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: Global.white }}>
                <View style={styles.body}>
                    <Components.RoundIcon icon={enable_location} />
                    <Components.Heading heading='Enable Location' />
                    <View style={{ marginTop: 10 }}>
                        <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                    </View>
                    <View style={{ margin: 15 }} />
                    <Components.MainButton
                        title='Use My Location'
                        handleNavigation={handleNavigation}
                        btn_container_style={{flex:0, backgroundColor:'transparent', borderRadius:0}}
                        title_style={{color:Global.black_clr,textDecorationLine:'underline'}}
                    />
                    <Components.SkipButton
                        handleSkip={handleNavigation}
                    />

                    {/* <View style={{margin:12}}/>
                    <Components.BackButton
                    title='Back'
                    handleNavigation={handleBack}
                    /> */}
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

    },
    body: {
        flex: 1,
        marginTop:'20%',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
    },
})
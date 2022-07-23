import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Components from '../../Components';
import partner_intro from '../../Assets/partner-intro.png';
import Global from '../../Global';
import { useNavigation } from '@react-navigation/native';

function PartnerIntroduction() {

    const navigation = useNavigation();

    const handleNavigation = () => {
        alert('Other work still pending , Thanks');
    }

    const handleBack=()=>{
        navigation.goBack()
    }


    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: Global.white }}>
                <View style={styles.logo_container}>
                    <Components.LogoComponent src={partner_intro} />
                </View>
                <View style={styles.body}>
                    <Components.Heading heading='Partner Introduction' />
                    <View style={{ marginTop: 10 }}>
                        <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                    </View>
                    <View style={{ margin: 15 }} />
                    <Components.MainButton
                        title='get started'
                        handleNavigation={handleNavigation}
                    />
                    <View style={{ margin: 12 }} />
                    <Components.BackButton
                        title='Back'
                        handleNavigation={handleBack}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

export default PartnerIntroduction;

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
import React from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import Components from '../../../../Components'
import { useNavigation } from '@react-navigation/native'

const PoolRide = () => {
    let navigation = useNavigation();
    
    function handleRequest(params) {
         navigation.navigate('Delivery PoolRides');
    }

    return (
        <>
            <Components.MainComponent>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Components.Heading3 title={'Pool Ride'} />
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 20 }}>
                        <Components.MainButton
                            title='New Request'
                            btn_container_style={{ width: 150 }}
                            handleNavigation={handleRequest}
                        />
                        <TouchableOpacity>
                            <Text style={{ textDecorationLine: 'underline' }}>Make Ride Plan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, marginTop: 20 }}>
                        <Components.MapLogo />
                    </View>
                    <View style={{ flex: 1, margin:15 }}>
                            <Components.AdBanner />
                        </View>
                </ScrollView>
            </Components.MainComponent>
        </>
    )
}

export default PoolRide

const styles = StyleSheet.create({})
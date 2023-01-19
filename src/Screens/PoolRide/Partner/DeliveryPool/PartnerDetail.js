import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import Components from '../../../../Components'
import Global from '../../../../Global'
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const DeliveryPartnerDetail = () => {
    const [selectedValue, setSelectedValue] = useState('In-City');

    const navigation = useNavigation();

    const [authObj, setAuthObj] = useState({
        date: '',
        time: '',
        stuff: '',
        pic_up_location: '',
        drop_off_location: '',
        fare: ''
    })

    const [errorObj, setErrorObj] = useState({
        date: '',
        time: '',
        stuff: '',
        pic_up_location: '',
        drop_off_location: '',
        fare: ''
    })

    function hanldeClick(params) {
        setSelectedValue(params)
    }

    function handleChange(name, value) {
        setAuthObj({
            ...authObj,
            [name]: value
        })
    }

    return (
        <>
            <Components.TopLogo />
            <SafeAreaView style={styles.container}>
                {/* <Components.MainTopBar /> */}
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Components.Heading3 title={'Partner'} />
                    </View>
                    <View style={{ margin: 15 }}>
                        <Components.Toggle
                            title_1={'In-City'}
                            title_2={'Out-City'}
                            selectedValue={selectedValue}
                            hanldeClick={hanldeClick}
                        />

                                <Components.InputButton title={'Date'} />
                                <Components.InputButton title={'Time'} />
                                <View style={{ margin: 10 }} />
                                <Components.InputText
                                    placeholder="Stuff"
                                    name={'stuff'}
                                    handleChange={(name, value) => handleChange(name, value)}
                                    value={authObj.stuff}
                                />
                                {errorObj.stuff ? (
                                    <Text style={styles.error}>{errorObj.stuff}</Text>
                                ) : (
                                    null
                                )}
                                <View style={{ margin: 10 }} />
                                <Components.InputText
                                    placeholder="Pick Up Location"
                                    name={'pic_up_location'}
                                    handleChange={(name, value) => handleChange(name, value)}
                                    value={authObj.pic_up_location}
                                />
                                {errorObj.pic_up_location ? (
                                    <Text style={styles.error}>{errorObj.pic_up_location}</Text>
                                ) : (
                                    null
                                )}
                                <ScrollView
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    horizontal={true}
                                >

                                </ScrollView>
                                <View style={{ margin: 10 }} />
                                <Components.InputText
                                    placeholder="Drop Off Location"
                                    name={'drop_off_location'}
                                    handleChange={(name, value) => handleChange(name, value)}
                                    value={authObj.drop_off_location}
                                />
                                {errorObj.drop_off_location ? (
                                    <Text style={styles.error}>{errorObj.drop_off_location}</Text>
                                ) : (
                                    null
                                )}
                                <View style={{ margin: 10 }} />
                                <Components.InputText
                                    placeholder="Fare"
                                    name={'fare'}
                                    handleChange={(name, value) => handleChange(name, value)}
                                    value={authObj.fare}
                                />
                                {errorObj.fare ? (
                                    <Text style={styles.error}>{errorObj.fare}</Text>
                                ) : (
                                    null
                                )}
                    </View>


                    <View style={{ margin: 15 }}>
                        <Components.BackButton title={'Back'} />
                        <View style={{ margin: 15 }} />
                        <Components.MainButton
                            title={'Sent'}
                            handleNavigation={() => navigation.navigate('DeliveryFoundRide')}
                        />
                        <View style={{ margin: 15 }} />
                        <Components.AdBanner />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default DeliveryPartnerDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    details: {
        marginVertical: 18,
        flexDirection: 'row',
        //alignItems: 'center',
        // alignItems:'center'
        //backgroundColor: 'blue'
    },
    dot: {
        height: 12,
        width: 12,
        borderRadius: 12 / 2
    },
    line: {
        height: 50,
        width: 1,
        backgroundColor: Global.black_clr
        // borderColor:Global.gray_color
    },
})
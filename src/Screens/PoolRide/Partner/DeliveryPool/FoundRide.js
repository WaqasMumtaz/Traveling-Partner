import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import Components from '../../../../Components'
import Global from '../../../../Global'
import user_2 from '../../../../Assets/pool_user.png';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DeliveryFoundRide = () => {
    const [selectedValue, setSelectedValue] = useState('In-City');
    const navigation = useNavigation();

    const [riderData, setRiderData] = useState({
        id: 1,
        user: {
            name: 'Sohail Anwar',
            photo: user_2,
            age: 24,
            stars: 4,
            status: 'Partner Plan'
        },
        vehicle: {
            name: 'Toyota Corrola',
            number: "LHR-333",
            model: '2012',
            color: 'Silver',
            conditioner: 'None-AC'
        }
    })

    const [authObj, setAuthObj] = useState({
        address: '',
        date: '',
        time: '',
        gender: '',
    })

    const [errorObj, setErrorObj] = useState({
        address: '',
        date: '',
        time: '',
        gender: '',
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
                        <Components.NoRecord />

                        <View style={styles.btns}>
                            <Components.Gradient _style={styles.btn_container_style}>
                                <TouchableOpacity
                                    //  onPress={() => navigation.navigate('PoolRidesDetail')}
                                    style={[styles.btn, {flex:1}]}>
                                    <Text style={{ fontSize: 14 }}>Add Pool Ride</Text>
                                </TouchableOpacity>
                            </Components.Gradient>

                            <TouchableOpacity 
                            //  onPress={()=> navigation.navigate('PartnerDeliveryPool')}
                             style={[styles.btn, {width:160, backgroundColor:Global.inputs_clr, borderRadius: 100,height:45}]}
                            >
                                <Text style={{fontSize: 14}}>Delivery</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={{ margin: 15 }}>
                        <Components.BackButton title={'Back'} />
                        <View style={{ margin: 15 }} />
                        <Components.MainButton
                            title={'Next'}
                        //   handleNavigation={()=> navigation.navigate('PartnerDetail')}
                        />
                        <View style={{ margin: 15 }} />
                        <Components.AdBanner />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default DeliveryFoundRide;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btns: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // backgroundColor: 'red',
        marginTop: 5
    },
    btn_container_style: {
        // flex:1,
        borderRadius: 100,
        height: 45
    },
    btn:{
       // flex: 1,
        //  backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
    }
})
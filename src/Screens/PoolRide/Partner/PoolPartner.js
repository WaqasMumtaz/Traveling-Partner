import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import Components from '../../../Components'
import Global from '../../../Global'
import user_2 from '../../../Assets/pool_user.png';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PoolPartner = () => {
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
                        <Components.Toggle
                            title_1={'In-City'}
                            title_2={'Out-City'}
                            selectedValue={selectedValue}
                            hanldeClick={hanldeClick}
                        />
                        <View style={{ margin: 10 }} />
                        <Components.InputText
                            placeholder="Where to go?"
                            name={'address'}
                            handleChange={(name, value) => handleChange(name, value)}
                            value={authObj.address}
                        />
                        {errorObj.address ? (
                            <Text style={styles.error}>{errorObj.address}</Text>
                        ) : (
                            null
                        )}
                        <Components.InputButton title={'Select Date'} />
                        <Components.InputButton title={'Select Time'} />
                        <Components.InputButton title={'Female Only'} />
                    </View>
                    <View style={{ flex: 1, marginTop: 15 }}>
                        <Components.MapLogo />
                    </View>
                    <View style={{ margin: 15 }}>
                        <Components.BackButton title={'Back'} />
                        <View style={{ margin: 15, alignItems: "center" }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Your Next Ride</Text>
                        </View>
                        <View style={{ margin: 5 }} />
                        <RiderCard item={riderData} />
                        <View style={{ margin: 15 }} />
                        <Components.MainButton 
                          title={'Next'} 
                          handleNavigation={()=> navigation.navigate('PartnerDetail')}
                        />
                        <View style={{ margin: 15 }} />
                        <Components.AdBanner />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default PoolPartner;

const RiderCard = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.profile}>
                <View style={styles.logoStyle}>
                    <Image source={item.user.photo} resizeMode='contain' style={{ height: '100%', width: '100%', borderRadius: 100 }} />
                </View>
                <View style={{ flex: 1, marginLeft: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <Text style={{ fontWeight: '700' }}>{item.user.name}</Text>
                            <IonicIcon name='checkmark-circle' size={18} color={Global.green} style={{ marginLeft: 10 }} />
                        </View>
                        {item.user.stars == 5 ?
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <IonicIcon name='star' size={15} color={Global.main_color} />
                                <IonicIcon name='star' size={15} color={Global.main_color} />
                                <IonicIcon name='star' size={15} color={Global.main_color} />
                                <IonicIcon name='star' size={15} color={Global.main_color} />
                                <IonicIcon name='star' size={15} color={Global.main_color} />
                            </View>
                            : item.user.stars == 4 ?
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <IonicIcon name='star' size={15} color={Global.main_color} />
                                    <IonicIcon name='star' size={15} color={Global.main_color} />
                                    <IonicIcon name='star' size={15} color={Global.main_color} />
                                    <IonicIcon name='star' size={15} color={Global.main_color} />
                                </View>
                                : item.user.stars == 3 ?
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <IonicIcon name='star' size={15} color={Global.main_color} />
                                        <IonicIcon name='star' size={15} color={Global.main_color} />
                                        <IonicIcon name='star' size={15} color={Global.main_color} />
                                    </View>
                                    : item.user.stars == 2 ?
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <IonicIcon name='star' size={15} color={Global.main_color} />
                                            <IonicIcon name='star' size={15} color={Global.main_color} />
                                        </View>
                                        :
                                        <IonicIcon name='star' size={15} color={Global.main_color} />
                        }
                    </View>
                </View>
            </View>
            <View style={styles.details}>
                {/* <Text>jdlakjfdlkal</Text> */}
                <View style={{ alignItems: 'center', width: 30 }}>
                    <View style={[styles.dot, { backgroundColor: Global.green_clr }]} />
                    <View style={[styles.line]} />
                    <View style={[styles.dot, { backgroundColor: Global.main_color }]} />
                </View>
                <View style={{ flex: 1, height: 60, justifyContent: 'space-between' }}>
                    <View>
                        <Text numberOfLines={1} ellipsizeMode='tail'>13 Sept, 2022 at 06:00 PM , Shaheen Complex , medical center blue area </Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} ellipsizeMode='tail'>13 Sept, 2022 at 06:31 PM , Gulstan-e-Johar , Karachi University road</Text>
                    </View>
                </View>
            </View>
            <View style={styles.btns}>
                <Components.Gradient _style={styles.btn_container_style}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('PoolRidesDetail')}
                        style={{
                            flex: 1,
                            //  backgroundColor: 'red',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 25,

                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Chat</Text>
                    </TouchableOpacity>
                </Components.Gradient>
                <TouchableOpacity style={{}}>
                    <Text style={{ textDecorationLine: 'underline', fontWeight:'600'}}>View Detail</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        flex: 1,
        //height: 160,
        // width:'100%',
        borderRadius: 15,
        padding: 10,
        borderColor: Global.gray_color,
        borderWidth: 0.3,
        backgroundColor: Global.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 3
    },
    logoStyle: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btns: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // backgroundColor: 'red',
        marginTop: 5
    },
    msgsBtn: {
        height: 45,
        width: 45,
        borderRadius: 45 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_container_style: {
        // flex:1,
        borderRadius: 20,
        height: 45
    },
    details: {
        marginVertical: 18,
        flexDirection: 'row',
        alignItems: 'center',
        // alignItems:'center'
        //backgroundColor: 'blue'
    },
    dot: {
        height: 12,
        width: 12,
        borderRadius: 12 / 2
    },
    line: {
        height: 30,
        width: 1,
        backgroundColor: Global.black_clr
        // borderColor:Global.gray_color
    },
    status: {
        marginTop: 7,
        width: 120,
        padding: 3,
        paddingHorizontal: 10,
        backgroundColor: Global.green,
        borderRadius: 10,
        alignItems: 'center'
    }
})
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import Components from '../../../../Components';
import user_1 from '../../../../Assets/pool_user.png';
import Global from '../../../../Global';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
// import map_img from '../../Assets/map.png';


const PoolRideDetail = () => {
    let navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [ride, setRide] = useState({
        confirm: false,
        reject: false
    });

    const [riderDetail, setRiderDetail] = useState({
        user: {
            name: 'Sohail Anwar',
            photo: user_1,
            age: 24,
            stars: 4
        },
        vehicle: {
            name: 'Toyota Corrola',
            number: "LHR-333",
            model: '2012',
            color: 'Silver',
            conditioner: 'None-AC'
        }
    });

    function closeModal() {
        setModalVisible(false)
    }

    function handleRide(params) {
        setModalVisible(true);
        //alert(params)
        if (params === 'confirm') {
            navigation.navigate('PoolPartner')
            setRide({
                confirm: true,
                reject: false
            })
        }
        else {
            setRide({
                confirm: false,
                reject: true
            })
        }
    }

    return (
        <Components.MainComponent>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Components.Heading3 title={'Pool Rides Detail'} />
                    </View>
                    <View style={[styles.riderContainer, { marginHorizontal: 18 }]}>
                        <View style={styles.logoStyle}>
                            <Image source={riderDetail.user.photo} resizeMode='contain' style={{ height: '100%', width: '100%', borderRadius:100 }} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Text>{riderDetail.user.name}</Text>
                                    <IonicIcon name='checkmark-circle' size={15} color='green' />
                                </View>
                                {riderDetail.user.stars == 5 ?
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <IonicIcon name='star' size={15} color={Global.main_color} />
                                        <IonicIcon name='star' size={15} color={Global.main_color} />
                                        <IonicIcon name='star' size={15} color={Global.main_color} />
                                        <IonicIcon name='star' size={15} color={Global.main_color} />
                                        <IonicIcon name='star' size={15} color={Global.main_color} />
                                    </View>
                                    : riderDetail.user.stars == 4 ?
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <IonicIcon name='star' size={15} color={Global.main_color} />
                                            <IonicIcon name='star' size={15} color={Global.main_color} />
                                            <IonicIcon name='star' size={15} color={Global.main_color} />
                                            <IonicIcon name='star' size={15} color={Global.main_color} />
                                        </View>
                                        : riderDetail.user.stars == 3 ?
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <IonicIcon name='star' size={15} color={Global.main_color} />
                                                <IonicIcon name='star' size={15} color={Global.main_color} />
                                                <IonicIcon name='star' size={15} color={Global.main_color} />
                                            </View>
                                            : riderDetail.user.stars == 2 ?
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <IonicIcon name='star' size={15} color={Global.main_color} />
                                                    <IonicIcon name='star' size={15} color={Global.main_color} />
                                                </View>
                                                :
                                                <IonicIcon name='star' size={15} color={Global.main_color} />
                                }
                            </View>
                            <Text>Karachi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text>Pets: Cat / Lagguage : 1</Text>
                                <Text>Fare: 240 Rs.</Text>
                            </View>

                        </View>
                    </View>
                    <Components.LocationDetail/>
                    {/* <View style={[styles.details, { marginHorizontal: 18 }]}>
                        <View style={{ alignItems: 'center', width: 30 }}>
                            <View style={[styles.dot, { backgroundColor: Global.green_clr }]} />
                            <View style={[styles.line]} />
                            <View style={[styles.dot, { backgroundColor: Global.main_color }]} />
                        </View>
                        <View style={{ flex: 1, height: 60, justifyContent: 'space-between'}}>
                            <View>
                                <Text numberOfLines={1} ellipsizeMode='tail'>13 Sept, 2022 at 06:00 PM , Shaheen Complex , medical center blue area </Text>
                            </View>
                            <View>
                                <Text numberOfLines={1} ellipsizeMode='tail'>13 Sept, 2022 at 06:31 PM , Gulstan-e-Johar , Karachi University road</Text>
                            </View>
                        </View>
                    </View> */}
                    <View style={[styles.btns, { marginHorizontal: 18 }]}>
                        <TouchableOpacity style={[styles.msgsBtn, { backgroundColor: Global.green_clr }]}>
                            <IonicIcon name="logo-whatsapp" size={28} />
                        </TouchableOpacity>
                        <Components.Gradient _style={styles.msgsBtn}>
                            <TouchableOpacity>
                                <IonicIcon name="chatbubble-ellipses-outline" size={28} />
                            </TouchableOpacity>
                        </Components.Gradient>
                        <Components.Gradient _style={styles.msgsBtn}>
                            <TouchableOpacity>
                                <IonicIcon name="call-outline" size={28} />
                            </TouchableOpacity>
                        </Components.Gradient>

                        <View
                            style={{
                                //flex: 1,
                                //  backgroundColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 25,

                            }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>5 Persons Available</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Components.MapLogo/>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 20 }}>
                        <Components.Gradient _style={styles.btn}>
                            <TouchableOpacity
                                onPress={() => handleRide('confirm')}
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Text style={{ fontWeight: 'bold' }}>Confirm</Text>
                            </TouchableOpacity>
                        </Components.Gradient>
                        <TouchableOpacity
                            onPress={() => handleRide('reject')}
                            style={[styles.btn, { backgroundColor: Global.inputs_clr, alignItems: 'center', justifyContent: 'center' }]}
                        >
                            <Text style={{ fontWeight: 'bold' }}>Reject</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ margin: 18 }}>
                        <Components.AdBanner />
                    </View>
                </View>
            </ScrollView>
            <Components.AlertModal
                modalVisible={modalVisible}
                closeModal={closeModal}
            >
                <View style={{ alignItems: 'center', paddingBottom: 30 }}>
                    {ride.confirm &&
                        <>
                            <View style={[styles.icons, { backgroundColor: Global.light_green }]}>
                                <IonicIcon name='checkmark' size={30} color={Global.green_clr} />
                            </View>
                            <View style={{ margin: 15 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>You have successfully confirm your ride</Text>
                            </View>
                        </>
                    }
                    {ride.reject && <>
                        <View style={[styles.icons, { backgroundColor: Global.light_red, opacity:0.3 }]}>
                            <IonicIcon name='checkmark' size={30} color='red' />
                        </View>
                        <View style={{ margin: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>You have reject your ride</Text>
                        </View>
                    </>
                    }
                </View>
            </Components.AlertModal>
        </Components.MainComponent>
    )
}

export default PoolRideDetail

const styles = StyleSheet.create({
    riderContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    warnsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    instructions: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    borderLine: {
        borderBottomColor: Global.borderLine,
        borderBottomWidth: 1.3,
        marginVertical: 20
    },
    logoStyle: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2
    },
    icons: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rectangleLine: {
        //height: 408,
        width: 7,
        // borderLeftWidth:2,
        // borderLeftColor:'red',
        position: 'absolute',
        zIndex: 99,
        bottom: 27,
        // top: '50%',
        left: '30%',
    },
    icons2: {
        height: '50%',
        width: '50%'
    },
    textStyle: {
        marginLeft: 15,
        flex: 1,
        // alignItems:'center'
    },
    btns: {
        //flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    mapStyle: {
        width: '100%',
        height: 250,
    },
    btn: {
        borderRadius: 100,
        width: '40%',
        height: 50
    }

})
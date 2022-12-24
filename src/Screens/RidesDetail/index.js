import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import Components from '../../Components'
import user_1 from '../../Assets/user_1.png';
import Global from '../../Global';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import pets from '../../Assets/pets.png';
import specified from '../../Assets/specified.png';
import smoking from '../../Assets/smoking.png';
import line from '../../Assets/rectangleLine.png';
import driver from '../../Assets/Icons/man.png';
import taxi from '../../Assets/local_taxi.png';
import belongings from '../../Assets/belongings.png';
import sanitizer from '../../Assets/sanitizer.png';
import { useNavigation } from '@react-navigation/native';


const RidesDetail = () => {
    let navigation = useNavigation();

    const [riderDetail, setRiderDetail] = useState({
        user: {
            name: 'Shahid Zaman',
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

    return (
        <Components.MainComponent>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, marginHorizontal: 18 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Components.Heading3 title={'Rides Detail'} />
                    </View>
                    <View style={styles.riderContainer}>
                        <View style={styles.logoStyle}>
                            <Image source={riderDetail.user.photo} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
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
                            <Text>{riderDetail.vehicle.name}</Text>
                            <Text>{`${riderDetail.vehicle.number} | ${riderDetail.vehicle.model} | ${riderDetail.vehicle.color} | ${riderDetail.vehicle.conditioner}`}</Text>
                        </View>
                    </View>
                    <View style={styles.borderLine} />
                    <View style={styles.warnsContainer}>
                        <View style={{ alignItems: 'center', position: 'relative' }}>
                            {/* <View style={styles.rectangleLine} /> */}
                            {/* <Image source={line} style={styles.rectangleLine} resizeMode='cover'/> */}
                            <View style={[styles.icons, { backgroundColor: Global.light_pink, }]}>
                                <Image source={pets} resizeMode='contain' style={{ height: '50%', width: '50%' }} />
                            </View>
                            <Text>Pets</Text>
                            <Text>Not Allowed</Text>
                        </View>
                        <View style={{ alignItems: 'center', position: 'relative' }}>
                            {/* <View style={styles.rectangleLine} /> */}
                            {/* <Image source={line} style={styles.rectangleLine} resizeMode='cover'/> */}
                            <View style={[styles.icons, { backgroundColor: Global.light_green }]}>
                                <Image source={specified} resizeMode='contain' style={{ height: '50%', width: '50%' }} />
                            </View>
                            <Text>Not</Text>
                            <Text>Specified</Text>
                        </View>
                        <View style={{ alignItems: 'center', position: 'relative' }}>
                            {/* <View style={styles.rectangleLine} /> */}
                            {/* <Image source={line} style={styles.rectangleLine} resizeMode='cover'/> */}
                            <View style={[styles.icons, { backgroundColor: Global.brown_clr }]}>
                                <Image source={smoking} resizeMode='contain' style={{ height: '50%', width: '50%' }} />
                            </View>
                            <Text>Smoking</Text>
                            <Text>Not Allowed</Text>
                        </View>
                    </View>
                    <View style={styles.borderLine} />
                    <View style={styles.instructions}>
                        <Components.Gradient _style={styles.icons}>
                            <Image source={driver} style={styles.icons2} resizeMode='contain' />
                        </Components.Gradient>
                        <View style={styles.textStyle}>
                            <Text>Verify Driver Details and profile Picture</Text>
                        </View>
                    </View>
                    <View style={styles.borderLine} />
                    <View style={styles.instructions}>
                        <Components.Gradient _style={styles.icons}>
                            <Image source={taxi} style={styles.icons2} resizeMode='contain' />
                        </Components.Gradient>
                        <View style={styles.textStyle}>
                            <Text>Verify Vehicle Details</Text>
                        </View>
                    </View>
                    <View style={styles.borderLine} />
                    <View style={styles.instructions}>
                        <Components.Gradient _style={styles.icons}>
                            <Image source={belongings} style={styles.icons2} resizeMode='contain' />
                        </Components.Gradient>
                        <View style={styles.textStyle}>
                            <Text>Don’t forget your belongings before leaving the car</Text>
                        </View>
                    </View>
                    <View style={styles.borderLine} />
                    <View style={styles.instructions}>
                        <Components.Gradient _style={styles.icons}>
                            <Image source={sanitizer} style={styles.icons2} resizeMode='contain' />
                        </Components.Gradient>
                        <View style={styles.textStyle}>
                            <Text>Sanitize your hands & wear Mask</Text>
                        </View>
                    </View>
                    <View style={styles.btns}>
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
                        <Components.Gradient _style={styles.btn_container_style}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('BookTaxi')}
                                style={{
                                    flex: 1,
                                    //  backgroundColor: 'red',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 25,

                                }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Request Ride</Text>
                            </TouchableOpacity>
                        </Components.Gradient>
                    </View>
                    <View style={{ marginVertical: 18 }}>
                        <Components.AdBanner />
                    </View>
                </View>
            </ScrollView>
        </Components.MainComponent>
    )
}

export default RidesDetail

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
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        marginTop: 15
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
    }


})
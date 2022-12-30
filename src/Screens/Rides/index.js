import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import Components from '../../Components'
import Global from '../../Global'
import user_1 from '../../Assets/user_1.png';
import user_2 from '../../Assets/user_2.png';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Rides = () => {
    let navigation = useNavigation();

    let DATA = [
        {
            id: 1,
            user: {
                name: 'Shahid Zaman',
                photo: user_2,
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
        },
        {
            id: 2,
            user: {
                name: 'Nadeem Zaman',
                photo: user_1,
                age: 24,
                stars: 5
            },
            vehicle: {
                name: 'Toyota Aqua',
                number: "BKA-265",
                model: '2014',
                color: 'Gray',
                conditioner: 'AC'
            }
        }

    ]

    const renderItem = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.profile}>
                    <View style={styles.logoStyle}>
                        <Image source={item.user.photo} resizeMode='contain' style={{ height: '100%', width: '100%' }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                <Text>{item.user.name}</Text>
                                <IonicIcon name='checkmark-circle' size={15} color='green' />
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
                        <Text>{item.vehicle.name}</Text>
                        <Text>{`${item.vehicle.number} | ${item.vehicle.model} | ${item.vehicle.color} | ${item.vehicle.conditioner}`}</Text>
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
                        onPress={()=> navigation.navigate('TaxiStand')}
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
            </View >
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Components.TopLogo />
            <View style={styles.body}>
                <View style={styles.body_child}>
                        <View style={{ alignItems: 'center' }}>
                            <Components.Heading3 title={'Rides'} />
                        </View>
                    <View style={{ flex: 1, marginHorizontal: 12,marginBottom:13 }}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
                            ListFooterComponent={()=> <View style={{marginTop:12}}><Components.AdBanner /></View> }
                        />
                    </View>
                </View>
            </View>
            <Components.BottomTabs />
        </SafeAreaView>
    )
}

export default Rides

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body_child: {
        flex: 1,
        backgroundColor: Global.white,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    body: {
        flex: 1,
        backgroundColor: Global.main_color,
    },
    cardContainer: {
        flex: 1,
        height: 160,
        // width:'100%',
        borderRadius: 15,
        padding: 10,
        borderColor: Global.gray_color,
        borderWidth: 1,
        backgroundColor: Global.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
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
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        marginTop: 10
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
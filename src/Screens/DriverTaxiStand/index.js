import React, { useState } from 'react'
import { StyleSheet, Text, Switch, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import Components from '../../Components'
import Global from '../../Global'
import location from '../../Assets/Icons/location.png'
import driver from '../../Assets/Icons/man.png';
import map_img from '../../Assets/map.png';
import { useNavigation } from "@react-navigation/native";
import IonicIcon from 'react-native-vector-icons/Ionicons';


const DriverTaxiStand = () => {
    let navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    function handleChange(name, value) {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleRides() {
        navigation.navigate('DriverRides');
    }

    return (
        <Components.MainComponent>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <View style={{ alignItems: 'center' }}>
                    <Components.Heading3 title={'Taxi Stands'} />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={[styles.offlineContainer, {marginHorizontal: 18}]}>
                        <View style={{ flex: 1 }}>
                            <Text>Your are offline!</Text>
                            <Text style={{ marginTop: 5 }}>Go online to start accepting Rides.</Text>
                        </View>
                        <View>
                            <Text>Offline</Text>
                            <Switch
                                trackColor={{ false: Global.black_clr, true: Global.main_color }}
                                thumbColor={isEnabled ? Global.main_color : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                style={{ marginTop: 5 }}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' , marginTop:20 }}>
                        <Components.Gradient _style={{borderRadius:100, height:55}}>
                            <TouchableOpacity style={styles.commingRidesBtn} onPress={handleRides}>
                                <Text>Comming Rides</Text>
                            </TouchableOpacity>
                        </Components.Gradient>
                    </View>
                    <View style={{ flex: 1, marginTop:10 }}>
                            <Image
                             source={map_img}
                             style={styles.mapStyle}
                             resizeMode='cover'
                            />
                        </View>
                        <View style={{ flex: 1 , marginVertical:15}}>
                            <Components.Banner />
                        </View>
                        <View style={[styles.offlineContainer, {marginHorizontal: 18, marginTop:10, justifyContent:'space-evenly'}]}>
                          <View style={{alignItems:'center'}}>
                            <IonicIcon name='time-outline' size={20} />
                            <Text style={{fontWeight:'bold'}}>10.3</Text>
                            <Text style={{color:Global.gray_color}}>Hours Online</Text>
                          </View>
                          <View style={{alignItems:'center'}}>
                            <IonicIcon name='speedometer-outline' size={20} />
                            <Text style={{fontWeight:'bold'}}>1000 KM</Text>
                            <Text style={{color:Global.gray_color}}>Total Distance</Text>
                          </View>
                          <View style={{alignItems:'center'}}>
                            <IonicIcon name='car-outline' size={20} />
                            <Text style={{fontWeight:'bold'}}>20</Text>
                            <Text style={{color:Global.gray_color}}>Total Rides</Text>
                          </View>
                        </View>
                        <View style={{ flex: 1, margin:15 }}>
                            <Components.AdBanner />
                        </View>
                </View>
            </ScrollView>
        </Components.MainComponent>
    )
}

export default DriverTaxiStand

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.white
    },
    dropdown_inner_style: {
        backgroundColor: Global.inputs_clr,
        borderColor: Global.inputs_clr,
        borderLeftWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        //     borderRightWidth:3,
        //    borderRightColor:'red',
        width: '86%'
    },
    btn: {
        height: 50,
        // width:100,
        flex: 0.48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Global.inputs_clr,
        backgroundColor: Global.inputs_clr,
        borderRadius: 25
    },
    iconStyle: {
        height: 25,
        width: 30,
        marginHorizontal: 10,
        resizeMode: 'contain'
    },
    btnContainer: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mapStyle: {
        width: '100%',
        height: 250,
    },
    offlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Global.inputs_clr,
        borderRadius: 7,
        padding: 13
    },
    commingRidesBtn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:25,
        // paddingVertical:15
    }
})
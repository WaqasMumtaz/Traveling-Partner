import React, { useState } from 'react'
import { StyleSheet, Text, Switch, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import Components from '../../../../Components'
import Global from '../../../../Global'
// import location from '../../Assets/Icons/location.png'
// import driver from '../../Assets/Icons/man.png';
import map_img from '../../../../Assets/map.png';
import { useNavigation } from "@react-navigation/native";
import IonicIcon from 'react-native-vector-icons/Ionicons';


const PoolRide = () => {
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
        navigation.navigate('DeliveryPoolRides');
    }

    return (
        <Components.MainComponent>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <View style={{ alignItems: 'center' }}>
                    <Components.Heading3 title={'Pool Ride'} />
                </View>
                <View style={{ flex: 1 }}>
                    <Components.DataInfo
                        isEnabled={isEnabled}
                        toggleSwitch={toggleSwitch}
                    />
                    <View style={{ alignItems: 'center',justifyContent:'center', flexDirection:'row', marginTop: 20 }}>
                        <Components.MainButton
                            title={'Comming Rides'}
                            handleNavigation={handleRides}
                            btn_container_style={{ borderRadius: 100, height: 50,width:160 }}
                        />
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Text style={{textDecorationLine:"underline", fontSize:16}}>Make Ride Plan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Image
                            source={map_img}
                            style={styles.mapStyle}
                            resizeMode='cover'
                        />
                    </View>
                    <View style={{ flex: 1, marginVertical: 15 }}>
                        <Components.Banner />
                    </View>
                    <Components.VechileMeterInfo />
                    <View style={{ flex: 1, margin: 15 }}>
                        <Components.AdBanner />
                    </View>
                </View>
            </ScrollView>
        </Components.MainComponent>
    )
}

export default PoolRide

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
    commingRidesBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        // paddingVertical:15
    }
})
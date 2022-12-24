import React, { useState, useEffect } from 'react'
import { StyleSheet, StatusBar,SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import Global from '../../Global'
import Components from '../../Components';
import MaskGroup from '../../Assets/mask_group.png';
import local_taxi from '../../Assets/local_taxi.png';
import delivery from '../../Assets/delivery.png';
import pool from '../../Assets/pool_ride.png';
import logistic from '../../Assets/logistic.png';
import location_taxi from '../../Assets/location_taxi.png';
import tracking_taxi from '../../Assets/tracking_taxi.png';
import rectangle from '../../Assets/rectangle.png'
import { useNavigation } from "@react-navigation/native";


const Home = () => {
    let navigation = useNavigation();
    let data = [
        {
            id: 1,
            name: 'Taxi Stands',
            icon: local_taxi,
            selected: false
        },
        {
            id: 2,
            name: 'Pool Ride',
            icon: pool,
            selected: false
        },
        {
            id: 3,
            name: 'Delivery',
            icon: delivery,
            selected: false
        },
        {
            id: 4,
            name: 'Logistic',
            icon: logistic,
            selected: false
        },
        {
            id: 5,
            name: 'Trip',
            icon: location_taxi,
            selected: false
        },
        {
            id: 6,
            name: 'Tracking',
            icon: tracking_taxi,
            selected: false
        }
    ]
    const [taxiData, setTaxiData] = useState(data);

    function handleClicked(name , id) {
        console.log('Name Navigation >>>', name);
        let arr = [...data];
        // let indx = arr.findIndex(item => item.id == id);
        // if(indx != -1){

        //     setTaxiData(newArr);

        // }
        let newArr = arr.map(item => (item.id == id ? { ...item, selected: true } : { ...item, selected: false }))
        console.log('New Arr >>>', newArr);
        setTaxiData(newArr);
        if(name === 'Taxi Stands'){
          navigation.replace('TaxiStand');
        }
    }


    return (
        <>
            <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />
            <SafeAreaView style={styles.container}>
                {/* <Text>Home</Text> */}
                <View style={{ flex: 1.32 }}>
                    <Image source={MaskGroup} style={{ height: '100%', width: '100%' }} resizeMode='cover' />
                </View>
                <View style={{ flex: 2,backgroundColor:Global.main_color}}>
                    <ScrollView style={{ flex: 2 ,backgroundColor:Global.white, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
                        <View style={{ flex: 3, marginHorizontal:10 }}>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {taxiData.map((item, indx) => {
                                    return (
                                        <View key={indx} style={{ width: '33.33%', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                            <TouchableOpacity
                                                style={item.selected ? null : styles.iconsStyle}
                                                onPress={() => handleClicked(item.name ,item.id)}
                                            >
                                                {item.selected ?
                                                    <ImageBackground source={rectangle} resizeMode='cover' style={styles.selectedOption}>
                                                        <Image source={item.icon} />
                                                    </ImageBackground>
                                                    :
                                                    <Image source={item.icon} />
                                                }

                                            </TouchableOpacity>
                                            <View style={{ marginTop: 8 }}>
                                                <Text style={{ fontSize: 13 }}>{item.name}</Text>
                                            </View>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                        <View style={{ flex: 1 , marginVertical:10}}>
                            <Components.Banner />
                        </View>
                        <Components.ListItem
                            title={'Pick Up'}
                            des={'Sadar, Karachi, PK'}
                        />
                        <Components.ListItem
                            title={'Drop Off'}
                            des={'Bahawalrpur,Punjab, PK'}
                        />
                        <Components.ListItem
                            title={'Car'}
                            des={'Aqua'}
                        />
                        <View style={{ flex: 1, margin:15 }}>
                            <Components.AdBanner />
                        </View>
                    </ScrollView>
                </View>
                <Components.BottomTabs/>
                {/* <Components.Gradient _style={{ flex: 0.32}}>
                    <Text>Bottom Tab</Text>
                </Components.Gradient> */}
            </SafeAreaView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Global.white
    },
    iconsStyle: {
        height: 48,
        width: 55,
        backgroundColor: Global.light_gray,
        padding: 5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    selectedOption: {
        height: 48,
        width: 55,
        alignItems: "center",
        justifyContent: 'center'
    },

})
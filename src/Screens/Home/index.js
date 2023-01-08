import React, { useState, useEffect } from 'react'
import { StyleSheet, StatusBar, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import Global from '../../Global'
import Components from '../../Components';
import MaskGroup from '../../Assets/mask_group.png';
import local_taxi from '../../Assets/local_taxi.png';
import delivery from '../../Assets/delivery.png';
import pool from '../../Assets/users.png';
import logistic from '../../Assets/logistic.png';
import location_taxi from '../../Assets/trip.png';
import tracking_taxi from '../../Assets/tracking_taxi.png';
import rectangle from '../../Assets/rectangle.png'
import { useNavigation } from "@react-navigation/native";
import IonicIcon from 'react-native-vector-icons/Ionicons'
import Swiper from "react-native-swiper";
import { StackActions } from '@react-navigation/native';



const Home = ({navigation, route}) => {
    const { routeName } = route?.params;
    console.log('And Route Detail >>>>', routeName);
   
    let _navigation = useNavigation();
    let data = [
        {
            id: 1,
            name: 'Taxi Stands',
            icon: "car-outline",
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

    function handleClicked(name, id) {
        console.log('Name Navigation >>>', name);
        let arr = [...data];
        // let indx = arr.findIndex(item => item.id == id);
        // if(indx != -1){

        //     setTaxiData(newArr);

        // }
        let newArr = arr.map(item => (item.id == id ? { ...item, selected: true } : { ...item, selected: false }))
        // console.log('New Arr >>>', newArr);
        setTaxiData(newArr);
        if (name === 'Trip') {
            _navigation.navigate('RidesDetail');
            // navigation.replace('TaxiStand');
        }
        else if (name === 'Taxi Stands') _navigation.navigate('DriverTaxiStand');
        else if(name === 'Pool Ride') {
            if(routeName === 'Partner'){
                _navigation.dispatch(
                    StackActions.replace('PoolRide')
                  );
                // _navigation.navigate('PoolRide')
                
            } 
        }

    }


    return (
        <>
            <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />
            {/* <SafeAreaView style={styles.container}> */}
                {/* <Text>Home</Text> */}
                <View style={{ flex: 1, backgroundColor: Global.main_color }}>
                <ScrollView 
                  contentContainerStyle={{ flexGrow: 1 }}
                  style={{flex:1,backgroundColor: Global.white, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
                > 
                    <View style={{ height:'33%' }}>
                        <Swiper
                             height={'33%'}
                            style={styles.wrapper}
                            showsButtons={false}
                            activeDotColor={Global.main_color}
                            
                        >
                            <View style={styles.slide1}>
                                <Image source={MaskGroup} style={{ height: '100%', width: '100%' }} resizeMode='cover' />
                            </View>
                            <View style={styles.slide2}>
                                <Image source={MaskGroup} style={{ height: '100%', width: '100%' }} resizeMode='cover' />
                            </View>
                            <View style={styles.slide3}>
                                <Image source={MaskGroup} style={{ height: '100%', width: '100%' }} resizeMode='cover' />
                            </View>
                        </Swiper>
                        {/* <Image source={MaskGroup} style={{ height: '100%', width: '100%' }} resizeMode='cover' /> */}
                    </View>
                        <View style={{ flex: 1, marginHorizontal: 10 , marginTop:15}}>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {taxiData.map((item, indx) => {
                                    return (
                                        <View key={indx} style={{ width: '33.33%', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                            <TouchableOpacity
                                                style={item.selected ? null : styles.iconsStyle}
                                                onPress={() => handleClicked(item.name, item.id)}
                                            >
                                                {item.selected ?
                                                    <ImageBackground source={rectangle} resizeMode='cover' style={styles.selectedOption}>
                                                        {item.name === 'Taxi Stands' ?
                                                            <IonicIcon name="car-outline" size={27} />
                                                            :
                                                            <Image source={item.icon} style={{ height: 27, width: 27 }} />
                                                        }
                                                    </ImageBackground>
                                                    :
                                                    <>
                                                        {item.name === 'Taxi Stands' ?
                                                            <IonicIcon name="car-outline" size={27} />
                                                            :
                                                            <Image source={item.icon} style={{ height: 30, width: 30 }} />
                                                        }
                                                    </>
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
                        <View style={{ flex: 1, marginVertical: 10 }}>
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
                        <View style={{ flex: 1, margin: 15 }}>
                            <Components.AdBanner />
                        </View>
                </ScrollView>
                    </View>
                    <Components.BottomTabs />
            {/* </SafeAreaView> */}
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
    wrapper: {
       // height:'50%'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }

})
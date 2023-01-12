import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import Components from '../../../Components'
import Global from '../../../Global'
import user_2 from '../../../Assets/pool_user.png';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PartnerPickLocation = () => {
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
        pic_up_location: '',
        drop_off_location: ''
    })

    const [errorObj, setErrorObj] = useState({
        pic_up_location: '',
        drop_off_location: ''
    })

    function hanldeClick(params) {
        console.log('Selected Tab >>>', params);
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
                        
                        <View style={{ margin: 5 }} />
                        <View style={styles.details}>
                            {/* <Text>jdlakjfdlkal</Text> */}
                            <View style={{ alignItems: 'center', width: 30, justifyContent:'center' }}>
                                <View style={[styles.dot, { backgroundColor: Global.green_clr }]} />
                                <View style={[styles.line]} />
                                <View style={[styles.dot, { backgroundColor: Global.main_color }]} />
                            </View>
                            <View style={{ flex: 1, height: 120, justifyContent: 'space-between'}}>
                                <View>
                                    <Components.InputText
                                        placeholder="Enter Pick-Up Location"
                                        name={'pic_up_location'}
                                        handleChange={(name, value) => handleChange(name, value)}
                                        value={authObj.pic_up_location}
                                    />
                                    {errorObj.pic_up_location ? (
                                        <Text style={styles.error}>{errorObj.pic_up_location}</Text>
                                    ) : (
                                        null
                                    )}
                                    {/* <Text numberOfLines={1} ellipsizeMode='tail'>13 Sept, 2022 at 06:00 PM , Shaheen Complex , medical center blue area </Text> */}
                                </View>
                                <View>
                                    <Components.InputText
                                        placeholder="Where to go?"
                                        name={'drop_off_location'}
                                        handleChange={(name, value) => handleChange(name, value)}
                                        value={authObj.drop_off_location}
                                    />
                                    {errorObj.drop_off_location ? (
                                        <Text style={styles.error}>{errorObj.drop_off_location}</Text>
                                    ) : (
                                        null
                                    )}
                                    {/* <Text numberOfLines={1} ellipsizeMode='tail'>13 Sept, 2022 at 06:31 PM , Gulstan-e-Johar , Karachi University road</Text> */}
                                </View>
                            </View>
                        </View>


                    </View>
                    <View style={{ flex: 1, marginTop: 15 }}>
                        <Components.MapLogo />
                    </View>


                    <View style={{ margin: 15 }}>
                        <Components.BackButton title={'Back'} />
                        <View style={{ margin: 15 }} />
                        <Components.MainButton
                            title={'Next'}
                            // handleNavigation={() => navigation.navigate('PartnerDetail')}
                        />
                        <View style={{ margin: 15 }} />
                        <Components.AdBanner />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default PartnerPickLocation;

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
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import Components from '../../../Components'
import Global from '../../../Global'
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const PartnerDetail = () => {
    const [selectedValue, setSelectedValue] = useState('In-City');

    const navigation = useNavigation();

    const [authObj, setAuthObj] = useState({
        date: '',
        time: '',
        person: '',
        pic_up_location: '',
        drop_off_location: '',
        fare: ''
    })

    const [errorObj, setErrorObj] = useState({
        date: '',
        time: '',
        person: '',
        pic_up_location: '',
        drop_off_location: '',
        fare: ''
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

                        {selectedValue === 'In-City' && (
                            <>
                                <Components.InputButton title={'Date'} />
                                <Components.InputButton title={'Time'} />
                                <View style={{ margin: 10 }} />
                                <Components.InputText
                                    placeholder="Person"
                                    name={'person'}
                                    handleChange={(name, value) => handleChange(name, value)}
                                    value={authObj.person}
                                />
                                {errorObj.person ? (
                                    <Text style={styles.error}>{errorObj.person}</Text>
                                ) : (
                                    null
                                )}
                                <View style={{ margin: 10 }} />
                                <Components.InputText
                                    placeholder="Pick Up Location"
                                    name={'pic_up_location'}
                                    handleChange={(name, value) => handleChange(name, value)}
                                    value={authObj.pic_up_location}
                                />
                                {errorObj.pic_up_location ? (
                                    <Text style={styles.error}>{errorObj.pic_up_location}</Text>
                                ) : (
                                    null
                                )}
                                <ScrollView
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    horizontal={true}
                                >

                                </ScrollView>
                                <View style={{ margin: 10 }} />
                                <Components.InputText
                                    placeholder="Drop Off Location"
                                    name={'drop_off_location'}
                                    handleChange={(name, value) => handleChange(name, value)}
                                    value={authObj.drop_off_location}
                                />
                                {errorObj.drop_off_location ? (
                                    <Text style={styles.error}>{errorObj.drop_off_location}</Text>
                                ) : (
                                    null
                                )}
                                <View style={{ margin: 10 }} />
                                <Components.InputText
                                    placeholder="Fare"
                                    name={'fare'}
                                    handleChange={(name, value) => handleChange(name, value)}
                                    value={authObj.fare}
                                />
                                {errorObj.fare ? (
                                    <Text style={styles.error}>{errorObj.fare}</Text>
                                ) : (
                                    null
                                )}

                            </>
                        )}
                    </View>

                    {selectedValue === 'Out-City' && (
                        <>
                            <View style={{ margin: 5 , marginHorizontal:20}}>
                                <View style={styles.details}>
                                    {/* <Text>jdlakjfdlkal</Text> */}
                                    <View style={{ alignItems: 'center', width: 30, justifyContent: 'center' }}>
                                        <View style={[styles.dot, { backgroundColor: Global.green_clr }]} />
                                        <View style={[styles.line]} />
                                        <View style={[styles.dot, { backgroundColor: Global.main_color }]} />
                                    </View>
                                    <View style={{ flex: 1, height: 120, justifyContent: 'space-between' }}>
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
                        </>
                    )}


                    <View style={{ margin: 15 }}>
                        <Components.BackButton title={'Back'} />
                        <View style={{ margin: 15 }} />
                        <Components.MainButton
                            title={'Sent'}
                            handleNavigation={() => navigation.navigate('FoundRide')}
                        />
                        <View style={{ margin: 15 }} />
                        <Components.AdBanner />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default PartnerDetail;

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
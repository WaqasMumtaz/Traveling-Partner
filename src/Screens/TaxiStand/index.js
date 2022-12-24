import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import Components from '../../Components'
import Global from '../../Global'
import location from '../../Assets/Icons/location.png'
import driver from '../../Assets/Icons/man.png';
import map_img from '../../Assets/map.png';
import { useNavigation } from "@react-navigation/native";


const TaxiStand = () => {
    let navigation = useNavigation();
    const [enableCity, setEnableCity] = useState(false);
    const [cities, setCities] = useState([
        { label: 'Karachi', value: 'karachi' },
        { label: 'Hyderabad', value: 'hyderabad' }
    ]);
    const [formData, setFormData] = useState({
        city: '',
        taxi: ''
    })

    function handleChange(name, value) {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Components.TopLogo />
            <View style={{ flex: 1, backgroundColor: Global.main_color }}>
                <ScrollView style={{ flex: 1, backgroundColor: Global.white, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
                        <View style={{ alignItems: 'center', marginHorizontal:15 }}>
                            <Components.Heading3 title={'Taxi Stands'} />
                        </View>
                    <View style={{ marginHorizontal: 15 }}>
                        <Components.DropDown
                            placeholder={'Select City...'}
                            list={cities}
                            onChange={(value) => handleChange('city', value())}
                            value={formData.city}
                            dropDownMaxHeight={150}
                            open={enableCity}
                            style={styles.dropdown_inner_style}
                            mainContainer_style={styles.container_style}
                            setOpen={() => setEnableCity(enableCity => !enableCity)}
                            listMode="MODAL"
                            icon={location}
                            />
                    </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btn}>
                                <Image source={driver} style={styles.iconStyle} />
                                <Components.Heading2 title={'Driver'} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <Image source={driver} style={styles.iconStyle} />
                                <Components.Heading2 title={'Pink Taxi'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, margin: 15 }}>
                        <Components.MainButton
                            title={'Search Taxi'}
                            btn_container_style={styles.btn_container_style}
                            handleNavigation={() => navigation.navigate('Rides')}
                        />
                        </View>
                        <View style={{ flex: 1, marginTop:10 }}>
                            <Image
                             source={map_img}
                             style={styles.mapStyle}
                             resizeMode='cover'
                            />
                        </View>
                        <View style={{ flex: 1, margin:15 }}>
                            <Components.AdBanner />
                        </View>
                </ScrollView>
            </View>
            <Components.BottomTabs />

        </SafeAreaView>
    )
}

export default TaxiStand

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
        marginTop:15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mapStyle:{
        width:'100%',
        height:250,
    }
})
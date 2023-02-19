import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import Components from '../../Components'
import TemplateComponents from '../../Components/TemplateComponents'
import Global from '../../Global'
import car from '../../Assets/mehran.png';
import rider from '../../Assets/rider.png';

const ActiveRide = () => {
    const [form, setForm] = useState({
        message: ''
    })
    const [errorObj, setErrorObj] = useState({
        message: ''
    })

    function handleChange(name, value) {
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <Components.MainComponent>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <View style={{ alignItems: 'center' }}>
                    <Components.Heading3 title={'Tracking'} />
                </View>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <Components.MapLogo />
                </View>
                <View style={styles.list}>
                    <View style={{ flex: 1 }}>
                        <Components.Heading4 title='Meet at your pickup spot' />
                    </View>
                    <Components.Gradient _style={styles.circle}>
                        <Components.Heading4 title='3' />
                        <Components.Heading4 title='min' />
                    </Components.Gradient>
                </View>
                <View style={styles.line} />
                <View style={styles.riderDetail}>
                    <View style={{ position: 'relative', flex: 1 }}>
                        <Image source={car} style={styles.ride} resizeMode='contain' />
                        <Image source={rider} style={styles.rider} resizeMode='contain' />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: Global.gray_color }}>Faheem</Text>
                        <Text style={{ color: Global.black_clr, fontWeight: 'bold' }}>AFA-767</Text>
                        <Text style={{ color: Global.gray_color }}>Suzuki Mehran - green</Text>
                    </View>
                </View>
                <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{flex:1, marginRight:10}}>
                        <Components.InputText
                            placeholder="Send a message"
                            name={'message'}
                            handleChange={(name, value) => handleChange(name, value)}
                            value={form.message}
                        />
                    </View>
                    <Components.Gradient _style={[styles.circle, { height: 40, width: 40 ,marginHorizontal:7}]}>
                        <Components.Icon
                            type={'Ionicons'}
                            name='call-outline'
                            size={20}
                            color={Global.black_clr}
                        />
                    </Components.Gradient>
                </View>
                {errorObj.message ? (
                    <Text style={styles.error}>{errorObj.message}</Text>
                ) : (
                    null
                )}
                <View style={{ flex: 1, margin: 15 }}>
                    <Components.AdBanner />
                </View>
            </ScrollView>
        </Components.MainComponent>
    )
}

export default ActiveRide

const styles = StyleSheet.create({
    circle: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15
    },
    line: {
        marginHorizontal: 15,
        margin: 5,
        borderWidth: 1,
        borderColor: Global.inputs_clr
    },
    riderDetail: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    ride: {
        height: 110,
        width: 110,
        borderRadius: 100
    },
    rider: {
        height: 55,
        width: 55,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: Global.white,
        position: 'absolute',
        zIndex: 100,
        left: 70,
        top: 30
    }
})
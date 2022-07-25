import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Global from "../../Global";
import driver_icon from '../../Assets/driver-icon.png';
import partner_icon from '../../Assets/partner-icon.png';
import Components from "../../Components";

function SignUp() {
    const [screen, setScreen] = useState(0);

    return (
        <>
            <Components.MainTopBar
                HeaderText={() => <HeaderText screen={screen} />}
            />
            <View style={styles.container}>
                {screen == 2 ?
                    <>
                        <Text>Phone number</Text>
                        <View style={{ margin: 10 }} />
                <Components.BackButton
                    title={'Back'}
                    handleNavigation={() => setScreen(0)}
                />
                    </>
                    :
                    <>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                style={screen == 0 ? styles.clicked_btn : styles.unclicked_btn}
                                onPress={() => setScreen(0)}
                            >
                                <Image
                                    source={driver_icon}
                                    style={styles.icon_style}
                                />
                            </TouchableOpacity>
                            <View style={{ margin: 12 }}>
                                <Text style={styles.title}>Driver</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <TouchableOpacity
                                style={screen == 1 ? styles.clicked_btn : styles.unclicked_btn}
                                onPress={() => setScreen(1)}
                            >
                                <Image
                                    source={partner_icon}
                                    style={styles.icon_style}
                                />
                            </TouchableOpacity>
                            <View style={{ margin: 12 }}>
                                <Text style={styles.title}>Partner</Text>
                            </View>
                        </View>
                        <View style={{ margin: 10 }} />
                        <Components.BackButton
                            title={'Sign up with phone number'}
                            handleNavigation={() => setScreen(2)}
                        />
                    </>
                }

            </View>
        </>
    )
}

function HeaderText({ screen }) {
    return (
        <>
            {screen == 2 ?
                <>
                    <Text style={{ fontSize: 30, fontWeight: '700' }}>Sign Up</Text>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>with phone number</Text>
                </>
                :
                <>
                    <Text style={{ fontSize: 30, fontWeight: '700' }}>Sign Up</Text>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>as a driver or partner</Text>
                </>
            }
        </>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon_style: {
        height: 64,
        width: 56,
        resizeMode: 'contain'
    },
    unclicked_btn: {
        height: 157,
        width: 157,
        borderRadius: 20,
        backgroundColor: Global.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    clicked_btn: {
        height: 157,
        width: 157,
        borderRadius: 20,
        backgroundColor: Global.main_color,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20
    }
})
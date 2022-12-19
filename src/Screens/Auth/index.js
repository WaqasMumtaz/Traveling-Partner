import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Global from "../../Global";
import driver_icon from '../../Assets/driver.png';
import partner_icon from '../../Assets/hands.png';
import Components from "../../Components";
import { useNavigation } from "@react-navigation/native";

function SignUp() {
    const [screen, setScreen] = useState(0);
    const navigation = useNavigation();

    function handleNavigation(screen) {
        if (screen == 0) {
            setScreen(screen);
            //navigation.navigate('Driver Info');
        }
        else {
            setScreen(screen);
            //navigation.navigate('Partner Info');
        }
    }

    return (
        <>
            {/* <Components.MainTopBar
                HeaderText={HeaderText}
            /> */}
        <Components.TopLogo/>
            <View style={styles.body}>
                    <View style={{flex:0.5,alignItems:"center"}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>Sign up as a Driver or Partner</Text>
                    </View>
                <View style={styles.body_1}>      
                        <TouchableOpacity
                            style={screen == 0 ? null : styles.unclicked_btn}
                            onPress={() => handleNavigation(0)}
                        >
                            {screen == 0 ?
                                <Components.MainIcon>
                                    <Image
                                        source={driver_icon}
                                        style={styles.icon_style}
                                    />
                                </Components.MainIcon>
                                :
                                <Image
                                    source={driver_icon}
                                    style={styles.icon_style}
                                />
                            }
                        </TouchableOpacity>
                        <View style={{ margin: 5 }}>
                            <Text style={styles.title}>Driver</Text>
                        </View>
                
                        <TouchableOpacity
                            style={screen == 1 ? null : styles.unclicked_btn}
                            onPress={() => handleNavigation(1)}
                        >
                            {screen == 1 ?
                                <Components.MainIcon>
                                    <Image
                                        source={partner_icon}
                                        style={styles.icon_style}
                                    />
                                </Components.MainIcon>
                                :
                                <Image
                                    source={partner_icon}
                                    style={styles.icon_style}
                                />
                            }
                        </TouchableOpacity>
                        <View style={{ margin: 8 }}>
                            <Text style={styles.title}>Partner</Text>
                        </View>
                </View>
                <View style={{ flex: 0.3,justifyContent:'center', alignItems:"center"}}>
                    <Components.BackButton
                        title={'Sign up with phone number'}
                        handleNavigation={() => navigation.navigate('Mobile Phone')}
                    />
                </View>
                <View style={{ flex: 0.6}}>
                    <Components.AdBanner />
                </View>
            </View>
        </>
    )
}

function HeaderText() {
    return (
        <>
            <Text style={{ fontSize: 30, fontWeight: '700' }}>Sign Up</Text>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>as a driver or partner</Text>
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
    body: {
        flex: 1,
        // marginTop: '35%',
        padding: 15,
        backgroundColor:Global.white
    },
    body_1: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon_style: {
        height: 64,
        width: 56,
        resizeMode: 'contain'
    },
    unclicked_btn: {
        height: 110,
        width: 110,
        borderRadius: 20,
        backgroundColor: Global.inputs_clr,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Global.inputs_clr,
        borderWidth: 1
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
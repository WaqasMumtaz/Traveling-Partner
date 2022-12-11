import { StyleSheet, Text, View, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Components from '../../Components';
import Global from '../../Global';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function SignUpWithMobile() {
    let navigation = useNavigation();
    const [authObj, setAuthObj] = useState({
        phone_number: ''
    })
    const [errorObj, setErrorObj] = useState({
        phone_number: ''
    })

    function handleChange(name, value) {
        setAuthObj({
            ...authObj,
            [name]: value
        })
    }

    return (
        <>
            <Components.TopLogo />
            <View style={styles.container}>
                <View style={{
                    flex: 0.7,
                    // backgroundColor:'green'
                }} />
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        flex: 1,
                        alignItems: 'center'
                    }}

                >
                    <Components.Heading3
                        title={'SignUp with phone number'}
                    />
                    <Components.InputText
                        placeholder="Phone Number"
                        icon="account-circle"
                        name={'phone_number'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.phone_number}
                        inputStyle={styles.inputStyle}
                        inputTextRemove={authObj.phone_number == '' ? false : true}
                    />
                    {errorObj.phone_number ? (
                        <Text style={styles.error}>{errorObj.phone_number}</Text>
                    ) : (
                        ''
                    )}
                    <View style={{ marginTop: 20 }} />

                    <Components.MainButton
                        title='Next'
                        handleNavigation={() => navigation.navigate('OTP Screen')}
                        btn_container_style={styles.btn_container_style}
                    />
                    <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
                        <Text>Can't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: '600', textDecorationLine: "underline" }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </>
    )
}

function HeaderText() {
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: "center" }}>
                <Text style={{ fontSize: 30, fontWeight: '700' }}>Sign Up</Text>
                <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 5, marginTop: 5 }}>With</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>phone number</Text>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: "center",
        backgroundColor: Global.white
    },
    inputStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Global.light_gray,
        borderColor: Global.light_gray,
        height: 50,
        borderRadius: 100,
        borderWidth: 1,
        marginHorizontal: 25
    },
    btn_container_style: {
        //flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: Global.main_color,
        //padding: 12,
        // borderRadius: 22,
        marginHorizontal: 25
    },
})
import { StyleSheet, Text, View, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Components from '../../Components';
import Global from '../../Global';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from "react-redux";


export default function SignUpWithMobile() {
    let navigation = useNavigation();
    const permissions = useSelector((state) => state);
    console.log(permissions, 'permissions')

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
                }} />
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        alignItems: 'center'
                    }}

                >
                    <Components.Heading3
                        title={'Login with Number'}
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
                        <TouchableOpacity onPress={() => navigation.navigate('SingUp')}>
                            <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: '600', textDecorationLine: "underline" }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginHorizontal: 25
    },
})
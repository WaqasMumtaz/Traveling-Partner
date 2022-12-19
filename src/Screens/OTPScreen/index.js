import { StyleSheet, Text, TextInput, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react';
import Components from '../../Components';
import Global from '../../Global';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


export default function OTPScreen() {
    let navigation = useNavigation();

    let input_2 = useRef();
    let input_3 = useRef();
    let input_4 = useRef();


    let [codeData, setCodeData] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
    })

    function handleInputChange(name, value) {
        setCodeData({
            ...codeData,
            [name]: value
        })
    }
    return (
        <>
            <Components.TopLogo />
            <View style={styles.inputsContainer}>
                <View style={{ margin: 8 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Phone Verification</Text>
                </View>
                <Components.Heading4
                    title={'Enter your OTP code here'}
                />
                <View style={styles.child_container}>
                    <TextInput
                        textAlign='center'
                        style={styles.inputStyle}
                        keyboardType={'default'}
                        secureTextEntry={true}
                        maxLength={1}
                        onChangeText={(text) => {
                            if (text.length == 1) {
                                input_2.focus();
                                handleInputChange('input1', text);
                            }
                        }}
                    />
                    <TextInput
                        textAlign={'center'}
                        style={styles.inputStyle}
                        keyboardType={'default'}
                        secureTextEntry={true}
                        maxLength={1}
                        ref={(val) => input_2 = val}
                        onChangeText={(text) => {
                            if (text.length == 1) {
                                input_3.focus();
                                handleInputChange('input2', text);
                            }
                        }}
                    />
                    <TextInput
                        textAlign={'center'}
                        style={styles.inputStyle}
                        keyboardType={'default'}
                        secureTextEntry={true}
                        maxLength={1}
                        ref={(val) => input_3 = val}
                        onChangeText={(text) => {
                            if (text.length == 1) {
                                input_4.focus();
                                handleInputChange('input3', text);
                            }
                        }}
                    // value={codeData.input3.toLowerCase()}
                    />
                    <TextInput
                        textAlign={'center'}
                        style={styles.inputStyle}
                        keyboardType={'default'}
                        secureTextEntry={true}
                        maxLength={1}
                        ref={(val) => input_4 = val}
                        onChangeText={(text) => {
                            handleInputChange('input4', text);
                        }}
                    // value={codeData.input4.toLowerCase()}
                    />
                </View>
                <View style={{ margin: 25 }} />
                <Components.MainButton
                    title={'Verify Now'}
                    btn_container_style={styles.btn_container_style}
                    handleNavigation={() => navigation.navigate('Home')}
                />
                <View style={{ margin: 20 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Can't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ marginLeft: 5, fontSize: 16, fontWeight: '600', textDecorationLine: "underline" }}>Login</Text>
                    </TouchableOpacity>
                </View>
                {/* <Components.BackButton title={'back'} /> */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: Global.white
    },
    body: {
        flex: 1,
        // backgroundColor:'red',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    inputsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Global.white

    },
    child_container: {
        // flex: 1,
        //height:'50%',
        width: wp('90%'),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    inputStyle: {
        width: wp('15%'),
        height: hp('10%'),
        borderBottomWidth: 2,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomColor: Global.main_color,
        fontWeight: 'bold',
        fontSize: 20,
        color: Global.gray_color
    },
    btn_container_style: {
        // flex: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: Global.main_color,
        // padding: 12,
        // borderRadius: 22,
        marginHorizontal: 25
    },
})
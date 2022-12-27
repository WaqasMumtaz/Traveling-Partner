import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Platform,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native'
import Components from '../../Components';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Global from '../../Global';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import ImageModal from 'react-native-image-modal';
import rectangle from '../../Assets/rectangle.png';


const DriverLicenseInfo = () => {
    let actionSheet = useRef();
    const [gender, setGender] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
    ]);
    const [openGender, setOpenGender] = useState(false);
    const [authObj, setAuthObj] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        cnic: '',
        cnicType: '',
        cnicFront: '',
        cnicBack: '',
        license: '',
        licenseFront: '',
        licenseBack: '',
        gender: '',
        license_number: ''
    })
    const [docs, setDocs] = useState({
        cnic: false,
        license: false
    })

    const [errorObj, setErrorObj] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        cnic: '',
        cnicType: '',
        cnicFront: '',
        cnicBack: '',
        license: '',
        licenseFront: '',
        licenseBack: '',
        gender: '',
        license_number: ''
    })

    function handleSubmit(params) {
        let errors = {};
        if (authObj?.license_number == '') {
            errors.license_number = 'License number is required'
        }
        setErrorObj(errors);
        if (Object.keys(errors).length == 0) {
            alert('Detail has been submited');
        }
    }

    let optionArray = [
        'Gallery',
        'Camera',
        'Cancel',
    ];
    const openSheet = (name, type) => {
        actionSheet.current.show();
        // alert(type);
        handleChange(name, type);
        if (name == 'cnicType') {
            setDocs({
                cnic: true,
                license: false
            })
        }
        else if (name == 'license') {
            // alert('License')
            setDocs({
                cnic: false,
                license: true
            })
        }
    }


    async function handleCNIC(index) {
        if (index == 0) {
            ImagePicker.openPicker({
                width: 300,
                height: 400,

            }).then(async (image) => {
                //console.log('image', image);
                const imgData = new FormData();
                imgData.append('images', { uri: image.path, name: 'photo', type: 'image/jpg' });
                if (docs.cnic) {
                    if (authObj.cnicType == 'front') {
                        setAuthObj({
                            ...authObj,
                            cnicFront: image.path
                        })
                    }
                    else if (authObj.cnicType == 'back') {
                        setAuthObj({
                            ...authObj,
                            cnicBack: image.path
                        })
                    }
                }
                else if (docs.license) {
                    // alert('Selecte Li')
                    if (authObj.license == 'front') {
                        setAuthObj({
                            ...authObj,
                            licenseFront: image.path
                        })
                    }
                    else if (authObj.license == 'back') {
                        setAuthObj({
                            ...authObj,
                            licenseBack: image.path
                        })
                    }
                }

            })
            //console.log('gallery image >>>', profileImage)

        }
        else if (index == 1) {
            ImagePicker.openCamera({
                width: 300,
                height: 400,
            }).then(async (image) => {
                console.log('Camera Pic >>', image);
                const imgData = new FormData();
                imgData.append('images', { uri: image.path, name: 'photo', type: 'image/jpg' });
                if (docs.cnic) {
                    if (authObj.cnicType == 'front') {
                        setAuthObj({
                            ...authObj,
                            cnicFront: image.path
                        })
                    }
                    else if (authObj.cnicType == 'back') {
                        setAuthObj({
                            ...authObj,
                            cnicBack: image.path
                        })
                    }
                }
                else if (docs.license) {
                    if (authObj.license == 'front') {
                        setAuthObj({
                            ...authObj,
                            licenseFront: image.path
                        })
                    }
                    else if (authObj.license == 'back') {
                        setAuthObj({
                            ...authObj,
                            licenseBack: image.path
                        })
                    }
                }

            });

        }
        else {
            setDocs({
                cnic: false,
                license: false
            })
        }
    }


    function handleChange(name, value) {
        setAuthObj({
            ...authObj,
            [name]: value
        })
    }

    // console.log('CNIC TYPE >>>>', authObj.cnicFront, authObj.cnicBack)

    return (
        <SafeAreaView style={styles.container}>
            <Components.TopLogo />
            <ScrollView
                // style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
            // keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            >
                <View style={{ flex: 1, marginHorizontal: 15 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Components.Heading3 title={'Driver License Info'} />
                    </View>
                    <Components.InputText
                        placeholder="Driving License Number"
                        icon="account-circle"
                        name={'license_number'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.license_number}
                    />
                    {errorObj.license_number ? (
                        <Text style={styles.error}>{errorObj.license_number}</Text>
                    ) : (
                        ''
                    )}
                    <View style={{ margin: 10 }} />

                    <View style={{ marginHorizontal: 15 }}>
                        <Text>Upload your documents</Text>
                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1 }}>
                                <View style={{ marginVertical: 10 }}>
                                    <Text>Front</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {authObj.license === 'front' ?
                                        <ImageBackground
                                            source={rectangle}
                                            resizeMode="cover"
                                            style={styles.icon_container}>
                                            <TouchableOpacity
                                                onPress={() => openSheet('license', 'front')}
                                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                                            >
                                                <IonicIcon name='document-outline' size={30} />
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        :
                                        <TouchableOpacity
                                            onPress={() => openSheet('license', 'front')}
                                            style={styles.unClickedBtn}
                                        >
                                            <IonicIcon name='document-outline' size={30} color={Global.gray_color} />
                                        </TouchableOpacity>
                                    }
                                    <View>
                                        {authObj.licenseFront == '' ?
                                            <Components.SkeltonLoader
                                            //  SkeltonLoading={SkeltonLoading}
                                            />
                                            :
                                            <ImageModal
                                                resizeMode="contain"
                                                // imageBackgroundColor={Global.white}
                                                style={{
                                                    width: 55,
                                                    height: 55,
                                                }}
                                                source={{
                                                    uri: authObj.licenseFront,
                                                    // uri: 'file:///var/mobile/Containers/Data/Application/19B7CA05-94B4-464E-A69D-B580EEC265B6/Documents/1622008112347.png'
                                                }}
                                            />
                                        }
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 12 }}>Driving License</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ marginVertical: 10 }}>
                                    <Text>Back</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                                    {authObj.license === 'back' ?
                                        <ImageBackground
                                            source={rectangle}
                                            resizeMode="cover"
                                            style={styles.icon_container}>
                                            <TouchableOpacity
                                                onPress={() => openSheet('license', 'back')}
                                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                                            >
                                                <IonicIcon name='document-outline' size={30} />
                                            </TouchableOpacity>
                                        </ImageBackground>
                                        :
                                        <TouchableOpacity
                                            onPress={() => openSheet('license', 'back')}
                                            style={styles.unClickedBtn}
                                        >
                                            <IonicIcon name='document-outline' size={30} color={Global.gray_color} />
                                        </TouchableOpacity>
                                    }
                                    <View>
                                        {authObj.licenseBack == '' ?
                                            <Components.SkeltonLoader
                                            // SkeltonLoading={SkeltonLoading}
                                            />
                                            :
                                            <ImageModal
                                                resizeMode="contain"
                                                // imageBackgroundColor={Global.white}
                                                style={{
                                                    width: 55,
                                                    height: 55,
                                                }}
                                                source={{
                                                    uri: authObj.licenseBack,
                                                    // uri: 'file:///var/mobile/Containers/Data/Application/19B7CA05-94B4-464E-A69D-B580EEC265B6/Documents/1622008112347.png'
                                                }}
                                            />
                                        }
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 12 }}>Driving License</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginVertical: 20 }} >
                        <Components.BackButton title={'Back'} />
                    </View>
                    <View style={{ marginVertical: 8 }}>
                        <Components.MainButton
                            title='Next'
                            handleNavigation={handleSubmit}
                            btn_container_style={styles.btn_container_style}
                        />
                    </View>
                    <View style={{ marginVertical: 8 }} >
                        <Components.AdBanner />
                    </View>

                </View>
            </ScrollView>
            <ActionSheet
                ref={actionSheet}
                title={'Which one do you like ?'}
                options={optionArray}
                cancelButtonIndex={2}
                destructiveButtonIndex={0}
                onPress={(index) =>
                    handleCNIC(index)
                }
            />

        </SafeAreaView>
    )
}

export default DriverLicenseInfo;

function HeaderText() {
    return (
        <>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>Partner</Text>
            <Text style={{ fontSize: 30, fontWeight: '700' }}>Basic Info</Text>
        </>
    )
}

function SkeltonLoading() {
    return (
        <View style={{ width: 70 }}>
            <View style={styles.imgLoaderStyle} />
            <View style={styles.imgLoaderStyle} />
            <View style={styles.imgLoaderStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn_container_style: {
        flex: 1,
        backgroundColor: Global.main_color,
        alignItems: 'center',
        padding: 12,
        borderRadius: 22
    },
    imgLoaderStyle: {
        borderWidth: 5,
        width: 70,
        margin: 3
    },
    error: {
        textAlign: 'center',
        color: 'red',
    },
    icon_container: {
        height: 60,
        width: 60,
        // backgroundColor: Global.main_color,
        // borderRadius: 10,
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    unClickedBtn: {
        height: 60,
        width: 60,
        backgroundColor: Global.inputs_clr,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdown_inner_style: {
        backgroundColor: Global.inputs_clr,
        borderColor: Global.inputs_clr,
        borderRadius: 100,
        paddingHorizontal: 15
        //width: '86%'
    },
})
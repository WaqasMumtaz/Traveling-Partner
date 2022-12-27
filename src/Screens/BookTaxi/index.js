import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Components from '../../Components'
import Global from '../../Global'
import IonicIcon from 'react-native-vector-icons/Ionicons';


const BookTaxi = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [dataSaved, setDataSaved] = useState(false);

    const [authObj, setAuthObj] = useState({
        address: '',
        city: '',
        pickup_point: '',
        phone_number: '',
        drop_of_point: '',
        date: '',
        time: '',
        total_passenger: '',
        language_no: '',
        pets: '',
        price: ''
    })
    const [errorObj, setErrorObj] = useState({
        phone_number: '',
        address: '',
        city: '',
        pickup_point: '',
        phone_number: '',
        drop_of_point: '',
        date: '',
        time: '',
        total_passenger: '',
        language_no: '',
        pets: '',
        price: ''
    })

    function handleChange(name, value) {
        setAuthObj({
            ...authObj,
            [name]: value
        })
    }

    function closeModal() {
        setModalVisible(false)
    }

    function submitTaxiForm(params) {
        const {
            address,
            city,
            pickup_point,
            phone_number,
            drop_of_point,
            date,
            time,
            total_passenger,
            language_no,
            pets,
            price
        } = authObj;
        let error = {};
        if(address == '') error.address = 'Address is required';
        if(city == '') error.city = 'city is required';
        if(pickup_point == '') error.pickup_point = 'PickUp Point is required';
        if(drop_of_point == '') error.drop_of_point = 'DropOf Point is required';
        if(date == '') error.date = 'Date is required';
        if(time == '') error.time = 'Time is required';
        if(total_passenger == '') error.total_passenger = 'Total Passenger is required';
        if(language_no == '') error.language_no = 'Language No is required';
        if(pets == '') error.pets = 'Pets is required';
        if(price == '') error.price = 'Price is required';
        
        setErrorObj(error);
        if(Object.keys(error).length == 0) {
            setModalVisible(true)
        }


    }

    return (
        <Components.MainComponent>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <View style={{ alignItems: 'center' }}>
                    <Components.Heading3 title={'Book Taxi Form'} />
                </View>
                <View style={{ flex: 1, marginHorizontal: 18 }}>
                    <Components.InputText
                        placeholder="Address"
                        name={'address'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.address}
                        inputStyle={styles.inputStyle}
                    />
                    {errorObj.address ? (
                        <Text style={styles.error}>{errorObj.address}</Text>
                    ) : (
                        null
                    )}
                    <View style={{ marginTop: 20 }} />
                    <Components.InputText
                        placeholder="City"
                        name={'city'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.city}
                        inputStyle={styles.inputStyle}
                    />
                    {errorObj.city ? (
                        <Text style={styles.error}>{errorObj.city}</Text>
                    ) : (
                        null
                    )}
                    <View style={{ marginTop: 20 }} />
                    <Components.InputText
                        placeholder="PickUp Point"
                        name={'pickup_point'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.pickup_point}
                        inputStyle={styles.inputStyle}
                    />
                    {errorObj.pickup_point ? (
                        <Text style={styles.error}>{errorObj.pickup_point}</Text>
                    ) : (
                        null
                    )}
                    <View style={{ marginTop: 20 }} />
                    <Components.InputText
                        placeholder="Drop Off Point"
                        name={'drop_of_point'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.drop_of_point}
                        inputStyle={styles.inputStyle}
                    />
                    {errorObj.drop_of_point ? (
                        <Text style={styles.error}>{errorObj.drop_of_point}</Text>
                    ) : (
                        null
                    )}
                    <View style={{ marginTop: 20 }} />
                    <Components.InputText
                        placeholder="Date"
                        name={'date'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.date}
                        inputStyle={styles.inputStyle}
                    />
                    {errorObj.date ? (
                        <Text style={styles.error}>{errorObj.date}</Text>
                    ) : (
                        null
                    )}
                    <View style={{ marginTop: 20 }} />
                    <Components.InputText
                        placeholder="Time"
                        name={'time'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.time}
                        inputStyle={styles.inputStyle}
                    />
                    {errorObj.time ? (
                        <Text style={styles.error}>{errorObj.time}</Text>
                    ) : (
                        null
                    )}
                    <View style={{ marginTop: 20 }} />
                    <Components.InputText
                        placeholder="Total Passenger"
                        name={'total_passenger'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.total_passenger}
                        inputStyle={styles.inputStyle}
                    />
                    {errorObj.total_passenger ? (
                        <Text style={styles.error}>{errorObj.total_passenger}</Text>
                    ) : (
                        null
                    )}
                    <View style={{ marginTop: 20 }} />
                    <Components.InputText
                        placeholder="Language No"
                        name={'language_no'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.language_no}
                        inputStyle={styles.inputStyle}
                    />
                    {errorObj.language_no ? (
                        <Text style={styles.error}>{errorObj.language_no}</Text>
                    ) : (
                        null
                    )}
                    <View style={{ marginTop: 20 }} />
                    <Components.InputText
                        placeholder="Pets"
                        name={'pets'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.pets}
                        inputStyle={styles.inputStyle}
                    />
                    {errorObj.pets ? (
                        <Text style={styles.error}>{errorObj.pets}</Text>
                    ) : (
                        null
                    )}
                    <View style={{ marginTop: 20 }} />
                    <Components.InputText
                        placeholder="Price"
                        name={'price'}
                        handleChange={(name, value) => handleChange(name, value)}
                        value={authObj.price}
                        inputStyle={styles.inputStyle}
                    />
                    {errorObj.price ? (
                        <Text style={styles.error}>{errorObj.price}</Text>
                    ) : (
                        null
                    )}
                    <View style={{ marginTop: 20 }} />
                    <Components.MainButton
                        title={'Submit'}
                        // btn_container_style={styles.btn_container_style}
                        handleNavigation={() => submitTaxiForm()}
                    />
                    <View style={{ marginVertical: 20 }}>
                        <Components.AdBanner />
                    </View>
                </View>
            </ScrollView>
            <Components.AlertModal
                modalVisible={modalVisible}
                closeModal={closeModal}
            >
                <View style={{ alignItems: 'center', paddingBottom: 30 }}>
                    {dataSaved ?
                        <>
                            <View style={[styles.icons, { backgroundColor: Global.light_green }]}>
                                <IonicIcon name='checkmark' size={35} color={Global.green_clr} />
                            </View>
                            <View style={{ margin: 15 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>You have successfully confirm your ride</Text>
                            </View>
                        </>
                        :
                        <>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>Are you sure you want to confirm the ride</Text>
                            </View>
                            <View style={styles.alertBtns}>
                                <Components.Gradient _style={styles.btn_container_style}>
                                    <TouchableOpacity
                                        onPress={() => setDataSaved(true)}
                                        style={{
                                            flex: 1,
                                            //  backgroundColor: 'red',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingHorizontal: 25,
                                        }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Confirm</Text>
                                    </TouchableOpacity>
                                </Components.Gradient>
                                <TouchableOpacity
                                    onPress={() => console.log('reject')}
                                    style={{
                                        flex: 1,
                                        backgroundColor: Global.inputs_clr,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingHorizontal: 25,
                                        borderRadius: 20,
                                        height: 45,
                                        width: 150,
                                        marginLeft: 10
                                    }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Reject</Text>
                                </TouchableOpacity>
                            </View>

                        </>
                    }
                </View>
            </Components.AlertModal>
        </Components.MainComponent>

    )
}

export default BookTaxi

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Global.inputs_clr,
        borderColor: Global.inputs_clr,
        height: 50,
        borderRadius: 100,
        borderWidth: 1,
        // marginHorizontal: 25
    },
    error:{
        textAlign: 'center',
        color: 'red',
    //   margin:5
    },
    alertBtns: {
        marginTop: 20,
        flexDirection: 'row',
        //alignItems: 'center',
        // justifyContent:'space-between'
    },
    btn_container_style: {
        // flex:1,
        borderRadius: 20,
        height: 45,
        width: 150
    },
    icons: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
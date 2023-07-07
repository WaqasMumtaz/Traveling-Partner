import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import Components from '../../Components';
import driver from '../../Assets/hands.png';
import Global from '../../Global';
import { useNavigation } from '@react-navigation/native';
import IonicIcon from 'react-native-vector-icons/Ionicons';

function PartnerIntroduction() {
    const navigation = useNavigation();
    const [videoModal, setVideoModal] = useState(false);


    const handleNavigation = () => {
        //navigation.navigate('SignUp');
        navigation.navigate('Login')

    }

    const handleVideoPlayer = () => {
        setVideoModal(false)
    }

    function visibleVideoModal() {
        setVideoModal(true)
    }

    return (
        <>
            <Components.TopLogo />
            <SafeAreaView style={{ flex: 1, backgroundColor: Global.white }}>
                {/* <View style={styles.logo_container}>
                    <Components.LogoComponent src={driver_intro} />
                </View> */}
                <View style={styles.body}>
                    <View style={styles.body_1}>
                        <Components.RoundIcon icon={driver} _style={{ height: 80 }} />
                        <Components.Heading heading='Partner Introduction' />
                        <View style={{ marginTop: 3 }}>
                            <Components.Paragraph para={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac vestibulum`} />
                        </View>
                    </View>

                    <View style={styles.body_2}>
                        <Components.TaxiGroup
                            _style={{ alignItems: 'center', justifyContent: "center" }}
                        >
                            <Components.PlayButton playBtn={visibleVideoModal} />
                        </Components.TaxiGroup>

                    </View>
                
                    <Components.SkipButton
                        handleSkip={handleNavigation}
                        _style={{ flex: 0.3 }}
                    />
                    <Components.AdBanner />
                </View>
                <Components.VideoPlayerModal
                    visible={videoModal}
                    handleVideoPlayer={handleVideoPlayer}
                />
            </SafeAreaView>
        </>
    )
}

export default PartnerIntroduction;

const styles = StyleSheet.create({
    logo_container: {
        flex: 1.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        //backgroundColor:'red',
        // marginTop: '35%',
        marginHorizontal: 20
    },
    body_1: {
        flex: 1.5,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body_2: {
        flex: 1,
        // backgroundColor: 'green'
    },
    // body_3: {
    //     flex: 0.2,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     // backgroundColor:'pink'
    // },
    body_4: {
        flex: 0.6,
        backgroundColor: 'blue'
    }
})
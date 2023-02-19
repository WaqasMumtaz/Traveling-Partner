import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import Components from '../../Components'
import Global from '../../Global'
import taxi from '../../Assets/icon-taxi.png';

const Help = () => {
    return (
        <Components.MainComponent>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Components.Heading3 title={'Help'} />
                </View>
                <View style={styles.cardContainer}>
                    <View style={[styles.card, styles.shadowProp]}>
                        <Components.Gradient _style={styles.circle}>
                            <Image source={taxi} style={styles.icon} resizeMode='contain' />
                        </Components.Gradient>
                        <View style={{ margin: 15 }}>
                            <Text style={{ color: Global.gray_color }}>Support related to your recent commute</Text>
                        </View>
                        <View style={{ margin: 2 }} />
                        <Components.Gradient _style={styles.help}>
                            <TouchableOpacity style={[styles.help, { padding: 10, paddingHorizontal: 15 }]}>
                                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>View Help Center</Text>
                            </TouchableOpacity>
                        </Components.Gradient>
                    </View>
                </View>
                <View style={{margin:12}}>
                    <Components.Heading4 title={'Support Inbox'} />
                    <Components.Heading4 title={'Learn More'} />

                </View>

            </ScrollView>
        </Components.MainComponent>
    )
}

export default Help

const styles = StyleSheet.create({
    card: {
        // flex:1,
        height: 200,
        marginHorizontal: 12,
        width: '80%',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: Global.borderLine,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadowProp: {
        backgroundColor: Global.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    circle: {
        height: 60,
        width: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: 40,
        width: 40
    },
    help: {
        //  marginTop:10,
        // alignItems:'center',
        // justifyContent:'center',
        borderRadius: 100
    }
})
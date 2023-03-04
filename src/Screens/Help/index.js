import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, } from 'react-native'
import Components from '../../Components'
import Global from '../../Global'
import taxi from '../../Assets/icon-taxi.png';
import box from '../../Assets/ListIcons/box.png';
import delivery from '../../Assets/ListIcons/delivery.png';
import security from '../../Assets/ListIcons/security.png';
import car from '../../Assets/ListIcons/taxi.png';
import icon from '../../Assets/mainIcon.png';


const Help = () => {

    const data = [
        {
            id: 1,
            title: 'Car',
            icon: () => <Logo src={car} />
        },
        {
            id: 2,
            title: 'Delivery',
            icon: () => <Logo src={delivery} />
        },
        {
            id: 3,
            title: 'Traveling Partner Pay',
            icon: () => <Logo src={car} />
        },
        {
            id: 4,
            title: 'Safety & Security',
            icon: () => <Logo src={security} />
        }
    ]

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
                <View style={{ margin: 15, marginTop: 20 }}>
                    <Components.Heading4 title={'Support Inbox'} />
                    <Components.List
                        logo={() => <Logo src={box} />}
                        title='Read Messages'
                    />
                    <Components.Heading4 title={'Learn More'} />
                    {data.map((items, indx) => {
                        return (
                            <View key={indx} style={styles.borderLine}>
                                <Components.List
                                    logo={items.icon}
                                    title={items.title}
                                />
                            </View>
                        )
                    })}
                    <FooterComponent />
                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Components.AdBanner />
                    </View>
                </View>

            </ScrollView>
        </Components.MainComponent>
    )
}

export default Help;

const Logo = ({ src }) => (<Image source={src} style={{ height: 25, width: 25 }} resizeMode='contain' />)
const FooterComponent = () => {
    return (
        <View style={styles.bottomCardContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                <View style={styles.helpLogo}>
                    <Image source={icon} style={styles.helpLogo} resizeMode='contain' />
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                    <Text style={styles.textStyle}>You have an outstanding payment</Text>
                    <Text style={[styles.textStyle, {fontWeight:'bold'}]}>PKR 320</Text>
                </View>
                <Components.Gradient
                    _style={styles.btn}
                >
                    <TouchableOpacity style={styles.btn}>
                        <Text>View</Text>
                    </TouchableOpacity>
                </Components.Gradient>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    bottomCardContainer: {
        flex: 1,
        marginVertical: 15,
        backgroundColor: Global.light_gray,
        borderRadius: 10
    },
    textStyle:{
        fontSize:12
    },
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
    },
    borderLine: {
        borderBottomColor: Global.light_gray,
        borderBottomWidth: 2
    },
    helpLogo: {
        height: 80,
        width: 80,
        borderRadius: 100
    },
    btn: {
        paddingHorizontal: 10,
        padding: 3,
        borderRadius: 100
    }
})
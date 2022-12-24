import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Global from '../../Global'
import Gradient from '../GradientBG';
import home from '../../Assets/Icons/home.png';
import help from '../../Assets/Icons/help.png';
import activity from '../../Assets/Icons/activity.png';
import chat from '../../Assets/Icons/chat.png';
import user from '../../Assets/Icons/user.png';
import IonicIcon from 'react-native-vector-icons/Ionicons';


const BottomTabs = () => {
    return (
        <Gradient _style={{height:65}}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.form}>
                    <Image source={chat} style={styles.icons} />
                    <Text style={styles.title}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.form}>
                    <Image source={help} style={styles.icons} />
                    <Text style={styles.title}>Help</Text>
                </TouchableOpacity>
                <View style={{ position: 'relative' }}>
                    <View style={styles.homeContainer}>
                        <TouchableOpacity style={styles.homeCircle}>
                            <IonicIcon name='home-outline' size={25} color={Global.white} />
                            {/* <Image source={home} style={{width:26,height:26}}/> */}
                            <Text style={{ color: Global.white, fontSize: 12, margin: 3 }}>Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.form}>
                    <Image source={activity} style={styles.icons} />
                    <Text style={styles.title}>Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.form}>
                    <Image source={user} style={styles.icons} />
                    <Text style={styles.title}>Profile</Text>
                </TouchableOpacity>
            </View>
        </Gradient>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    homeContainer: {
        zIndex: 1,
        // position:'absolute', 
        backgroundColor: Global.white,
        height: 75,
        width: 75,
        borderRadius: 75 / 2,
        bottom: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeCircle: {
        backgroundColor: Global.black_clr,
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icons: {
        height: 27,
        width: 27
    },
    title:{
     fontSize:11,
     fontWeight:'bold',
     marginTop:3
    },
    form:{
        justifyContent:'center',
        alignItems:'center',
    }
})
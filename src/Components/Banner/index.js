import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Global from '../../Global';
import banner_img from '../../Assets/banner_img.png';
import Gradient from '../GradientBG';

const Banner = ({ name, place, price , time,  }) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                <Image source={banner_img} style={{}} resizeMode='cover'/>
                <View style={{flex:1,marginLeft:10}}>
                   <Text>Jasmeen Altaf</Text>
                   <View style={{flexDirection:'row', alignItems:'center', marginTop:3}}>
                       <Gradient _style={{borderRadius:7, paddingHorizontal:10,}}>
                        <Text>khi - Bwp</Text>
                       </Gradient>
                       <Gradient _style={{marginLeft:8, borderRadius:7, paddingHorizontal:10}}>
                        <Text>10 hr 50 min</Text>
                       </Gradient>
                   </View>
                </View>
            </View>
            <View style={{alignItems:'flex-end'}}>
                <View>
                    <Text>Rs 45000.00</Text>
                </View>
                <View>
                    <Text style={{color:Global.gray_color}}>829.5 km</Text>
                </View>
            </View>
            {/* <Text>Banner</Text> */}
        </View>
    )
}

export default Banner

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Global.light_gray,
        // margin:10,
        padding:12,
        marginHorizontal: 16,
        borderRadius: 5,
        // height: 60
    },
    img:{
        height:40,
        width:40
    }
})
import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import Gradient from '../GradientBG'
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Global from '../../Global';

const PlayButton = () => {
    return (
        <Gradient _style={styles.playBtnContainer}>
            <TouchableOpacity style={styles.playBtn}>
                <IonicIcon name='play-outline' size={35} color={Global.black_clr} />
            </TouchableOpacity>
        </Gradient>
    )
}

export default PlayButton

const styles = StyleSheet.create({
    playBtnContainer: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        alignSelf:'center'
    },
    playBtn: {
        flex:1,
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        alignItems:'center',
        justifyContent: 'center',
    }
})
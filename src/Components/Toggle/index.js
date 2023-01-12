import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Global from '../../Global'
import Gradient from '../GradientBG'

const Toggle = ({ title_1, title_2, selectedValue, hanldeClick }) => {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
                style={selectedValue !== title_1 ? styles.unSelectedLeftBtn : { flex: 1.3}}
                onPress={() => hanldeClick(title_1)}
            >
                {selectedValue === title_1 ?
                    <Gradient _style={styles.selectedBtnLeft}>
                        <Text>{title_1}</Text>
                    </Gradient>
                    :
                    <Text>{title_1}</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity
                style={selectedValue !== title_2 ? styles.unSelectedRightBtn : { flex: 1.3 }}
                onPress={() => hanldeClick(title_2)}

            >
                {selectedValue === title_2 ?
                    <Gradient _style={styles.selectedBtnRight}>
                        <Text>{title_2}</Text>
                    </Gradient>
                    :
                    <Text>{title_2}</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default Toggle

const styles = StyleSheet.create({
    selectedBtnLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        padding: 15,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100
    },
    selectedBtnRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        padding: 15,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100
    },
    unSelectedLeftBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        padding: 15,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        backgroundColor: Global.inputs_clr
    },
    unSelectedRightBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        padding: 15,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: Global.inputs_clr

    }
})
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Global from '../../Global'
import Icon from '../Icon'

const List = ({ logo, title }) => {
    return (
        <TouchableOpacity style={styles.mainContainer}>
            <View style={{margin:15}}>
                {logo && logo()}
            </View>
            <View style={{ flex: 1 }}>
                <Text>{title}</Text>
            </View>
            <Icon
                type={'Ionicons'}
                name={'chevron-forward-outline'}
                size={20}
                color={Global.black_clr}
            />
        </TouchableOpacity>
        // <ion-icon name="chevron-forward-outline"></ion-icon>
    )
}

export default List

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
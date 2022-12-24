import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import BottomTabs from '../BottomTabs';
import TopLogo from '../TopLogo';
import Global from '../../Global';



const MainComponent = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TopLogo />
            <View style={{ flex: 1, backgroundColor: Global.main_color }}>
                <View style={styles.borderFullContainer}>
                      {children}
                </View>
                <BottomTabs />
            </View>
        </SafeAreaView>
    )
}

export default MainComponent

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    borderFullContainer:{
        flex: 1, 
        backgroundColor: Global.white,
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 25
    }
})
import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Components from "../../Components";
import Global from "../../Global";

function ProfileScreen() {

    const data = [
        'Basic Info',
        'Vehicle Info',
        'Places & Address',
        'Driver Availability',
        'Rider Become A Captain',
        'Rate This App',
        '---------------',
        'How it Works ?',
        'Terms',
        'Privacy Policy',
        'Sign Out'
    ];

    const renderItem = ({ item }) => (
        <Components.Gradient _style={[styles.item, { marginVertical: 5 }]}>
            <TouchableOpacity style={{flex:1, padding: 15 }}>
                <Text style={styles.title}>{item}</Text>
            </TouchableOpacity>
        </Components.Gradient>
    );

    return (
        <Components.MainComponent>
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Components.Heading3 title={'Profile'} />
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={() => <View style={{ margin: 3 }} />}
                    ListFooterComponent={() => 
                    <View style={{flex:1, marginVertical:15, marginBottom:20}}>
                        <Components.AdBanner />
                    </View>
                   }
                />
            </View>
        </Components.MainComponent>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    item: {
        flex: 1,
        borderRadius:100
    },
    title: {
        fontSize: 16,
        fontWeight:'bold'
    },
});

export default ProfileScreen;

import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import Components from '../../Components'
import Global from '../../Global'
import icon from '../../Assets/mainIcon.png';
import user from '../../Assets/user.png';

const ChatInbox = () => {
    const [form, setForm] = useState({
        search: ''
    })
    const [errorObj, setErrorObj] = useState({
        search: ''
    })

    function handleChange(name, value) {
        setForm({
            ...form,
            [name]: value
        })
    }

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'Muzammil',
            time: '1 min ago',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: 'Imran Ali',
            time: '2 min ago',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Basit Ali',
            time: '5 min ago',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d75',
            name: 'Sherry',
            time: '6 min ago',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d78',
            name: 'Furrqan',
            time: '8 min ago',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',
            name: 'Farooq',
            time: '10 min ago',
            message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'

        },
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listItemContainer}>
                <View style={styles.helpLogo}>
                    <Image source={user} style={styles.helpLogo} resizeMode='contain' />
                </View>
                <View style={{flex:1, margin: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                        </View>
                        <View>
                            <Text>{item.time}</Text>
                        </View>
                    </View>
                    <View style={{ flex:1 }}>
                        <Text>{item.message}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View style={{ alignItems: 'center' }}>
                <Components.Heading3 title={'Inbox'} />
            </View>
            <View style={styles.mainContainer}>
                <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Components.InputText
                            placeholder="Search here"
                            icon={'search-outline'}
                            name={'search'}
                            handleChange={(name, value) => handleChange(name, value)}
                            value={form.search}
                        />
                    </View>
                    <View style={styles.circle}>
                        <Components.Icon
                            type={'Ionicons'}
                            name='add-outline'
                            size={25}
                            color={Global.black_clr}
                        />
                    </View>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListFooterComponent={() => <FooterComponent />}
                    ItemSeparatorComponent={() => <View style={styles.line} />}
                />
            </View>
        </>
    )
}

export default ChatInbox

const FooterComponent = () => {
    return (
        <View style={{ flex: 1, margin: 15 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                <View style={styles.helpLogo}>
                    <Image source={icon} style={styles.helpLogo} resizeMode='contain' />
                </View>
                <Text style={{ margin: 10 }}>Chat with help center</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, marginTop: 10 }}>
                <Components.AdBanner />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor:'red',
        marginHorizontal: 15
    },
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        marginHorizontal: 15,
        margin: 5,
        borderWidth: 1,
        borderColor: Global.inputs_clr
    },
    circle: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Global.inputs_clr
    },
    helpLogo: {
        height: 60,
        width: 60,
        borderRadius: 100
    }
})
import React, { useState } from "react";
import { View, Text } from "react-native";
import ChatInbox from "./InboxList";
import Components from "../../Components";

export default function Chat() {
    const [screen, setScreen] = useState(0);

    return (
        <Components.MainComponent>
            {screen == 0 && <ChatInbox/>}
            {/* <View style={styles.mainContainer}>
                   <Text>FlatList Screen</Text>
            </View>
            <View style={{ margin: 15 }}>
                <Components.AdBanner />
            </View> */}
        </Components.MainComponent>
    )
}

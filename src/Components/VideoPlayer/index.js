import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    StyleSheet,
    Modal,
    Animated,
    Platform
} from 'react-native';
 import VideoPlayer from 'react-native-video-controls';
import Global from '../../Global';
import IonicIcon from 'react-native-vector-icons/Ionicons';
// import VideoPlayer from 'react-native-video-player';

export default function VideoPlayerModal({ visible, handleVideoPlayer }) {
    return (
        <Modal
            //   transparent={true}
            visible={visible}
            onRequestClose={() => {
                handleVideoPlayer();
            }}>
            {/* <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => handleVideoPlayer()} style={{ margin: 10 }}>
                    <IonicIcon name='chevron-back-outline' color={Global.black_clr} size={25} />
                </TouchableOpacity> */}
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    {/* <VideoPlayer
                        video={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                        videoWidth={1600}
                        videoHeight={900}
                    // thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                    /> */}
                    <VideoPlayer
                    //source={{ uri: Global.video_url }}
                     source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}

                    //disableVolume
                    // disableSeekbar
                   // disableFullscreen
                    //disableTimer
                    //tapAnywhereToPause
                    onBack={() => handleVideoPlayer()}
                    onEnd={() => handleVideoPlayer()}
                />
                </View>
            {/* </View> */}
        </Modal>
    )
}


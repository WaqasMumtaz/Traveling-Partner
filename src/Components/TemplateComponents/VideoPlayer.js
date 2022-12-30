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

export default function VideoPlayer({visible, closeModal}) {
    return (
        <Modal
          //   transparent={true}
          visible={true}
          onRequestClose={() => {
            setVideoModal(false);
          }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <VideoPlayer
              source={{ uri: video }}
              // source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}

              disableVolume
              // disableSeekbar
              disableFullscreen
              disableTimer
              tapAnywhereToPause
              onBack={() => setVideoModal(false)}
              onEnd={() => setVideoModal(false)}
            />
          </View>
        </Modal>
    )
}


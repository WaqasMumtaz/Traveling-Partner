import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Global from '../../Global';
export const SKELETON_SPEED = 1500;
export const SKELETON_BG = Global.inputs_clr;
export const SKELETON_HIGHLIGHT = '#e7e7e7';
export const MAX_RATING_DEVIATION = 200;
const { width, height } = Dimensions.get('window');

const SkeltonLoader = ({ SkeltonLoading }) => {
  return (
    <SkeletonPlaceholder
      speed={SKELETON_SPEED}
      backgroundColor={SKELETON_BG}
      highlightColor={SKELETON_HIGHLIGHT}>
      <View style={{ width: 70 }}>
        <View style={styles.imgLoaderStyle1} />
        <View style={styles.imgLoaderStyle} />
        <View style={[styles.imgLoaderStyle, {width:35}]} />
        <View style={[styles.imgLoaderStyle, {width:35}]} />
      </View>
    </SkeletonPlaceholder>
  )
}

export default SkeltonLoader

const styles = StyleSheet.create({
  skeltonImageView: {
    width: 70,
    margin: 5,
    borderWidth: 0,
    borderRadius: 70,
    height: 40,
  },
  imgLoaderStyle1: {
    borderWidth: 3,
    width: 70,
    margin: 3,
    borderRadius: 100
  },
  imgLoaderStyle: {
    borderWidth: 3,
    width: 70,
    margin: 3,
    borderRadius: 100
  },


})
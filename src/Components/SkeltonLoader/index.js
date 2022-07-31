import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
export const SKELETON_SPEED = 1500;
export const SKELETON_BG = '#dddddd';
export const SKELETON_HIGHLIGHT = '#e7e7e7';
export const MAX_RATING_DEVIATION = 200;
const {width, height} = Dimensions.get('window');

const SkeltonLoader = ({ SkeltonLoading }) => {
  return (
    <SkeletonPlaceholder
    speed={SKELETON_SPEED}
    backgroundColor={SKELETON_BG}
    highlightColor={SKELETON_HIGHLIGHT}>
      <View style={{width:70}}>
     <View style={styles.imgLoaderStyle1}/>
     <View style={styles.imgLoaderStyle}/>
     <View style={styles.imgLoaderStyle}/>
     <View style={styles.imgLoaderStyle}/>
    </View>
      {/* <View style={styles.skeltonImageView} /> */}
    {/* <View
      style={[
        styles.skeltonChangePasswordView,
        {top: moderateScale(30), height: height * 0.06},
      ]}
    />
    <View
      style={[
        styles.skeltonMainView,
        {
          width: width * 0.95,
          height: height * 0.06,
          top: moderateScale(250),
          borderRadius: moderateScale(25),
        },
      ]}
    /> */}
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
      imgLoaderStyle1:{
        borderWidth:8,
        width:70,
        margin:3,
        borderRadius:100
      },
      imgLoaderStyle:{
        borderWidth:3,
        width:70,
        margin:3,
        borderRadius:100
      },


})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActionSheet from 'react-native-actionsheet';


const BottomSheet = ({ actionSheet , optionArray , selectedItem}) => {
  return (
    <ActionSheet
    styles={styles.titleBox}
    ref={actionSheet}
    title={'Which one do you like ?'}
    options={optionArray}
    cancelButtonIndex={optionArray?.lastIndexOf('Cancel')}
    // destructiveButtonIndex={0}
    onPress={(index) =>
      selectedItem(index)
    }
  />
  )
}

export default BottomSheet

const styles = StyleSheet.create({
    titleBox: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
      },
})
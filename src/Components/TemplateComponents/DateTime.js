import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTime = ({isVisible,mode, handleConfirm, hideDatePicker}) => {
  return (
    <DateTimePickerModal
        isVisible={isVisible}
        mode={mode}
        onConfirm={(value)=> handleConfirm(value)}
        onCancel={()=> hideDatePicker()}
      />
  )
}

export default DateTime

const styles = StyleSheet.create({})
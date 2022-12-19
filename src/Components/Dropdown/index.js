import React, { useState } from 'react';
import { View, StyleSheet, Platform, Text, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Global from '../../Global';

export default function DropDown({
  placeholder,
  list,
  onChange,
  value,
  noTitle,
  searchable,
  multiple,
  disabled,
  multipleText,
  selected,
  multiValue,
  open,
  setOpen,
  zIndex,
  dropDownMaxHeight,
  mainContainer_style,
  style,
  labelStyle,
  listMode,
  arrowIconStyle,
  translation,
  placeholderStyle,
  placeholderClr,
  setItems,
  badge,
  icon
}) {

  
  return (
     <View
      style={{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        // marginTop: 5,
        ...(Platform.OS !== 'android' && {
          zIndex: 5000,
        })
      }}
    >
       {icon && (
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.iconStyle}/>
        </View>
       )}
       <DropDownPicker
        items={list}
        placeholder={placeholder}
        containerStyle={[mainContainer_style ? mainContainer_style : { 
          // height:45, 
          // margin: 5, 
          // marginTop: 1
        }]}
        style={[style ? style : { borderColor:'lightgray' }]}
        //dropDownMaxHeight={dropDownMaxHeight ? dropDownMaxHeight: 120}
        maxHeight={dropDownMaxHeight }
        value={value}
        defaultValue={value}
        min={0}
        max={5}
        multipleText={multipleText}
        //dropDownMaxHeight={150}
        open={open}
        setOpen={setOpen}
        setValue={onChange}
        disabled={disabled}
        searchable={searchable === true}
        setItems={multiple ? setItems : null}
        multiple={multiple}
        selected={selected}
        labelStyle={labelStyle ? labelStyle : null}
        listMode={listMode ? listMode : 'DEFAULT'}
        arrowIconStyle={{...arrowIconStyle}}
        translation={{
          PLACEHOLDER:translation ? translation : '',
        }}
        placeholderStyle={{...styles.placeholder, ...placeholderStyle}}
        // dropDownContainerStyle={{
        //   backgroundColor:'red',
        //   borderColor:'red',
        //   borderWidth:2
        // }}
        mode={badge ? "BADGE" : "SIMPLE"}
        disabledItemLabelStyle={{
          opacity: 0.5
        }}
        disabledStyle={{
          opacity: 0.5
        }}
        
      /> 
   </View>
    
  );
}

const styles = StyleSheet.create({
  placeholder:{
    //  color:'green'
  },
  iconContainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Global.inputs_clr,
    borderLeftWidth:1,
    borderLeftColor:Global.inputs_clr,
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    height:50,
    width:50
  },
  iconStyle:{
    height:20,
    width:20,
    // backgroundColor:'transparent'
  }
})


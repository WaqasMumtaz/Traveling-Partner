import React from 'react';
import { TextInput, StyleSheet, View, Text , TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Global from './../../Global';


export default function InputText({
  placeholder,
  error,
  icon,
  icon2,
  secureTextEntry = false,
  handleChange,
  name,
  value,
  multiple,
  editable = true,
  keyboardType,
  onPress,
  inputStyle,
  multiLine,
  sizeIcon
}) {
  return (
    <View style={[ styles.inputStyle]}>
      {/* {icon && <Icon name={icon} iconStyle={styles.searchIcon} />} */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(searchString) => handleChange(name, searchString)}
        underlineColorAndroid="transparent"
        placeholderTextColor={Global.gray_color}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        multiple={multiple}
        noOfLines={4}
        editable={editable}
        multiline={multiLine}
      />
      {/* {icon2 && <IonicIcon name={icon2} style={styles.infoIconStyle} size={sizeIcon}/>} */}
      {placeholder === 'Password' && (
      <TouchableOpacity onPress={()=> onPress()} style={styles.passEye}>
        <Icon5 name={secureTextEntry == true ? 'eye-slash' : 'eye'} color={Global.inputFieldPlaceHolder} size={20}/>
      </TouchableOpacity>
      )}
      
    </View>
  );
}

let styles = StyleSheet.create({
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Global.white,
    borderColor:Global.border_color,
    height: 50,
    borderRadius: 100,
    borderWidth:1
    // margin:25
  },
  passEye:{
    margin: 10,
    color: Global.gray_color,
  },
  searchIcon: {
    padding: 10,
    color: Global.inputFieldPlaceHolder,
    marginLeft: 1,
  },
  infoIconStyle:{
    padding: 10,
    color: Global.main_color,
    marginLeft: 1,
  },
  input: {
    flex: 1,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    marginLeft: 5,
    height:50,
    borderRadius:100
    //backgroundColor:'red',
    // borderTopLeftRadius: 4,
    // borderBottomLeftRadius: 4,
    // color: '#424242',
  },
});

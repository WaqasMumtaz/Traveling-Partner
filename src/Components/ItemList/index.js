import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import Icon from '../Icon'

const ItemList = ({icon, des, title, _icon }) => {
  return (
    <TouchableOpacity style={styles.container}>
        {icon && 
         <Icon
          type={'Ionicons'}
         />
        }
    </TouchableOpacity>
  )
}

export default ItemList

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    }
})
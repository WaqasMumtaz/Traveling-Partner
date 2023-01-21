import React from 'react';
import { CheckBox } from 'react-native-elements';
import { View } from 'react-native';
import Global from '../../Global';

export default function Checkbox({ title, value, onChange , disabled, }) {
    //  console.log('checkbox value Component ****', title)
  return (
    <View style={{ margin: 5 }}>
      <CheckBox
        title={title}
        checked={value}
        onPress={() => onChange(value)}
        containerStyle={{ backgroundColor: 'white', borderWidth: 0, padding: 0,  }}
        checkedColor={Global.main_color}
        disabled={disabled}
      />
    </View>
  );
}

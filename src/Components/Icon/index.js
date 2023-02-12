import React from 'react'
import { icons } from '../TemplateComponents/VectorIcons'

const Icon = (props) => {
    const { type, name, color, size, style } = props;
    const MyIcon = icons[type];
    return (
        <MyIcon
            name={name}
            color={color}
            style={style}
            size={size}
        />
    )
}

export default Icon
import { Text,Button as ButtonBase } from "native-base";
import PropTypes from 'prop-types';
import React from 'react'

export default function Button(props) {
    let {button,i,onPressButtonClick} = props
    return (
        <ButtonBase key={i} colorScheme={button.styleColor} onPress={()=>onPressButtonClick(i)}>
            <Text color="white">{button.text}</Text>
        </ButtonBase>
    )
}

Button.propTypes = {
    button:PropTypes.string,
    i:PropTypes.number,
    onPressButtonClick:PropTypes.func
}
import React from 'react'
import {Text} from "native-base";
import PropTypes from 'prop-types';


export default function Title(props) {
    const {color} = props
  return (
    <Text fontSize='lg' _light={{color:`${color.styleColor}.500`}}>Prueba Básica</Text>
  )
}

Title.propTypes = {
    color: PropTypes.object
}
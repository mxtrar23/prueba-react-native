import React from 'react'
import PropTypes from 'prop-types';
import { Text ,Modal as ModalNative, Button } from "native-base";


export default function Modal(props) {
    let {color,openModal,setOpenModal} = props;

  return (
    <ModalNative isOpen={openModal} onClose={()=>setOpenModal(false)}>
        <ModalNative.Content>
            <ModalNative.Body>
                <Text>{`señor usuario el color de la pantalla ha cambiado a ${color.value}`}</Text>
            </ModalNative.Body>
            <ModalNative.Footer>
                <Button onPress={()=>setOpenModal(false)}>
                    <Text  color="white">Cerrar</Text>
                </Button>
            </ModalNative.Footer>
        </ModalNative.Content>
    </ModalNative>
  )
}

Modal.prototype = {
    color:PropTypes.object,
    openModal:PropTypes.object,
    setOpenModal:PropTypes.func
}
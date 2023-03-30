import React,{useState} from 'react'
import { Box } from "native-base";
import ListButton from '../utils/ListButtons';
import Button from '../components/Button';
import Title from '../components/Title';
import Modal from '../components/Modal';



export default function Main() {

    const [color, setColor] = useState('black')
    const [openModal, setOpenModal] = useState(false)

    const onPressButtonClick = (i) => {
        setColor(ListButton[i])
        setOpenModal(true)
    }

    return (
    <>
        <Modal color={color} openModal={openModal} setOpenModal={setOpenModal}/>
        <Box margin={1} >
            <Title color={color} />
        </Box>
        <Box margin={1} flexDirection="row">
        {
            ListButton.map((button,i)=>(
                <Box marginX={2} key={i}>
                    <Button button ={button} i={i} onPressButtonClick={onPressButtonClick} />
                </Box>
            ))
        }
        </Box>
    </>
    )
}
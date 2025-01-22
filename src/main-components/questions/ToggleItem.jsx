import { Box, Stack, Typography } from "@mui/material"
import { useState } from "react"
import ButtonToggle from "./ButtonToggle"
import useScreenSizes from "../../hooks/ScreenSizes"

const ToggleItem = ({question, answer}) => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const [toggle, setToggle] = useState(false)
  return (
    <Box height='auto' width='100%' borderBottom='1px solid grey' my='1rem'>
        <Stack height='auto' width='100%' color='#000000' justifyContent='center'>
             <Stack direction='row' justifyContent='space-between' >
                <Typography width='auto' fontWeight='500' fontSize={smScreen ? '16px' : '22px'}>
                     {question}</Typography>
                   <ButtonToggle toggle={toggle} setToggle={setToggle}/>
             </Stack>
             {
                toggle && <Box height='auto' width='70%' my='0.5rem'>
                              <Typography fontSize={smScreen ? '12px' : mdScreen ? '14px' : '16px'} lineHeight='1.8rem' color="rgba(27, 26, 26, 0.75)">
                                  {answer}</Typography>
                          </Box>
             }
        </Stack>
    </Box>
  )
}

export default ToggleItem

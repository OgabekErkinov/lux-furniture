import { Box, Stack, Typography } from "@mui/material"

import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import Logo from "./Logo"
import Languages from "./Languages"
import SocialNetworks from "./SocialNetworks"
import WorkTime from "./WorkTime"
import useScreenSizes from "../../hooks/ScreenSizes"



const Contact = () => {
  const {xlgScreen} = useScreenSizes()
     
  return (
    <Box height='120px' width='100%' padding='16px' display='grid' gridTemplateColumns={xlgScreen ? '1fr 2fr' : '1fr' } alignItems='center' gap='0.5rem'
         color='black' borderBottom='1px solid grey'>
        <Logo/>
        <Stack direction='row'>
            <Languages/>    
            
               <SocialNetworks/>
               <WorkTime/>
            </Stack>
        </Stack>     
    </Box>
    
  )
}

export default Contact

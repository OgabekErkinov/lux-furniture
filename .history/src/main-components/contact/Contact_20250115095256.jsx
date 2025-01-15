import { Box, Stack, Typography } from "@mui/material"

import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import Logo from "./Logo"
import Languages from "./Languages"
import SocialNetworks from "./SocialNetworks"
import WorkTime from "./WorkTime"



const Contact = () => {
     
  return (
    <Box height='120px' width='100%' padding='16px' display='grid' gridTemplateColumns='1fr 2fr' alignItems='center' gap='0.5rem'
         color='black' borderBottom='1px solid grey' boxSizing='border-box'>
        <Logo/>
        <Stack direction='row'>
        <Languages/>    
        <Stack direction='row' height='100%' width='100%' justifyContent='center'>
           <SocialNetworks/>
           <WorkTime/>
           

       </Stack>

        </Stack>
        
    </Box>
    
  )
}

export default Contact

import { Box, Stack, Typography } from "@mui/material"

import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import Logo from "./Logo"
import Languages from "./Languages"
import SocialNetworks from "./SocialNetworks"
import WorkTime from "./WorkTime"



const Contact = () => {
     
  return (
    <Box height='120px' width='100%' padding='16px' display='grid' gridTemplateColumns='1fr 1fr 2fr' justifyContent='space-between' alignItems='center'
         color='black' borderBottom='1px solid grey' boxSizing='border-box'>
        <Logo/> 
        <Languages/>    
       <Stack direction={{sm : 'column', md : 'row'}} height='100%' width={{sm : '100%', md : '80%'}} 
              justifyContent='flex-end' gap='0.5rem'>
           <SocialNetworks/>
           <WorkTime/>
           

       </Stack>
    </Box>
    
  )
}

export default Contact

import { Box, Button, Stack, Typography } from "@mui/material"

import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import Logo from "./Logo"
import Languages from "./Languages"
import SocialNetworks from "./SocialNetworks"
import WorkTime from "./WorkTime"
import useScreenSizes from "../../hooks/ScreenSizes"
import { MenuOpenOutlined } from "@mui/icons-material"



const Contact = () => {
  const {xlgScreen} = useScreenSizes()
     
  return (
    <Box height='auto' width='100%' padding='16px' display='grid' gridTemplateColumns={xlgScreen ? '1fr 2fr' : '1fr' } alignItems='center' gap='0.5rem'
         color='black' borderBottom='1px solid grey'>
        <Box display='flex' justifyContent='space-between'>
            <Logo/>
            <Button disableTouchRipple sx={{display : xlgScreen ? 'none' : 'block'}}>
               <MenuOpenOutlined sx={{height : '40px', width : '40px'}}/>
            </Button>
        </Box>
        <Box display='grid' gridTemplateColumns='1fr 1fr 1fr' alignItems='' >
        {!xlgScreen && <SocialNetworks/>}
            <Languages/>    
             {xlgScreen && <SocialNetworks/>}
             <WorkTime/>

        </Box>    
    </Box>
    
  )
}

export default Contact

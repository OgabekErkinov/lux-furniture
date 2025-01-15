import { Box, Button, Portal, Stack, Typography } from "@mui/material"

import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import Logo from "./Logo"
import Languages from "./Languages"
import SocialNetworks from "./SocialNetworks"
import WorkTime from "./WorkTime"
import useScreenSizes from "../../hooks/ScreenSizes"
import { MenuOpenOutlined } from "@mui/icons-material"
import { useState } from "react"
import MobileMenu from "../modals/MobileMenu"



const Contact = () => {
  const {xlgScreen} = useScreenSizes()
  const [isMobileMenu, setIsMobileMenu] = useState(false)
     
  return (
    <Box height={xlgScreen ? '10rem' : 'auto'} width='100%' mx='auto' padding='16px' display='grid' gridTemplateColumns={xlgScreen ? '1fr 2fr' : '1fr' } alignItems='center' gap='0.5rem'
         color='black' borderBottom='1px solid grey'>
        <Box display='flex' justifyContent='space-between' width='100%'>
            <Logo/>
            <Button disableTouchRipple sx={{display : xlgScreen ? 'none' : 'block'}} onClick={() => setIsMobileMenu(true)}>
               <MenuOpenOutlined sx={{height : '40px', width : '40px'}}/>
            </Button>
        </Box>
        <Box display='grid' gridTemplateColumns='1fr 1fr 1fr' alignItems='center' width='100%' gap='8px' >
        {!xlgScreen && <SocialNetworks/>}
            <Languages/>    
             {xlgScreen && <SocialNetworks/>}
             <WorkTime/>

        </Box>  
        {
          isMobileMenu &&  <Portal container={document.getElementById('root')}>
                              <MobileMenu setIsMobileMenu = {setIsMobileMenu}/>     
                         </Portal>
        }  
    </Box>
    
  )
}

export default Contact

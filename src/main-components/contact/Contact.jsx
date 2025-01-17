import { Box, Button, Portal, Stack, Typography } from "@mui/material"

import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import Logo from "./Logo"
import Languages from "./Languages"
import SocialNetworks from "./SocialNetworks"
import WorkTime from "./WorkTime"
import useScreenSizes from "../../hooks/ScreenSizes"
import { Menu, MenuBookOutlined, MenuOpenOutlined } from "@mui/icons-material"
import { useEffect, useState } from "react"
import MobileMenu from "../modals/MobileMenu"



const Contact = () => {
  const {xlgScreen} = useScreenSizes()
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  
  return (
    <Box height={xlgScreen ? '12rem' : 'auto'} width='100%' color='black' py='16px'>
      <Box height='100%' width='100%' px = '8px' display='grid' gridTemplateColumns={xlgScreen ? '1.5fr 2fr' : '1fr' } 
           alignItems='center' borderBottom='1px solid grey'>
        <Box display='flex' justifyContent='space-between' alignItems='center' p='12px' width='100%'>
            <Logo/>
            <Button disableTouchRipple sx={{display : xlgScreen ? 'none' : 'block'}} onClick={() => setIsMobileMenu(prev => !prev)}>
               <Menu sx={{height : '48px', width : '48px'}}/>
            </Button>
        </Box>
        <Box display='grid' gridTemplateColumns='1fr 1fr 1fr' alignItems='center' width='100%' gap='8px' pb='16px' >
            {!xlgScreen && <SocialNetworks/>}
            <Languages/>    
            {xlgScreen && <SocialNetworks/>}
            <WorkTime/>
        </Box>  
        {
          isMobileMenu && <Portal container={document.getElementById('root')}>
                                <MobileMenu setIsMobileMenu = {setIsMobileMenu}/>     
                          </Portal>
        }  
      </Box>
    </Box>
    
  )
}

export default Contact

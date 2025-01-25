import { Box, Button, Portal } from "@mui/material"
import Logo from "./Logo"
import Languages from "./Languages"
import SocialNetworks from "./SocialNetworks"
import WorkTime from "./WorkTime"
import useScreenSizes from "../../hooks/ScreenSizes"
import { Menu } from "@mui/icons-material"
import {  useState } from "react"
import MobileMenu from "../modals/MobileMenu"



const Contact = ({bbottom}) => {
  const {smScreen, mdScreen, xlgScreen, lgScreen} = useScreenSizes()
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  
  return (
    <Box id = {bbottom ? '#' : 'contacts'} height={smScreen ? '4rem' : mdScreen ? '5rem' :  lgScreen ? '5rem' : '7rem'} width='100%'  
         position={bbottom ? 'fixed' : 'static'} top={bbottom ? '-20px' : '' }  bgcolor='#FFFFFF'
         zIndex='2' maxWidth='1440px' p='1rem' borderBottom={bbottom}>
        <Box height='100%' width='100%' bgcolor='#FFFFFF'  color='black' p='1rem'  >
            <Box height='100%' width='100%' display='flex' justifyContent='space-between' alignItems='center'  >
                <Logo/>
                <Languages/> 
                <SocialNetworks bbottom={bbottom}/>
                <WorkTime/> 
                {
                  bbottom && <Button disableTouchRipple sx={{display : xlgScreen ? 'none' : 'block'}} 
                                     onClick={() => setIsMobileMenu(prev => !prev)}>
                                    <Menu sx={{height : '36px', width : '26px', color : '#000000'}}/>
                             </Button>
                }      
                {
                 isMobileMenu && <Portal container={document.getElementById('root')}>
                                     <MobileMenu setIsMobileMenu = {setIsMobileMenu}/>     
                                 </Portal>
                }  
         </Box>
       </Box>
    </Box>
    
    
  )
}

export default Contact

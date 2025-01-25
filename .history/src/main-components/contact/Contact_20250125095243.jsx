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
  const {xlgScreen} = useScreenSizes()
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  
  return (
    <Box id = {bbottom ? '#' : 'contacts'} height={xlgScreen ? '8rem' : 'auto'} width='100%'  position={bbottom ? 'fixed' : 'static'} top={bbottom ? '-20px' : '' } 
         zIndex='2' maxWidth='1440px' px='12px'>

       <Box height='100%' width='100%' bgcolor='#FFFFFF'  color='black' p='1rem' >

         <Box height='100%' width='100%' display='flex' justifyContent='space-between' alignItems='center'  borderBottom={bbottom}>
             <Logo/>
             {bbottom && <Languages/> } 
             {(xlgScreen || !bbottom<SocialNetworks/>
             {xlgScreen && <WorkTime/> }
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

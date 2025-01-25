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

         <Box height='100%' width='100%' display='flex' justifyContent='space-between'  borderBottom={bbottom}>

{/* ............Logo and mobile menu button, button is none when xlgScreens.................................. */}
        <Box display='flex' justifyContent='space-between' alignItems='center' p='12px' width='100%' height='100%'>
            <Logo/>
            {
              bbottom && <Button disableTouchRipple sx={{display : xlgScreen ? 'none' : 'block'}} 
                                 onClick={() => setIsMobileMenu(prev => !prev)}>
                                <Menu sx={{height : '48px', width : '48px'}}/>
                        </Button>
            }
        </Box>
        
        <Box  width='100%' display='grid' gridTemplateColumns={bbottom ? '1fr 1fr 1fr' : '1fr 1fr'} alignItems='center' pb='16px' >
            {!xlgScreen && <SocialNetworks/>}
            {bbottom && <Languages/> }    
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
    </Box>
    
    
  )
}

export default Contact

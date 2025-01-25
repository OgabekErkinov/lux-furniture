import { CloseOutlined } from '@mui/icons-material'
import { Box, Button, Stack } from '@mui/material'
import { logoUrl } from '../../constants/constantas'
import Navbar from '../navbar/Navbar'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useEffect } from 'react'

const MobileMenu = ({setIsMobileMenu}) => {
    const {xlgScreen} = useScreenSizes()
    useEffect(()=>{
        if(xlgScreen){
            setIsMobileMenu(false)
        }     
    },[xlgScreen])
  return (
    <Box width='300px' height='100vh' position='fixed' zIndex={2} right={0} top={0} 
         bgcolor={'rgb(4, 173, 12)'}>
        <Stack width='90%' height='98%'>
            <Box display='flex' justifyContent='space-between' width='100%' my='1rem'>
                <Box>
                </Box>
                <Button onClick = {() => setIsMobileMenu(false)}>
                    <CloseOutlined sx={{color : 'black', height : '32px', width : '32px'}}/>
                </Button>
                
            </Box>
            <Box component='img' src={logoUrl} height='3.5rem' width='12rem' mx='auto' my='1rem' 
                 bgcolor={'rgb(253, 253, 253)'}
                 boxShadow={'0 0 12px 6px rgba(255, 245, 245, 0.65)'}/>
            <Navbar isNavbar='true' direct='column'/>
        </Stack>

    </Box>
  )
}

export default MobileMenu
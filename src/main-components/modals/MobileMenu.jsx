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
    <Box width='300px' height='100vh' position='absolute' zIndex={2} right={0} top={0} bgcolor={'rgb(190, 212, 144)'}>
        <Stack width='90%' height='100%'>
            <Box display='flex' justifyContent='space-between' width='100%'>
                <Box>
                </Box>
                <Button onClick = {() => setIsMobileMenu(false)}>
                    <CloseOutlined sx={{color : 'black', height : '32px', width : '32px'}}/>
                </Button>
                
            </Box>
            <Box component='img' src={logoUrl} height='3rem' width='10rem' mx='auto' my='1rem'/>
            <Navbar isNavbar='false' direction='column'/>
        </Stack>

    </Box>
  )
}

export default MobileMenu
import { CloseOutlined } from '@mui/icons-material'
import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { logoUrl } from '../../constants/constantas'
import Navbar from '../navbar/Navbar'

const MobileMenu = ({setIsMobileMenu}) => {
  return (
    <Box width='30vw' height='100vh' position='absolute' zIndex={2} right={0} top={0} bgcolor={'rgb(190, 212, 144)'}>
        <Stack width='90%' height='100%'>
            <Box display='flex' justifyContent='space-between' width='100%'>
                <Box></Box>
                <Button onClick = {() => setIsMobileMenu(false)}>
                    <CloseOutlined sx={{color : 'black', height : '32px', width : '32px'}}/>
                </Button>
                
            </Box>
            <Box component='img' src={logoUrl} height='4rem' width='10rem' mx={'auto'} my={}/>
            <Navbar isNavbar='true'/>
        </Stack>

    </Box>
  )
}

export default MobileMenu
import { CloseOutlined } from '@mui/icons-material'
import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { logoUrl } from '../../constants/constantas'
import Navbar from '../navbar/Navbar'

const MobileMenu = ({setIsMobileMenu}) => {
  return (
    <Box width='20vw' height='100vh' position='absolute' zIndex={2} right={0} top={}>
        <Stack width='80%' height='100%'>
            <Box display='flex' justifyContent='space-between'>
                <Box></Box>
                <Button onClick = {() => setIsMobileMenu(false)}>
                    <CloseOutlined/>
                </Button>
                
            </Box>
            <Box component='img' src={logoUrl}/>
            <Navbar isNavbar='true'/>
        </Stack>

    </Box>
  )
}

export default MobileMenu
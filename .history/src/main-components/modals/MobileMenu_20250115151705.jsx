import { CloseOutlined } from '@mui/icons-material'
import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { logoUrl } from '../../constants/constantas'
import Navbar from '../navbar/Navbar'

const MobileMenu = ({setIsMobileMenu}) => {
  return (
    <Box width='30vw' height='100vh' position='absolute' zIndex={2} right={0} top={0} bgcolor={'green'}>
        <Stack width='80%' height='100%'>
            <Box display='flex' justifyContent='space-between'>
                <Box></Box>
                <Button onClick = {() => setIsMobileMenu(false)}>
                    <CloseOutlined sx={{color : 'black'}}/>
                </Button>
                
            </Box>
            <Box component='img' src={logoUrl}/>
            <Navbar isNavbar='true'/>
        </Stack>

    </Box>
  )
}

export default MobileMenu
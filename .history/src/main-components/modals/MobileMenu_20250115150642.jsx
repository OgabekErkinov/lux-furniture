import { CloseOutlined } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'
import React from 'react'

const MobileMenu = () => {
  return (
    <Box width='20vw' height='100vh' position='absolute' zIndex={2}>
        <Stack width='80%' height='100%'>
            <Box display='flex' justifyContent='space-between'>
                <Box></Box>
                <CloseOutlined/>
            </Box>
            <Box component='img' src={}/>

        </Stack>

    </Box>
  )
}

export default MobileMenu
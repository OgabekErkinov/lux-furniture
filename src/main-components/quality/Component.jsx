import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Component = ({title, image}) => {
  return (
    <Box width='100%' height='240px' bgcolor='#94C11F4D' borderRadius='10px'>
        <Stack height='100%' width='100%' p='12px'>
            <Typography fontSize='18px' color='#000000' height='25%'>{title}</Typography>
            <Box component='img' src={image} height='75%' width='100%'/>
        </Stack>

    </Box>
  )
}

export default Component

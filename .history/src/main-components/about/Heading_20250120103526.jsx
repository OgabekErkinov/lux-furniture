import { Stack, Typography } from '@mui/material'
import React from 'react'

const Heading = ({about}) => {
  return (
    <Stack height='100%' width = '100%' color='#000000' justifyContent='flex-start' gap='2rem' >
        <Typography  fontSize='28px' fontWeight='600'>{about.title}</Typography>
        <Typography fontSize='14px'>{about.paragraph}</Typography>
    </Stack>
  )
}

export default Heading

import { Box, Stack } from '@mui/material'
import React from 'react'
import Heading from './Heading'
import Partners from './Partners'

const PartnerSection = () => {
  return (
    <Box height = 'auto' width='100%'>
        <Stack height='auto' width='100%' alignItems='center'>
            <Heading/>
            <Partners/>
        </Stack>

    </Box>
  )
}

export default PartnerSection

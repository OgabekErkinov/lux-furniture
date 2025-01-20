import { Box, Typography } from '@mui/material'
import React from 'react'

const Heading = () => {
  return (
    <Box mb="1rem">
        <Typography variant="h4" fontWeight="700" color='#000000' width='50%'>
            {furnitures.heading}
        </Typography>
        <Typography color="textSecondary" my='1rem'>{furnitures.helperText}</Typography>
    </Box>
  )
}

export default Heading
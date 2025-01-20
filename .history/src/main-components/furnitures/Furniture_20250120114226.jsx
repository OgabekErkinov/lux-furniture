import { Box, Typography } from '@mui/material'
import React from 'react'

const Furniture = ({furniture}) => {
  return (
    <Box  bgcolor="#94C11F" borderRadius="10px" height="auto" width='100%'
         display="flex" flexDirection="column" justifyContent="space-between">
        <Typography variant="h6" fontWeight="500" px='5px'>
                {furniture.title}
        </Typography>
        <Box component="img" src={furniture.image} alt={furniture.title}
             maxHeight="200px" width='100%' borderRadius="10px" style={{ objectFit: 'cover' }}/>
    </Box>
  )
}

export default Furniture
import { Box } from '@mui/material'
import React from 'react'

const Furniture = ({furniture}) => {
  return (
    <Box  bgcolor="#94C11F" borderRadius="10px" height="auto"
         display="flex" flexDirection="column" justifyContent="space-between">
        <Typography variant="h6" fontWeight="500" px='5px'>
                {furniture.title}
        </Typography>
        <Box component="img" src={furniture.image} alt={furniture.title}
             height="200px" width='100%' borderRadius="10px" style={{ objectFit: 'cover' }}/>
    </Box>
  )
}

export default Furniture
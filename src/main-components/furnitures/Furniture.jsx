import { Box, Typography } from '@mui/material'
import React from 'react'

const Furniture = ({furniture}) => {
  return (
    <Box  bgcolor="rgb(14, 126, 10)" borderRadius="10px" height="18rem" width='100%'
         display="flex" flexDirection="column" justifyContent="space-between">
        <Typography variant="h6" fontWeight="500" fontSize='16px' p='12px' height='50px'>
                {furniture.title}
        </Typography>
        <Box component="img" src={furniture.image} alt={furniture.title}
             height="200px" width='100%' borderRadius="10px" style={{ objectFit: 'cover' }}/>
    </Box>
  )
}

export default Furniture
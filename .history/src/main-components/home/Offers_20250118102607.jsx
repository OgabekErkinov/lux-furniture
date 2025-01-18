import { Box, Typography } from '@mui/material'
import React from 'react'

const Offers = () => {
  return (
    <Box width='100%' height={xlgScreen ? '5rem' : '3rem'} display='grid' gridTemplateColumns= { xlgScreen ? '2fr 1fr' : '1fr'}>
          <Box display='grid' gridTemplateColumns='repeat(3, 1fr)'>
             <Box display='flex' gap='0.5rem' alignItems='center' justifyContent='center' width='50%' data-aos = 'fade-down'>
                 <Box component='img' src='/checkmark.svg' height={smScreen ? '16px' : '24px'} width={smScreen ? '16px' : '24px'}/>
                 <Typography fontSize={smScreen ? '6px': '12px'}>Warranty from 3 years on all products</Typography>
             </Box>
             <Box display='flex' gap='0.5rem' alignItems='center' justifyContent='center' width='50%' data-aos = 'fade-down' data-aos-delay = '200'>
               <Box component='img' src='/checkmark.svg' height={smScreen ? '16px' : '24px'} width={smScreen ? '16px' : '24px'}/>
               <Typography fontSize={smScreen ? '6px': '12px'}>Delivery from 30,000 sum to the door</Typography>
             </Box>
             <Box display='flex' gap='5px' alignItems='center' justifyContent='center' width='50%' data-aos = 'fade-down' data-aos-delay = '400'>
               <Box component='img' src='/checkmark.svg' height={smScreen ? '16px' : '24px'} width={smScreen ? '16px' : '24px'}/>
               <Typography fontSize={smScreen ? '6px': '12px'}>Payment upon viewing the furniture</Typography>
             </Box>

          </Box>

        </Box>
  )
}

export default Offers
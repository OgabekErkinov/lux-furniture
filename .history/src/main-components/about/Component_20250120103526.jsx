import { Box, Stack, Typography } from '@mui/material'
import Aos from 'aos'
import React, { useEffect } from 'react'

const Component = ({component, idx}) => {

        useEffect(()=>{
            Aos.init({
                duration : 1000
            })
    
            return () => Aos.refreshHard()
        })

     return (
       <Box data-aos = 'fade-up' data-aos-delay = {idx*100}
            width='100%' height='100%'  bgcolor='#DFECBC' overflow='hidden'
            color = {!component.image? '#000000' : '#FFFFFF'} borderRadius='8px' key={idx}
            sx={{
            backgroundImage : `url(${component.image})`,
            backgroundSize : 'cover' }}>

           {/* ..................................................................... */}
           <Stack height = '100%' justifyContent='center' alignItems='center' p='1rem' 
                  bgcolor='rgba(37, 37, 37, 0.23)' >
                  <Box height='70%' width='100%' pl='1rem' display='flex' justifyContent='flex-start' alignItems='flex-start'>
                      <Typography  fontSize='52px'>{component.result}</Typography>
                  </Box>
                  <Box width='100%' height='20%'>
                     <Typography fontSize='22px'>{component.type}</Typography>
                  </Box>
           </Stack>
           {/* ....................................................................... */}

        </Box>
  )
}

export default Component

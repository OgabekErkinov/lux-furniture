import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'
import Aos from 'aos'

const Images = () => {
    const {smScreen, mdScreen} = useScreenSizes()
    const images = ["/about/about3.png", "/about/about4.png"]

    useEffect(() => {
        Aos.init({
            duration : 1000
        })

        return () => Aos.refreshHard()
    })

  return (
    <Box height='100%' width='100%' mx='auto' display='grid' my='1rem'
         gridTemplateColumns={(smScreen||mdScreen) ? '1fr' : 'repeat(2, 30rem)'}>
         {
            images.map((image, idx) => {
                return (
                    <Box component='img' src={image} data-aos = 'fade-up' data-aos-delay = {idx*200} 
                         height = '22rem' width = '90%' key={idx} borderRadius='12px'/>
                )
            })
         }

    </Box>
  )
}

export default Images

import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import useScreenSizes from '../../hooks/ScreenSizes'
import DownloadButton from './DownloadButton'
import Aos from 'aos'
import 'aos/dist/aos.css';

const LeftSection = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t} = useTranslation()

     useEffect(() => {
          Aos.init({
            duration : 1000
          })
        }, [])

  return (
    <Box width='100%' height='100%' display='grid' gridTemplateColumns='1fr' gap='1rem'
        justifyContent='flex-start' alignItems='center'>
        
        <Stack
           
    </Box>
  )
}

export default LeftSection

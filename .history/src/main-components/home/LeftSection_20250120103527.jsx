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

        <Box width='100%' display='flex' alignItems='center' gap='8px' data-aos = 'fade-right' data-aos-delay="0">
            <Box width='10%' bgcolor='black' height='1px'></Box>
            <Typography>{t('home.fromManufacturer')}</Typography>
        </Box>

        <Box width='100%' display='flex' flexWrap='wrap'>
            <Typography fontWeight='500' fontSize='40px' data-aos = 'fade-right' data-aos-delay="200">
                     <span style = {{color:'green',fontWeight :'500', fontSize :'48px'}}>
                        {t('home.furnitureForCustomer.first')}
                    </span>
                       {t('home.furnitureForCustomer.second')}    
            </Typography>
        </Box>

        <Box width='100%'>
              <Typography fontSize='22px' data-aos = 'fade-right' data-aos-delay="400">
                {t('home.offer')}
              </Typography>
        </Box>

        {/* ....download button ...................................................................... */}
        <DownloadButton/>
           
    </Box>
  )
}

export default LeftSection

import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useEffect } from 'react'
import Aos from 'aos'


const Heading = () => {
    const {t} = useTranslation()
    const catalog = t('catalogSection', {returnObjects : true})
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()

    useEffect(()=>{
      Aos.init({
        duration : 1000
      })
    })

  return (
    <Box width='100%' height='100%' display='grid' gridTemplateRows='1fr 1fr' justifyContent='center' 
         color='#000000' textAlign='center' rowGap='0.5rem' >
        <Typography variant="h4" fontWeight='700' fontSize={smScreen ? '20px' : mdScreen ? '24px' : '32px'}
          data-aos = 'fade-up'>
             {catalog.heading}
        </Typography>
        <Typography fontSize='10px' data-aos = 'fade-up'>{catalog.helperHeading}</Typography>
    </Box>
  )
}

export default Heading

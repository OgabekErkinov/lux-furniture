import { Box, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import  useScreenSizes  from '../../hooks/ScreenSizes'
import Heading from './Heading'
import Component from './Component'
import Images from './Images'



const About = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t} = useTranslation()
    const about = t('aboutSection.paragraph', {returnObjects : true})
    const components = t('aboutSection.components', {returnObjects : true})


  return (
    <Box height='50rem' width='96%'>
      <Box height='100%' width='100%' display='grid' gridTemplateRows='auto 8rem'>
        
           
           <Images/>
      </Box>

    </Box>
    
  )
}

export default About

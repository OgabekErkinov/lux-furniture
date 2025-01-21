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
    <Box height='auto' width='96%'>
      <Box height='100%' width='100%' display='grid' gridTemplateRows='auto auto'>
        
           <Box height='auto' width='100%'>
              <Box width='100%' height='auto' display='grid' justifyContent='center'  gap='1rem'
                  gridTemplateColumns={xlgScreen ? 'repeat(3, 1fr)' : smScreen ? 'auto' : 'auto auto'}
                  >

                  <Heading about={about}/>
        
                  {
                   components.map((component, idx) => {
                              return (
                                 <Component component={component} idx={idx} key={idx}/>
                                     ) })
                  }
              </Box>
           </Box>

           <Box height='100%' width='100%'>
              <Images/>
           </Box>
           
           
      </Box>

    </Box>
    
  )
}

export default About

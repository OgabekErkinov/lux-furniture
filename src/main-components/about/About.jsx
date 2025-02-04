import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import  useScreenSizes  from '../../hooks/ScreenSizes'



const About = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t} = useTranslation()
    const about = t('about.paragraph', {returnObjects : true})
    const components = t('about.components', {returnObjects : true})
    const images = ["/about/about3.webp", "/about/about4.webp"]


  return (
    <Box height='auto' width='96%' id = 'about'>
      <Box height='100%' width='100%' display='grid' gridTemplateRows='auto auto' gap='1rem'>

           <Box height='auto' width='100%'>
              <Box width='100%' height='auto' display='grid' justifyContent='center'  gap='1rem'
                  gridTemplateColumns={xlgScreen ? 'repeat(3, 1fr)' : smScreen ? '1fr' : '1fr 1fr'}>
            {/* heading */}
                 <Stack height='20rem' width = '100%' color='#000000' justifyContent='flex-start' gap='2rem' >
                     <Typography  fontSize='28px' fontWeight='600'>{about.title}</Typography>
                     <Typography fontSize='13px'>{about.paragraph}</Typography>
                </Stack>
        
                  {
                   Array.isArray(components) && components.map((component, idx) => {
                              return (
                                 <Box data-aos = 'fade-up' data-aos-delay = {idx*100}
                                      width='100%' height='15rem'  bgcolor='rgba(7, 153, 19, 0.97)' overflow='hidden'
                                      color = {'#FFFFFF'} borderRadius='8px' key={idx}
                                             sx={{
                                             backgroundImage : `url(${component.image})`,
                                             backgroundSize : 'cover' }}>
                                      <Stack height = '100%' justifyContent='center' alignItems='center' p='1rem' 
                                             bgcolor='rgba(37, 37, 37, 0.23)' >
                                          <Box height='70%' width='100%' pl='1rem' display='flex' justifyContent='flex-start' alignItems='flex-start'>
                                              <Typography  fontSize='52px'>{component.result}</Typography>
                                          </Box>
                                          <Box width='100%' height='20%'>
                                              <Typography fontSize='22px'>{component.type}</Typography>
                                          </Box>
                                      </Stack>
                                 </Box>
                                     ) })
                  }
              </Box>
           </Box>

           <Box height='auto' width='100%'>
              <Box height='auto' width='100%' display='grid'gap='1rem' justifyContent='space-between'
                       gridTemplateColumns={(smScreen||mdScreen) ? '1fr' : 'repeat(2, 48%)'}>
                       {
                          images.map((image, idx) => {
                              return (
                                  <Box component='img' src={image} data-aos = 'fade-up' data-aos-delay = {idx*200} 
                                       height = '20rem' width = '100%' key={idx} borderRadius='12px'/>
                              )
                          })
                       }
              
                  </Box>
           </Box>
           
           
      </Box>

    </Box>
    
  )
}

export default About

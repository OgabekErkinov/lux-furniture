import React, { useEffect } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

import Aos from 'aos'
import 'aos/dist/aos.css';

import useScreenSizes from '../../hooks/ScreenSizes'
import { handleDownload } from '../../libs/handleDownload'
import { uploadImages } from '../../constants/constantas'
import Offers from './Offers'


const Main = () => {
  const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  const {t} = useTranslation()

   useEffect(() => {
        Aos.init({
          duration : 1000
        })
      }, [])
  
  return (
    <Box id = 'home' width='100%' height={xlgScreen||lgScreen ? 'auto' : '1340px'} px='24px' color='black'>

        <Box height='auto' width='100%' display='grid' gap='1rem' justifyContent='center'
             gridTemplateColumns={xlgScreen ? '1fr 1.5fr' : '1fr'}>

             {/* ........................................................... */}
             <Box width='100%' height='90%' >    
               <Stack height='100%' width='100%' justifyContent='space-around' alignItems='center' gap='1rem'>
                   <Box width='100%' display='flex' alignItems='center' gap='8px' data-aos = 'fade-right' data-aos-delay="0">
                      <Box width='10%' bgcolor='black' height='1px'></Box>
                      <Typography fontSize='20px'>{t('home.helperText')}</Typography>
                   </Box>

                   <Box width='100%' display='flex' flexWrap='wrap'>
                      <Typography fontWeight='500' fontSize='42px' data-aos = 'fade-right' data-aos-delay="200">
                             <span style = {{color:'green',fontWeight :'500', fontSize :'42px'}}>
                                  {t('home.heading.first')}
                             </span>
                                  {t('home.heading.second')}    
                      </Typography>
                   </Box>

                   <Box width='100%'>
                      <Typography fontSize='22px' lineHeight='28px' data-aos = 'fade-right' data-aos-delay="400">
                          {t('home.mainText')}
                      </Typography>
                   </Box>

        {/* ....download button ...................................................................... */}
                  <Box width='100%'  display='grid' gridTemplateColumns={xlgScreen||lgScreen ? '1.5fr 1fr' : '1fr 3fr 1fr'}
         >
                  {!(xlgScreen || lgScreen) && <Box></Box>}
                  <Button disableTouchRipple data-aos = 'zoom-in' data-aos-delay="600" 
                          onClick={()=>handleDownload(uploadImages)}>
            <Box position='absolute' zIndex='1' left='-10%' display={xlgScreen ? 'block' : 'none'} 
                 bottom='20%' height='60%' width='30%'>
                <Box component='img' src='/book.png' height='100%' width='100%' />
            </Box>

            <Stack bgcolor='green' color='#FFFFFF' width='100%' height='5rem' justifyContent='center' borderRadius='10px'>
                <Typography variant='h4' fontWeight='600' fontSize={smScreen ? '12px' : '16px'}>{t('home.downloadCatalog')}</Typography>
                <Typography fontSize={smScreen ? '8px' : '10px'}>{t('home.buttonText')}</Typography>
            </Stack>
                  </Button>
       
                  </Box>
               </Stack>
           
             </Box>

             {/* ............................................................ */}
             <Box height='90%' width='100%' display='flex' flexDirection={lgScreen||xlgScreen ? 'row' : 'column'} 
                  gap='12px' justifyContent='center'>
                 <Box component='img' src='/home1.png' height='32rem' width={xlgScreen||lgScreen ?'60%':'100%'} 
                      borderRadius='0.5rem' data-aos = 'zoom-in'/>
             
                 <Box height='32rem' width={xlgScreen||lgScreen ?'40%' : '100%'} display='grid' 
                 gridTemplateRows={smScreen || mdScreen ? '1fr' : '1fr 3fr'}
                 gridTemplateColumns={smScreen || mdScreen ? '1fr 1.2fr' : '1fr'} gap='12px'>
        
        {/* .....first box in top................................................................. */}

           <Box height='100%' width='100%' display='grid' 
                gridTemplateColumns={smScreen || mdScreen ? '1fr' : '1fr 3fr 0fr'}
                gridTemplateRows={smScreen||mdScreen ? '0fr 1fr 1fr' : '1fr'}>
                  <Box></Box>
                     <Box component='img' src='/home2.jfif' height={xlgScreen||lgScreen ? '100%' : '80%'} width='100%' borderRadius='0.5rem' 
                            data-aos = 'fade-left'/>
                     <Box height='100%'>
                        {smScreen||mdScreen && <Offers/>}
                     </Box>
           </Box>
                  
        {/* ........second box in bottom........................................................... */}
                  <Box component='img' src='/home3.png' height={smScreen||mdScreen ? '90%' : '100%'} width='100%' 
                       borderRadius='0.5rem' data-aos = 'fade-up'/>
                 </Box>
             </Box>

        </Box>  
    </Box>
  )
}

export default Main
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'
import { homeImages } from '../../constants/constantas'
import Aos from 'aos'
import 'aos/dist/aos.css';
import i18next from '../../translator/configTranslator'
import Offers from './Offers'
import { MdScale } from 'react-icons/md'

const Home = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()

    useEffect(() => {
      Aos.init({
        duration : 1500
      })
    }, [])
  return (
    <Box width='98%' height='auto' px='32px' display='grid' gridTemplateColumns='1fr' 
           rowGap='5%' justifyContent='center' color='black' gridTemplateRows='5fr 1fr'>
        <Box height='auto' width='100%' display='grid' gridTemplateColumns={xlgScreen ? '1fr 1fr' : '1fr'} 
             gap='1rem' justifyContent='center'>

          {/* ...... offers and download catalog......................................................... */}
            <Box width='98%' height='100%' display='grid' gridTemplateColumns='1fr' 
                 justifyContent='flex-start' alignItems='space-evenly' gap='1rem'>
            <Box width='100%' display='flex' alignItems='center' gap='8px' data-aos = 'fade-right' data-aos-delay="0">
                <Box width='10%' bgcolor='black' height='1px'></Box>
                <Typography>от производителя</Typography>
            </Box>
            <Box width='100%' display='flex' flexWrap='wrap'>
                <Typography fontWeight='500' fontSize='40px' data-aos = 'fade-right' data-aos-delay="200">
                     <span style = {{color:'green',fontWeight :'500', fontSize :'40px'}}>Плетённая </span> 
                        мебель для вашего бизнеса
                </Typography>
            </Box>
            <Box width='100%'>
              <Typography fontSize='18px' data-aos = 'fade-right' data-aos-delay="400">
                Представляем специальную коллекцию плетеной мебели для бизнеса – от элегантных стульев и столов для кафе и ресторанов до уютных уголков для отдыха и лаунж-зон. 
              </Typography>

            </Box>

            {/* ....download button ...................................................................... */}
            <Box width='100%'  display='grid' gridTemplateColumns='1fr 1fr'>
                <Button data-aos = 'zoom-in' data-aos-delay="600">
                  <Box position='absolute' zIndex='1' left={smScreen ? '-1.5rem' : '-3rem'} 
                       bottom='1.5rem' height='60%' width='40%'>
                  <Box component='img' src={homeImages.img4} height='100%' width='100%' />
                  </Box>
                  <Stack bgcolor='#94C11F' color='#FFFFFF' width='100%' height='5rem' justifyContent='center'>
                    <Typography variant='h4' fontSize={smScreen ? '12px' : '18px'}>СКАЧАТЬ КАТАЛОГ</Typography>
                    <Typography fontSize={smScreen ? '8px' : '12px'}>более 200 видов мебели</Typography>
                    </Stack>
                </Button>
                <Box width='100%'></Box>
            </Box>
            </Box>

          {/* .......furnitures' images which offered.................................................... */}
            <Box height='100%' width='98%' display='grid' gridTemplateColumns={smScreen || mdScreen ? '1fr' : '2fr 1fr'} gap='5%' 
                 justifyContent='center'>
                <Box component='img' src={homeImages.img1} height='100%' width='100%' borderRadius='0.5rem'
                     data-aos = 'zoom-in'/>
                <Box height='100%' width='100%' display='grid' gridTemplateRows={smScreen || mdScreen ? '1fr' : '1fr 3fr'} gridTemplateColumns={smScreen || MdScale} gap='5%'>
                     <Box height='100%' width='100%'>
                      {smScreen || mdScreen && <Box display='grid' gridTemplateColumns='1fr'>
                          <Offers/>
                          <Box component='img' src={homeImages.img2} height='100%' width='70%' borderRadius='0.5rem' ml='auto'
                           data-aos = 'fade-left'/>
                      </Box>}
                    
                     </Box>
                    
                    <Box component='img' src={homeImages.img3} height='100%' width='100%' borderRadius='0.5rem'
                          data-aos = 'fade-up'/>

                </Box>
           </Box>

        </Box>
        
          {/* .....checking offers.......................................................................... */}
          {lgScreen || xlgScreen && <Offers/>}
        
       

    </Box>
  )
}

export default Home
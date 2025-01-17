import { Box, Button, Input, Stack, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'
import { homeImages } from '../../constants/constantas'

const Home = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const [isChecked, setIsChecked] = useState(false)
  return (
    <Box width='100%' height='auto' px='32px' display='grid' gridTemplateColumns='1fr' 
           rowGap='5%' justifyContent='center' color='black' gridTemplateRows='5fr 1fr'>
        <Box height='auto' width='100%' display='grid' gridTemplateColumns={xlgScreen ? '1fr 1fr' : '1fr'} 
             gap='1rem' justifyContent='center'>

          {/* ...... offers and download catalog......................................................... */}
            <Box width='98%' height='100%' display='grid' gridTemplateColumns='1fr' 
                 justifyContent='flex-start' alignItems='space-evenly' gap='1rem'>
            <Box width='100%' display='flex' alignItems='center' gap='8px'>
                <Box width='10%' bgcolor='black' height='1px'></Box>
                <Typography>от производителя</Typography>
            </Box>
            <Box width='100%' display='flex' flexWrap='wrap'>
                <Typography fontWeight='500' fontSize='40px'>
                     <Box color='green' display='inline'>Плетённая </Box> 
                        мебель для вашего бизнеса
                </Typography>
            </Box>
            <Box width='100%'>
              <Typography fontSize='18px'>
                Представляем специальную коллекцию плетеной мебели для бизнеса – от элегантных стульев и столов для кафе и ресторанов до уютных уголков для отдыха и лаунж-зон. 
              </Typography>

            </Box>
            <Box width='100%'  display='grid' gridTemplateColumns='1fr 1fr'>
                <Button>
                  <Box component='img' src={homeImages.img4} height='60%' width='40%' position='absolute' zIndex='1' left='-3rem' bottom='1.5rem'/>
                  <Stack bgcolor='#94C11F' color='#FFFFFF' width='100%' height='5rem' justifyContent='center'>
                    <Typography variant='h4' fontSize='18px'>СКАЧАТЬ КАТАЛОГ</Typography>
                    <Typography fontSize='12px'>более 200 видов мебели</Typography>
                    </Stack>
                </Button>
                <Box width='100%'></Box>
            </Box>
            </Box>

          {/* .......furnitures' images which offered.................................................... */}
            <Box height='100%' width='98%' display='grid' gridTemplateColumns='2fr 1fr' gap='5%' 
                 justifyContent='center'>
                <Box component='img' src={homeImages.img1} height='100%' width='100%' borderRadius='0.5rem'/>
                <Box height='100%' width='100%' display='grid' gridTemplateRows='1fr 3fr' gap='5%'>
                    <Box component='img' src={homeImages.img2} height='100%' width='50%' borderRadius='0.5rem' ml='auto'/>
                    <Box component='img' src={homeImages.img3} height='100%' width='100%' borderRadius='0.5rem'/>
                  
                  



                </Box>

           </Box>

        </Box>
    {/* .....checking offers.......................................................................... */}
        <Box width='100%' height='2rem' display='grid' gridTemplateColumns= { xlgScreen ? '2fr 1fr' : '1fr'}>
          <Box display='grid' gridTemplateColumns='repeat(3, 1fr)'>
             <Box display='flex' gap='5px' alignItems='center' justifyContent='center' width='50%'>
               <Box display='flex' height='16px' width='18px' border='1px solid black' borderRadius='5px'
                    onClick = {() => setIsChecked(prev => !prev)}>
                  {isChecked && <Box component='img' src='/checkmark.svg' height='100%' width='100%'/>}
               </Box>
               <Typography fontSize='8px'>Warranty from 3 years on all products</Typography>
             </Box>
             <Box display='flex' gap='5px' alignItems='center' justifyContent='center' width='50%'>
               <Input type='checkbox'/>
               <Typography fontSize='8px'>Delivery from 30,000 sum to the door</Typography>
             </Box>
             <Box display='flex' gap='5px' alignItems='center' justifyContent='center' width='50%'>
               <Input type='checkbox'/>
               <Typography fontSize='8px'>Payment upon viewing the furniture</Typography>
             </Box>

          </Box>

        </Box>
       

    </Box>
  )
}

export default Home
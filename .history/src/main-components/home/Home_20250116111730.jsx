import { Box, Typography } from '@mui/material'
import React from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'

const Home = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box width='100%' height='auto' px='16px' display='grid' gridTemplateColumns='1fr' color='black'>
        <Box height='auto' width='100%' display='grid' gridTemplateColumns={xlgScreen ? '1fr 1fr' : '1fr'}>
        <Box width='100%' height='100%' display='grid' gridTemplateColumns='1fr' justifyContent='flex-start'>
            <Box width='100%' display='flex'>
                <Box width='10%'></Box>
                <Typography>от производителя</Typography>
            </Box>
            <Box width='100%'>
                <Typography fontWeight='700' fontSize='40px'>
                     Плетённая мебель для вашего бизнеса
                </Typography>
            </Box>
            <Box width='100%'>
              <Typography fontSize='18px'>
                Представляем специальную коллекцию плетеной мебели для бизнеса – от элегантных стульев и столов для кафе и ресторанов до уютных уголков для отдыха и лаунж-зон. 
              </Typography>

            </Box>
            <Box width='100%'>
               
            </Box>

        </Box>

        </Box>
    {/* ................................................................................................... */}
        <Box></Box>

    </Box>
  )
}

export default Home
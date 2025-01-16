import { Box, Typography } from '@mui/material'
import React from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'

const Home = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box height='auto' width='100%' display='grid' gridTemplateColumns={xlgScreen ? '1fr 1fr' : '1fr'}>
        <Box width='100%' height='100%' display='grid' gridTemplateColumns='1fr' justifyContent='flex-start'>
            <Box width='100%'>
                <Typography>от производителя</Typography>
            </Box>
            <Box width='100%'>
                <Typography>Плетённая мебель для вашего бизнеса</Typography>

            </Box>

        </Box>

    </Box>
  )
}

export default Home
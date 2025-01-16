import { Box } from '@mui/material'
import React from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'

const Home = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box height='auto' width='100%' display='grid' gridTemplateColumns={xlgScreen ? ''}>

    </Box>
  )
}

export default Home
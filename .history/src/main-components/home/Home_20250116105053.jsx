import { Box } from '@mui/material'
import React from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'

const Home = () => {
    const {smScreen, } = useScreenSizes()
  return (
    <Box height='auto' width='100%' display='grid' gridTemplateColumns='1fr 1.2fr'>

    </Box>
  )
}

export default Home
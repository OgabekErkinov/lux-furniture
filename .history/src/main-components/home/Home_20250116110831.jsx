import { Box, Typography } from '@mui/material'
import React from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'

const Home = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box width='100%' height='auto' display='grid' gridTemplateColumns='1fr'>

    </Box>
  )
}

export default Home
import { useMediaQuery } from '@mui/material'
import React from 'react'

const ScreenSizes = () => {
  const smScreen = useMediaQuery('min-width : 300px')
  const mdScreen = useMediaQuery('min-width : 480px')
  const lgScreen = useMediaQuery('min-width : 640px')
  const xlgScreen = useMediaQuery('min-width : 960px')
}

export default {smScreen,  mdScreen, }
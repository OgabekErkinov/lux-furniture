import { useMediaQuery } from '@mui/material'
import React from 'react'

const ScreenSizes = () => {
  const smScreen = useMediaQuery('min-width : 479px')
  const mdScreen = useMediaQuery('max-width : 639px')
  const lgScreen = useMediaQuery('max-width : 959px')
}

export default ScreenSizes
import { Box, Typography } from '@mui/material'
import React from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'

const Heading = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t} = useTranslation()
  return (
    <Box height='auto' width='100%' color='#000000'>
        <Typography fontSize={xlgScreen ? '40px' : lgScreen ? '36px' : mdScreen ? '28px' : '24px'} 
                    fontWeight='400' width={xlgScreen ? '70%' : '90%'} textAlign='left'>
            {t('deliverySection.heading')}
        </Typography>

    </Box>
  )
}

export default Heading

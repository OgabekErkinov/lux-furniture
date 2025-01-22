import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import useScreenSizes from '../../hooks/ScreenSizes'

const Heading = () => {
    const {t} = useTranslation()
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box height='auto' width='100%'>
        <Typography fontSize={xlgScreen ? '40px' : lgScreen ? '36px' : mdScreen ? '28px' : '22px'} fontWeight='500'
                    width='50%' textAlign='center' color='#000000' mx='auto'>
            {t('questionsSection.heading')}
        </Typography>
    </Box>
  )
}

export default Heading

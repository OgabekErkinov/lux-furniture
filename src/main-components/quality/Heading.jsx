import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'

const Heading = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t} = useTranslation()
  return (
    <Box height='auto' width='100%' my='0.5rem'>
        <Stack height='auto' width='100%' alignItems='center' >
            <Typography fontSize={xlgScreen ? '40px' : lgScreen ? '36px' : mdScreen ? '28px' : '22px'} 
                        fontWeight='400' color='#000000'>
               {t('qualitySection.heading')}
            </Typography>
            <Typography fontSize='18px' color='grey' textAlign='left' width='100%'>
                {t('qualitySection.helperText')}
            </Typography>

        </Stack>

    </Box>
  )
}

export default Heading

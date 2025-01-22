import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import useScreenSizes from '../../hooks/ScreenSizes'

const Heading = () => {
    const {t} = useTranslation()
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const yearSize = xlgScreen ? '30px' : lgScreen ? '24px' : mdScreen ? '20px' : '18px'
  return (
    <Box height='auto' width='100%'>
        <Stack height='auto' width='100%' alignItems='center'>
            <Box height='auto' width='100%' display='flex' justifyContent='space-between' alignItems='center'>
                <Typography color='grey' fontSize={yearSize} textAlign='left'>2008</Typography>
                <Typography fontSize={xlgScreen ?'35px' : lgScreen ? '30px' : mdScreen ? '24px' : '16px'} 
                            textAlign='center' fontWeight='400' color='#000000'>
                    {t('partnerSection.heading')}
                </Typography>
                <Typography color='#000000' fontSize={yearSize}>2024</Typography>
            </Box>
            <Box component='img' src = '/partners/Group.svg' width='96%' height='auto'/>

        </Stack>

    </Box>
  )
}

export default Heading

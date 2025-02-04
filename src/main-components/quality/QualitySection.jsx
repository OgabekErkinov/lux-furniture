import { Box, Stack } from '@mui/material'
import React from 'react'
import Heading from './Heading'
import { useTranslation } from 'react-i18next'
import Component from './Component'
import useScreenSizes from '../../hooks/ScreenSizes'

const QualitySection = () => {
    const {t} = useTranslation()
    const offers = t('qualitySection.offers', {returnObjects : true})
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box height='auto' width='90%' id = 'guarantees'>
        <Stack height='auto' width='100%'>
            <Heading/>
            <Box height='auto' width='100%' display='grid' gap='0.2rem'
                gridTemplateColumns={xlgScreen ? 'repeat(6, 1fr)' : lgScreen ? 'repeat(3, 1fr)' : mdScreen ? 'repeat(2, 1fr)' : '1fr'}>
            {
             Array.isArray(offers) && offers.map((item, idx) => {
                return (
                    <Component title={item?.title} image={item?.image} key={idx}/>
                )
              })
            }
            </Box>

        </Stack>

    </Box>
  )
}

export default QualitySection

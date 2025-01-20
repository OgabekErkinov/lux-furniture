import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const NoProducts = () => {
    const {t} = useTranslation()
  return (
    <Box height='100%' width='100%' border='1px solid grey' display='flex'alignItems='center'>
        <Typography width='100%' textAlign='center' color='#000000'>
            {t('catalogSection.anyProduct')}
        </Typography>
    </Box>
  )
}

export default NoProducts

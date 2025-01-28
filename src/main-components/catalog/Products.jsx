import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import NoProducts from './NoProducts'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'

const Products = ({products}) => {
    const {smScreen, mdScreen} = useScreenSizes()
    const {t} = useTranslation()
  return (
    <Box height='100%' width='100%'>
        {
            products.length > 0 ? 
            <Box height='100%' width='100%' display='grid' gap='0.5rem'
             gridTemplateColumns={smScreen ? '1fr' : mdScreen ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'}>
            {
               Array.isArray(products) && products.map((product, idx) => {
                    return (
                        <Box height='18rem' width='100%' bgcolor='#FAFAFA' color='#000000' borderRadius='12px' py='5%'
                             display='flex' flexDirection='column' justifyContent='space-between' key={idx}>
                            <Box component='img' src={product.image} height='60%' width = '50%' mx='auto' 
                                 borderRadius='10px'/>
                            <Stack height='30%' width='90%' mx='auto' justifyContent='flex-end' pl='12px'>
                                <Typography fontSize='14px' >{product.name}</Typography>
                                <Typography fontSize='10px' color='grey'>{product.color}</Typography>
                            </Stack>
                        </Box>
                    )
                })
            }

        </Box> : <NoProducts/>
        }
        
       
       

    </Box>
  )
}

export default Products

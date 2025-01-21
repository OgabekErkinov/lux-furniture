import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import NoProducts from './NoProducts'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'

const Products = ({products}) => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t} = useTranslation()
    const productsT = t(`catalogSection.catalogies.${products}`)
  return (
    <Box height='100%' width='100%'>
        {
            productsT.length > 0 ? 
            <Box height='100%' width='100%' display='grid' gap='0.5rem'
                 gridTemplateColumns={smScreen ? '1fr' : mdScreen ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'}>
            {
               Array.isArray(productsT) && productsT.map((product, idx) => {
                    return (
                        <Box height='18rem' width='100%' bgcolor='#FAFAFA' color='#000000' borderRadius='12px' py='5%'
                             display='flex' flexDirection='column' justifyContent='space-between' key={idx}>
                            <Box component='img' src={product.image} height='60%' width = '50%' mx='auto'/>
                            <Stack height='30%' width='98%' mx='auto' justifyContent='flex-end'>
                                <Typography fontSize='14px' >{product.name}</Typography>
                                <Typography fontSize='10px' color='grey'>{productsT[idx].color}</Typography>
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

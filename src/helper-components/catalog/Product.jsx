import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { addFavourite, removeFavourite } from '../../store/favouriteSlice'
import { useDispatch } from 'react-redux'

const Product = ({product}) => {
    const dispatch = useDispatch()
    const [isFavourite, setIsFavourite] = useState(false)

    const handleClick = () => {
        setIsFavourite(prev => {
            const newFavouriteState = !prev;
            if (newFavouriteState) {
                dispatch(addFavourite(product))
            } else {
                dispatch(removeFavourite(product))
            }
            return newFavouriteState;
        })
    }
  return (
    <Box height='15rem' width='100%' color='#000000' position='relative'>
        <Stack height='100%' width='100%' alignItems='center' p='6px'> 
        <Button disableTouchRipple onClick={handleClick}
         sx={{
            position : 'absolute',
            top : '0',
            right : '0',
            zIndex : '2',
            height : 'auto',
            width : 'auto',
            color : 'red',
            '&:hover' : {
                bgcolor : 'transparent'
            }
        }}>
           {
            isFavourite ? <Favorite color='red' fontSize='28px'/> : <FavoriteBorder color='red' fontSize='28px'/>
           }
        </Button>
        <Box component='img' src={product.image} height='50%' width='90%'/>
        <Stack width='100%' p='6px'>
            <Typography>{product.name}</Typography>
            <Typography>{product.type}</Typography>
            <Typography width='90%' textAlign='end'>{product.price}$</Typography>
        </Stack>

        </Stack>
        


    </Box>
  )
}

export default Product

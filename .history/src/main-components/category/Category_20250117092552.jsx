import { Box, Typography } from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'

const Category = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
  return (
    <Box id = 'category' width='100%' height='5rem' px='12px' color='black' my='1rem'>
        

    </Box>
    
  )
}

export default Category

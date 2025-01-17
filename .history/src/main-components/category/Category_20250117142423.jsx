import { Box, Typography } from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'

const Category = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const images = ['/category/complekt.png','/category/osma.png','/category/sofakreslo.png','/category/lounger.png']
  return (
    <Box id = 'category' width='100%' height='500px' px='12px' color='black' my='1rem' display='block'>
      <Box height='100%' width='100%' display='grid' gridTemplateColumns='1fr' gridTemplateRows='1fr 2fr' gap='1rem'>

        {/* .................categories heading............................................... */}
        <Box width='50%' height='100%' display='grid' gridTemplateRows='2fr 1fr' justifyContent='center' mx='auto' gap='5px'>
            <Typography variant='h4' fontSize={xlgScreen ? '40px' : lgScreen ? '32px' : '20px'} 
                        textAlign='center' fontWeight='600'>
                    Производим 4 основных категории мебели
            </Typography>
            <Typography textAlign='center' fontSize='12px'>более 200 видов продуктов во всем ассортименте</Typography>
        </Box>

        {/* ........categories with images ................................................... */}

        <Box height = '100%' width = '100%' bgcolor='red'>
           <Box width='90%' height='100%' display='grid'>

           </Box>


        </Box>

        {/* <Box width='100%' height = '50%' display='grid' gridTemplateColumns={smScreen ? '1fr' : mdScreen ? '1fr 1fr' : 'repeat(4, 1fr)'} gap='10px'>
            {
                images.map((image, idx) => {
                    return (
                        <Box height='100%' width='100%' >
                        <Box component='img' src={image} height='100%' width='100%' borderRadius='10px' />
                    </Box>
                    )
                })
            }
           
        </Box> */}

      </Box>
    </Box>
    
  )
}

export default Category

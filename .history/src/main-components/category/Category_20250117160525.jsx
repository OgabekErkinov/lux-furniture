import { Box, Typography } from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'

const Category = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const images = ['/category/complekt.png','/category/osma.png','/category/sofakreslo.png','/category/lounger.png']
  return (
    <Box width='80%' height='25rem' px='12px' my='1rem' color='black'>
      <Box height='100%' width='100%' display='flex' flexDirection='column' justifyContent='center' gap='1rem'>

        {/* .................categories heading............................................... */}
        <Box width={smScreen ? '80%' : mdScreen ? '60%' : lgScreen ?  '50%'} height='40%' display='flex' flexDirection='column' justifyContent='space-evenly' mx='auto' >
            <Typography variant='h4' fontSize={xlgScreen ? '40px' : lgScreen ? '28px' : '20px'} 
                        textAlign='center' fontWeight='600'>
                    Производим 4 основных категории мебели
            </Typography>
            <Typography textAlign='center' fontSize='12px'>более 200 видов продуктов во всем ассортименте</Typography>
        </Box>

        {/* ........categories with images ................................................... */}

        <Box height = '40%' width = '100%' textAlign='center'>
           <Box width='90%' height='100%' mx='auto' display='grid' gridTemplateColumns='1fr 1fr 1fr 1fr' gap='1rem'>
           {
                images.map((image, idx) => {
                    return ( 
                        <Box component='img' src={image} height='80%' width='100%' borderRadius='10px' key={idx} /> 
                    )
                })
            }

           </Box>


        </Box>

      </Box>
    </Box>
    
  )
}

export default Category
